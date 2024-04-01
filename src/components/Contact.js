import { ChevronDown } from "lucide-react";
import Images from "../utils/Images";
import Contact_EnquiryForm from "./Contact_EnquiryForm";

const Form_contact = () => {
  return (
    <div className={`flex`}>
      <section
        className={`part_1 w-1/2 flex justify-center items-center p-10 `}
      >
        <img src={Images[0].url} className={`w-2/3 shadow-black shadow-md`} />
      </section>
      <section className={`part_2 w-1/2 p-20`}>
        <h1
          className={`text-4xl w-full text-center font-serif text-[#007F73] font-bold drop-shadow-xl flex items-center justify-evenly`}
        >
          Enquire Here
          <ChevronDown className={`h-10 w-10 animate-bounce`} />
        </h1>
        <Contact_EnquiryForm />
      </section>
    </div>
  );
};

export default Form_contact;
