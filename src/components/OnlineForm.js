import { Link } from "react-router-dom";
// import { Requireable } from "react";
// import { Requireable } from "react";

const OnlineForm = () => {
  return (
    <form className={`online_Form`}>
      <h1
        className={`w-full text-center text-4xl font-sans font-semibold underline decoration-[#007F73] `}
      >
        Online Form
      </h1>
      <div className={`flex `}>
        <section className={`form_part_1 w-1/2`}>
          <div className="mb-10">
            <div className="w-full  p-10 flex flex-col justify-center items-center">
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
                htmlFor="dateFormat"
              >
                Date of Birth
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="dateFormat"
                type="dateFormat"
                placeholder="DD/MM/YYYY"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
              >
                Gender
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="text"
                type="text"
                placeholder="Male / Female"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
              >
                School / College
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 "
                id="text"
                type="text"
                placeholder="Name of School / College"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
              >
                Permanent / Correspondence Address
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="text"
                type=" text"
                placeholder="Address"
              />
            </div>
          </div>
        </section>
        <section className={`form_part_2 w-1/2`}>
          <div className="mb-10">
            <div className="w-full  p-10 flex flex-col justify-center items-center">
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="name"
              >
                Father's Name
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="name"
                type="text"
                placeholder="Full Name"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
              >
                Father's Occupation
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="text"
                type="text"
                placeholder="Specify"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="number"
              >
                Contact Number
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="number"
                type="phone number"
                placeholder="Contact Number"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="name"
              >
                Mother's Name
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="name"
                type="text"
                placeholder="Full Name"
              />
              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
                >
                Mother's Occupation
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5"
                id="text"
                placeholder="Specify"
                type="text"  
              />

              <label
                className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
                htmlFor="text"
              >
                Course / Timing
              </label>
              <input
                className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 "
                id="text"
                type="text"
                placeholder="Course(In which Enrolled) / Timing(Suitable for Class)"
              />
            </div>
          </div>
        </section>
      </div>

      <div className=" submit_button flex  w-full justify-center items-center">
        <Link
          to={`#`}
          className={`border-2 border-[#FFC700] p-2 text-lg rounded-md text-black font-semibold bg-[#FFC700] duration-200 ease-in-out hover:text-black hover:shadow-md hover:shadow-black`}
        >
          Submit
        </Link>
      </div>
    </form>
  );
};

export default OnlineForm;
