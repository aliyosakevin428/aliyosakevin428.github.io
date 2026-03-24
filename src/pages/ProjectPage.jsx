import { useState, useEffect } from 'react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);

  const statusStyles = {
    Completed: 'bg-green-500 text-white',
    'On Progress': 'bg-yellow-500 text-white',
    active: 'bg-blue-500 text-white',
    inactive: 'bg-red-500 text-white',
  };

  useEffect(() => {
    fetch('/json/projectData.json')
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((err) => console.error('Error fetch data:', err));
  }, []);

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold">My Project </h1>
        <p className="max-w-2xl">
          Berikut adalah beberapa project yang telah saya kerjakan, baik secara
          individu maupun bersama tim. Silakan dilihat-lihat 😄
        </p>
      </div>

      {datas.length === 0 ? (
        <p className="text-center opacity-70">Loading project...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((data) => (
            <div
              key={data.id}
              className="card bg-base-200 shadow hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <figure className="aspect-video w-full overflow-hidden">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="card-title text-lg">{data.name}</h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      statusStyles[data.status] || 'bg-gray-500/20 text-white'
                    }`}
                  >
                    {data.status}
                  </span>
                </div>

                <p className="text-sm opacity-80">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
