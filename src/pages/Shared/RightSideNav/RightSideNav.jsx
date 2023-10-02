import { FcGoogle } from "react-icons/fc";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle size={18} />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FiGithub size={18} />
          Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
        <a
          href=""
          className="py-2 px-1 flex items-center gap-3 border rounded-t-lg text-lg"
        >
          <BiLogoFacebook size={24} />
          FaceBook
        </a>
        <a
          href=""
          className="py-2 px-1 flex items-center gap-3 border-x text-lg"
        >
          <BiLogoTwitter size={22} />
          Twitter
        </a>
        <a
          href=""
          className="py-2 px-1 flex items-center gap-3 border rounded-b-lg text-lg"
        >
          <FiInstagram size={22} />
          Instagram
        </a>
      </div>

      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
