import { ArrowDown, ChevronDown } from "lucide-react";
import PictureGallery from "../utils/PictureGallery";
import VideoGallery from "../utils/VideoGallery";
import { Link } from "react-router-dom";

const Gallery = () => {

  return (
    <section className={`flex flex-col `}>
      <section className={`picture_gallery_1 bg-red-400 `}>
        <PictureGallery />
      </section>
      <section
        className={`bg-gray-800 w-full flex flex-col justify-center items-center `}
      >
        <ChevronDown className={`h-10 w-10 animate-bounce m-3`} />
        <Link
          to={"registration_&_admissions"}
          className={`bg-[#FFC700] w-fit text-4xl font-semibold p-5 rounded-xl shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:scale-105 duration-200 ease-in-out`}
        >
          Admissions Open
        </Link>
      </section>
      <section className={`picture_gallery_1 bg-gray-800 pt-5`}>
        <div className={` w-full`}>
          <h1
            className={`w-full text-5xl p-5 text-center text-white drop-shadow-2xl shadow-black font-serif`}
          >
            Video Gallery
          </h1>
        </div>
        <VideoGallery />
      </section>
      <section
        className={`bg-gray-800 w-full flex flex-col justify-center items-center `}
      >
        <ChevronDown className={`h-10 w-10 animate-bounce m-3`} />
        <Link
          to={"registration_&_admissions"}
          className={`bg-[#FFC700] w-fit text-4xl font-semibold p-5 rounded-xl shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:scale-105 duration-200 ease-in-out`}
        >
          Admissions Open
        </Link>
      </section>
    </section>
  );
};

export default Gallery;
