import Images from "./Images";
import { Link } from "react-router-dom";
import { MapPinnedIcon } from "lucide-react";

const MapLocation = () => {
  return (
    <section className="home_about_photo_Paragraph flex bg-gray-400">
      <div className="w-1/2 bg-gray-400 p-10 flex justify-center items-center ">
        <Link to={`https://maps.app.goo.gl/yz5yCu1sHF3d8Lya6`}>
          <img
            src={Images[3].url}
            className=" w-full duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div
          className={`bg-[#FFC700]  animate-bounce rounded-full shadow-md  shadow-black`}
        >
          <MapPinnedIcon className={`h-28 w-28 p-5  `} />
        </div>
        <Link
          to={`https://maps.app.goo.gl/yz5yCu1sHF3d8Lya6`}
          className="w-1/2 flex flex-col bg-[#007F73] border-2 border-[#007F73] shadow-2xl  rounded-xl m-5 text-2xl justify-center items-center p-3 hover:scale-110 duration-200 ease-in-out hover:rounded-2xl text-white"
        >
          <h1>Location</h1>
          <h1>Get Directions</h1>
        </Link>
        <Link
          to={"/registration/admissions"}
          className="w-1/2 flex flex-col bg-[#007F73] border-2 border-[#007F73] shadow-2xl  rounded-xl m-5 text-2xl justify-center items-center p-3 hover:scale-110 duration-200 ease-in-out hover:rounded-2xl text-white"
        >
          <h1>Or Contact us</h1>
        </Link>
      </div>
    </section>
  );
};

export default MapLocation;
