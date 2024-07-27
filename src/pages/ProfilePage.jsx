import { Flame } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

const ProfilePage = () => {
  return ( 
    <>
    <div className="flex gap-10">
      <div className="flex-1 space-y-10">
      <h1 className="text-5xl font-bold">Welcome To My Web Profile</h1>
      <p>
        Halo nama saya Aliyosa Kevin. saya seorang Frontend Developer dan juga Content creator Real Drum Cover. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis autem repudiandae accusantium atque soluta ipsa itaque est voluptate tempore perferendis quod illo, molestiae repellat aliquid deserunt laudantium eius a.
      </p>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="w-48 rounded-lg"><img src="kepin2.jpg" alt="" /></div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-10">
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">
            <LayoutDashboard className="stroke-accent fill-accent/50" />
            <span>Frontend Developer</span>
          </h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur eaque laudantium quidem amet, debitis eligendi nisi inventore nulla? Fugit!
          </p>
        </div>
      </div>
      <div><div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">
            <Flame className="stroke-secondary fill-secondary/50" />
            <span>Content Creator</span>
          </h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur eaque laudantium quidem amet, debitis eligendi nisi inventore nulla? Fugit!
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage
