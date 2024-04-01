import Images from "../utils/Images";
import { Link } from "react-router-dom";

const HomeUtils1 = () => {
  return (
    <section className="landing_quote_and_image flex p-20">
      <div className="w-1/2  flex justify-center items-center">
        <img
          src={Images[0].url}
          className="w-1/2 rounded-md shadow-md  shadow-black"
        />
      </div>
      <div className="landing_quote w-1/2 ">
        <h1 className="p-10 text-4xl text-center font-semibold font-mono">
          The Vibrant World of Art: Unlocking Creativity
        </h1>
        <h1 className=" drop-shadow-2xl shadow-black text-center text-xl font-light tracking-wider m-5">
          Art, like a kaleidoscope, splashes colors across the canvas of our
          existence. It transcends mere aesthetics; it is the heartbeat of our
          shared humanity. From the ancient cave paintings that whispered
          stories of forgotten civilizations to the avant-garde masterpieces
          that challenge our perceptions, art has been our silent confidante,
          our mirror, and our muse.
        </h1>
        <div className="flex w-full justify-evenly items-center">
          <Link
            to="registration_&_admissions"
            className="w-1/4 border-2 border-[#FFC700] bg-[#FFC700] shadow shadow-black p-2 text-lg text-center rounded-md text-black font-semibold hover:bg-[#007F73] hover:border-[#007F73] hover:text-white duration-200 ease-in-out hover:shadow-md hover:shadow-black "
          >
            <h1>Register Here</h1>
          </Link>
          <h1 className="text-lg">or</h1>
          <Link
            to="/contact"
            className="w-1/4 border-2 border-[#FFC700] bg-[#FFC700] shadow shadow-black p-2 text-lg text-center rounded-md text-black font-semibold hover:bg-[#007F73] hover:border-[#007F73] hover:text-white duration-200 ease-in-out hover:shadow-md hover:shadow-black "
          >
            <h1>Contact Us</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeUtils1;
