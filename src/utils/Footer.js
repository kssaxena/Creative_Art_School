import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <h1>Creative Art</h1>
        <h1>School</h1>
        <h1>Copyright @CreativeArtSchool</h1>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Home
        </Link>
        <Link
          to="/work"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          Gallery
        </Link>
        {/* <Link
          to="/about"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          About
        </Link> */}
        <Link
          to="/contact"
          className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          YouTube
        </Link>
        {/* <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Git Hub
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Linkedin
        </Link> */}
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Instagram
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Facebook 
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
      </div>
    </div>
  );
};

export default Footer;
