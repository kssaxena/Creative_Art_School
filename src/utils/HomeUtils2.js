import Images from "../utils/Images";
import { Link } from "react-router-dom";

const HomeUtils2 = () => {
    return (
      <section className="landing_quote_and_image flex p-20 bg-[#007F73] rounded-md ">
        <div className="landing_quote w-1/2 flex flex-col justify-center items-center ">
          <h1 className="p-10 text-4xl text-center font-semibold font-mono text-[#FFC700] drop-shadow-2xl shadow-black  ">
            Where Imagination comes alive
          </h1>
          <h1 className="text-white drop-shadow-2xl shadow-black text-center text-xl font-light tracking-wider m-5">
            Embark on a visual journey at Creative Art School. Our curated
            collection showcases a diverse range of paintings, from captivating
            landscapes to thought-provoking abstracts. Whether you're a seasoned
            collector or simply seeking artistic inspiration, lose yourself in
            the vibrant colors, intricate brushstrokes, and captivating stories
            whispered from each canvas.
          </h1>
          <Link
            to="/#"
            className=" mt-10 border-2 border-[#FFC700] w-1/2 flex justify-center items-center p-5 rounded-lg text-xl font-medium bg-[#FFC700] hover:animate-pulse duration-150 ease-in-out hover:scale-105 hover:border-none shadow-sm shadow-black"
          >
            <h1>Gallery</h1>
          </Link>
        </div>
        <div className="w-1/2  flex justify-center items-center">
          <img
            src={Images[1].url}
            className="w-1/2 rounded-md shadow-md  shadow-black"
          />
        </div>
      </section>
    );
};

export default HomeUtils2;