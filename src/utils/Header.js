import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="bg-blue-200 flex justify-evenly p-2 w-[100%] h-fit">
      <div>
        <h1 className="text-red-500  font-semibold text-xl">Creative Art School</h1>
      </div>
      <div className="text-black bg-red-400">
        <nav className="flex justify-around">
          <Link
            to={"/"}
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
