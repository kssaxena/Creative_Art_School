import { Link } from "react-router-dom";
import Button from "./Button";
import { HomeIcon } from "lucide-react";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="bg-[#007F73] flex justify-evenly items-center p-2 w-[100%] h-16 shadow-sm shadow-black">
      {/* <h1>#FBA834</h1> */}

      <div className="text-black w-[33.33%]">
        <nav className="flex justify-evenly">
          <Link
            to={"/"}
            className={`p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700] ${
              location.pathname === "/"
                ? "underline decoration-[#FFC700] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            <HomeIcon />
          </Link>
          <Link
            to={"/gallery"}
            className={`p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700] ${
              location.pathname === "/gallery"
                ? "underline decoration-[#FFC700] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Gallery
          </Link>
          <Link
            to={"/activities"}
            className={`p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700] ${
              location.pathname === "/activities"
                ? "underline decoration-[#FFC700] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Activities
          </Link>
          <Link
            to={"/contact"}
            className={`p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700] ${
              location.pathname === "/contact"
                ? "underline decoration-[#FFC700] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Enquire Us
          </Link>
        </nav>
      </div>
      <div className="w-[33.33%]">
        <Link to={`/`} className="  text-black font-semibold text-xl">
          Creatives School of Arts
        </Link>
      </div>
      <div className="w-fit ">
        <Link
          to={"registration_&_admissions"}
          className={`border-2 border-[#FFC700] p-2 text-lg rounded-md text-white font-semibold hover:bg-[#FFC700] duration-200 ease-in-out hover:text-black hover:shadow-md hover:shadow-black`}
        >
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Header;
