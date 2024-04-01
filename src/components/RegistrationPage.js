import { Link } from "react-router-dom";
import OnlineForm from "./OnlineForm";

const RegistrationPage = () => {
  return (
    <div>
      <section className={`form flex pt-10 pb-10`}>
        <section className={`onlineForm w-9/12`}>
          <OnlineForm />
        </section>
        <section
          className={`Pdf_Form w-1/4 flex flex-col justify-center items-center border-l-2 border-[#007F73]  `}
        >
          <h1
            className={`text-4xl p-5 font-semibold tracking-wider text-center text-[#007F73] drop-shadow-md shadow-black`}
          >
            Or, You can also Download the Form according to your Convenience..
          </h1>
          <Link
            to={`https://drive.google.com/file/d/1GjfQBW0FMUhIKwXSyJHBgPgu6Gs6wKJ9/view?usp=drive_link`}
            className={`border-2 border-[#FFC700] p-2 text-lg rounded-md text-black font-semibold bg-[#FFC700] duration-200 ease-in-out hover:text-black hover:shadow-md hover:shadow-black mt-10`}
          >
            Download
          </Link>
        </section>
      </section>
    </div>
  );
};

export default RegistrationPage;
