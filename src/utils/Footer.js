import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <Link to="/" className="text-[#FFC700] text-3xl font-medium">
          Creative Art
        </Link>
        <Link to="/" className="text-[#FFC700] text-2xl">
          School
        </Link>
        <h1>Copyright @CreativeArtSchool</h1>
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
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Register Here
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Admission Form
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Location
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Payments
        </Link>
      </div>
      <div className="flex items-center p-10 ml-10 justify-around">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 flex justify-around ">
          <Youtube />
        </Link>

        <Link className="p-2 font-extralight hover:underline underline-offset-2 flex justify-around ">
          <Instagram />
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 flex justify-around ">
          <Facebook />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
