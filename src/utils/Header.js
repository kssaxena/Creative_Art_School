import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="bg-[#007F73] flex justify-evenly items-center p-2 w-[100%] h-16">
      {/* <h1>#FBA834</h1> */}
      <div>
        <h1 className="  text-black font-semibold text-xl">
          Creative Art School
        </h1>
      </div>
      <div className="text-black w-1/2">
        <nav className="flex justify-evenly">
          <Link
            to={"/"}
            className="p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700]"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700]"
          >
            Gallery
          </Link>
          <Link
            to={"/"}
            className="p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700]"
          >
          Activities
          </Link>
          <Link
            to={"/"}
            className="p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700]"
            >
              About
          </Link>
          <Link
            to={"/"}
            className="p-5 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#FFC700]"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div>
        <Button name={"Register Here"} />
      </div>
    </div>
  );
};

export default Header;
