import { useState, useEffect } from 'react';
import { FolderKanban } from 'lucide-react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    Completed: 'bg-green-500 text-white',
    'On Progress': 'bg-yellow-500 text-white',
    Active: 'bg-blue-500 text-white',
    Inactive: 'bg-red-500 text-white',
  };

  useEffect(() => {
    fetch('/json/projectData.json')
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetch data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="space-y-4 text-center lg:text-left">
        <div className="badge badge-primary badge-outline gap-2 px-4 py-4">
          <FolderKanban size={16} />
          Portfolio Projects
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          My Portfolio
        </h1>

        <p className="max-w-3xl text-sm sm:text-base opacity-80 leading-relaxed mx-auto lg:mx-0">
          Berikut adalah beberapa proyek yang telah saya kerjakan, baik secara
          individu maupun kolaboratif. Setiap proyek mencerminkan pengalaman,
          keterampilan teknis, serta pendekatan saya dalam membangun solusi
          digital yang fungsional dan bernilai.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : datas.length === 0 ? (
        <p className="text-center opacity-70">
          Belum ada project untuk ditampilkan.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {datas.map((data) => (
            <div
              key={data.id}
              className="group card bg-base-200 border border-base-300 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <figure className="aspect-video w-full overflow-hidden">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </figure>

              {/* Body */}
              <div className="card-body space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="card-title text-lg md:text-xl leading-snug">
                    {data.name}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                      statusStyles[data.status] || 'bg-gray-500 text-white'
                    }`}
                  >
                    {data.status}
                  </span>
                </div>

                <p className="text-sm opacity-80 leading-relaxed">
                  {data.description}
                </p>

                {/* Optional Tech Stack */}
                {data.tech && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.tech.map((item, index) => (
                      <span
                        key={index}
                        className="badge badge-outline rounded-full px-3 py-3"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {(data.demo || data.github) && (
                  <div className="flex flex-wrap gap-3 pt-3">
                    {data.demo && (
                      <a
                        href={data.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm rounded-xl"
                      >
                        Link Website
                      </a>
                    )}

                    {data.github && (
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-sm rounded-xl"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
