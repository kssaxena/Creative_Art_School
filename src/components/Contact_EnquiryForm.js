import { Link } from "react-router-dom";

const Contact_EnquiryForm = () => {
  return (
    <form className={`contact_form`}>
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="name"
            type="text"
            placeholder="Full Name"
          />
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="emailAddress"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="emailAddress"
            type="emailAddress"
            placeholder="Enter your Email Address"
          />
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="phoneNumber"
          >
            Contact
          </label>
          <input
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="phoneNumber"
            type="phoneNumber"
            placeholder="Enter your Contact Number"
          />

          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="text"
          >
            Description
          </label>
          <input
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
            id="text"
            type=" text"
            placeholder="Description"
          />
        </div>
        <div className=" submit_button flex  w-full justify-center items-center mt-5">
          <Link
            to={`#`}
            className={`border-2 border-[#FFC700] p-2 text-lg rounded-md text-black font-semibold bg-[#FFC700] duration-200 ease-in-out hover:text-black hover:shadow-md hover:shadow-black`}
          >
            Submit
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Contact_EnquiryForm;
