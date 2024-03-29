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
        <div className="flex w-full justify-evenly items-center mt-10 ">
          <Link
            to="/#"
            className="border-2 border-[#FFC700] bg-[#FFC700] hover:bg-[#007F73] duration-150 ease-in-out delay-100 hover:scale-110 hover:border-none shadow-sm shadow-black w-1/4 flex justify-center items-center p-2 rounded-lg text-xl font-medium   "
          >
            <h1>Register Here</h1>
          </Link>
          <h1 className="text-lg">or</h1>
          <Link
            to="/#"
            className=" border-2 border-[#FFC700] bg-[#FFC700] hover:bg-[#007F73] duration-150 ease-in-out delay-100 hover:scale-110 hover:border-none shadow-sm shadow-black w-1/4 flex justify-center items-center p-2 rounded-lg text-xl font-medium "
          >
            <h1>Contact Us</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeUtils1;
