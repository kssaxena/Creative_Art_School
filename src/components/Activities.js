import { ChevronDown } from "lucide-react";
import ImageSliderArtExhibition from "../utils/ImageSlider_1";
import ImageSliderArtExamination from "../utils/ImageSlider_2";
import { Link } from "react-router-dom";


const Activities = () => {
  return (
    <div>
      <section className={`art_exhibition flex bg-[#007F73] p-20 `}>
        <section className={`image_sliding_area w-1/2`}>
          <ImageSliderArtExhibition />
        </section>
        <div className={`w-1/2 flex flex-col justify-center items-center p-5`}>
          <h1 className={`text-6xl font-mono font-bold  `}>Art Exhibition</h1>
          <p
            className={`text-center mt-5 text-lg max-w-full p-4 tracking-wider text-white drop-shadow-lg shadow-black font-light w-full`}
          >
            A buzz of anticipation fills the air as patrons stream towards the
            grand opening of a new exhibition. Inside, the gallery gleams with
            carefully positioned spotlights highlighting a diverse array of
            works. Paintings in vibrant hues and thought-provoking sculptures
            pique curiosity, while interactive installations beckon for
            exploration. This exhibition promises a journey through the artist's
            vision, inviting viewers to engage, contemplate, and discover the
            beauty and intrigue within each piece.
          </p>
        </div>
      </section>
      <section
        className={`bg-[#007F73] w-full flex flex-col justify-center items-center `}
      >
        <ChevronDown className={`h-10 w-10 animate-bounce m-3`} />
        <Link
          to={"registration_&_admissions"}
          className={`bg-[#FFC700] w-fit text-4xl font-semibold p-5 rounded-xl shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:scale-105 duration-200 ease-in-out`}
        >
          Admissions Open
        </Link>
      </section>
      <section
        className={`art_Examination p-20 flex bg-gradient-to-b from-[#007F73] to-gray-800`}
      >
        <div className={`w-1/2 flex flex-col justify-center items-center p-5 `}>
          <h1 className={`text-6xl font-mono font-bold  `}>Art Examination</h1>
          <p
            className={`text-center mt-5 text-lg max-w-full p-4 tracking-wider text-white drop-shadow-lg shadow-black font-light w-full`}
          >
            In this [artwork title], [artist name] explores the concept of
            [concept] through [medium]. The [descriptive detail about
            composition or technique] draws the viewer's eye to [focal point],
            where [specific detail about the focal point and its significance].
            The use of [color palette or specific material] evokes a sense of
            [emotion or feeling], while [another element] adds a layer of
            [complexity or symbolism]. This piece invites a deeper examination
            of [concept] by prompting viewers to consider [question or
            interpretation].
          </p>
        </div>
        <section className={`image_sliding_area w-1/2`}>
          <ImageSliderArtExamination />
        </section>
      </section>
    </div>
  );
};

export default Activities;
