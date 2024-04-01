import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <Link to="/" className="text-[#FFC700] text-3xl font-medium">
          Creatives School
        </Link>
        <Link to="/" className="text-[#FFC700] text-2xl">
          Of Arts
        </Link>
        <h1>Copyright @CreativesSchoolofArt</h1>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Home
        </Link>
        <Link
          to="/gallery"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          Donations
        </Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link
          to="/registration_&_admissions"
          className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Register Here
        </Link>
        <Link
          to="/registration_&_admissions"
           className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Admission Form
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Location
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Fees/Payments
        </Link>
      </div>
      <div className="flex items-center justify-around">
        <Link
          to={`https://www.youtube.com/@CreativesArtchool`}
          className=" w-20 h-20 font-extralight flex items-center justify-center"
        >
          <Youtube
            className={`h-20 w-20 p-5 rounded-full hover:text-black hover:bg-[#FFC700] duration-200 ease-in-out font-light hover:scale-110 `}
          />
        </Link>

        <Link
          to={`https://www.youtube.com/@CreativesArtchool`}
          className=" w-20 h-20 font-extralight flex items-center justify-center"
        >
          <Instagram
            className={`h-20 w-20 p-5 rounded-full hover:text-black hover:bg-[#FFC700] duration-200 ease-in-out font-light hover:scale-110 `}
          />
        </Link>
        <Link
          to={`https://www.youtube.com/@CreativesArtchool`}
          className=" w-20 h-20 font-extralight flex items-center justify-center "
        >
          <Facebook
            className={`h-20 w-20 p-5 rounded-full hover:text-black hover:bg-[#FFC700] duration-200 ease-in-out font-light hover:scale-110 `}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
