import Images from "../utils/Images";


const PictureGallery = () => {
  return (
    <div
      className={`image_wrapper flex bg-gradient-to-b from-[#007F73] to-gray-800 w-Full p-28`}
    >
      <div className={` w-1/2 pt-10`}>
        <h1
          className={`text-9xl p-5 text-white drop-shadow-2xl shadow-black font-serif`}
        >
          {" "}
          Image Gallery
        </h1>
      </div>
      <section
        className={`container flex flex-col w-1/4 justify-center items-center p-5 m-1`}
      >
        <img
          src={Images[2].url}
          className={`w-full m-1 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
        <img
          src={Images[2].url}
          className={`w-full mt-5 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
      </section>
      <section
        className={`container flex flex-col w-1/4 justify-center items-center p-5 m-1`}
      >
        <img
          src={Images[2].url}
          className={`w-full m-1 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
        <img
          src={Images[2].url}
          className={`w-full mt-5 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
      </section>
      <section
        className={`container flex flex-col w-1/4 justify-center items-center p-5 m-1`}
      >
        <img
          src={Images[2].url}
          className={`w-full m-1 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
        <img
          src={Images[2].url}
          className={`w-full mt-5 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
      </section>
      <section
        className={`container flex flex-col w-1/4 justify-center items-center p-5 m-1`}
      >
        <img
          src={Images[2].url}
          className={`w-full m-1 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
        <img
          src={Images[2].url}
          className={`w-full mt-5 shadow-md shadow-black rounded-xl hover:scale-150 duration-200 ease-in-out `}
        />
      </section>
      
    </div>
  );
};

export default PictureGallery;
