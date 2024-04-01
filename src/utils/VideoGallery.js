import Images from "./Images";

const VideoGallery = () => {
  return (
    <div
      className={`image_wrapper flex flex-col bg-gray-800 w-Full pb-28 pl-28 pr-28`}
    >
      <section
        className={`container flex  w-full justify-center items-center p-5 m-1 `}
      >
        <iframe
          className={`w-full m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z23eKhyKU8U?si=s_oSVbVCPXGCxDtJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className={`w-full m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HrfXsc2AepY?si=TzlgGYYIp_W57iO9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section
        className={`container flex w-full justify-center items-center p-5 m-1`}
      >
        <iframe
          className={`w-full m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gWMoT3vNQ4E?si=UPpSIqkbTK0IqIE7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className={`w-full m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ka1vkzDOymM?si=rinAY5OheqMoOo0u"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section
        className={`container flex  w-full justify-center items-center p-5 m-1`}
      >
        <iframe
          className={`w-full  shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b4ky1Se4OjM?si=aUAeWw4SVNN2D2k2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className={`w-full m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ah3XmXkfef0?si=X4Vd2cKsHkWkOpn_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section
        className={`container flex  w-full justify-center items-center p-5 m-1`}
      >
        <iframe
          className={`w-full  shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-NxLwloECKo?si=e542w8PC7xmXqrxZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className={`w-full  m-5 shadow-md shadow-black rounded-xl hover:scale-110 duration-200 ease-in-out animate-pulse hover:animate-none`}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rm3F2CaVGes?si=A31f4PrEiJ_s0KmK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default VideoGallery;
