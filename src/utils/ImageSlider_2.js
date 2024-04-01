import { ChevronLeft, ChevronRight } from "lucide-react";
import Images from "./Images_for_slider_2";
import { useState } from "react";

const ImageSliderArtExamination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0 ? true : false;
    const newIndex = isFirstSlide ? Images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Images.length - 1 ? true : false;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section
      className={` flex justify-around items-center m-10  rounded-2xl shadow-md shadow-black hover:shadow-lg hover:shadow-black duration-300 ease-in-out hover:scale-110`}
    >
      <div className={`max-w-[1400px] h-[300px] w-full relative group`}>
        <div
          style={{ backgroundImage: `url(${Images[currentIndex].url})` }}
          className={`w-full h-full rounded-2xl bg-center bg-cover duration-500`}
        ></div>
        {/* left arrow */}
        <div
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black duration-200 ease-in-out`}
        >
          <ChevronLeft onClick={prevSlide} className={`h-8 w-8`} />
        </div>
        {/* right arrow */}
        <div
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black duration-200 ease-in-out`}
        >
          <ChevronRight onClick={nextSlide} className={`h-8 w-8`} />
        </div>
      </div>
    </section>
  );
};

export default ImageSliderArtExamination;
