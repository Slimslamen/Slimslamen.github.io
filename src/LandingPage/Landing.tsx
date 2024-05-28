import { FaPerson } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="my-48 flex-col">
      <div className="flex flex-row justify-around w-full items-center">
        <div className="space-y-4">
          <h1 className="text-5xl">Hello!</h1>
          <h1 className="text-xl">
            I'm <span className="text-white text-2xl"> Jimmy Lopez Morales</span>
          </h1>
          <h2 className="text-secondColor">Web developer</h2>
          <div className="space-x-5">
            <button
              type="button"
              className="flex flex-row items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg px-5 py-2.5"
            >
              About me
              <FaPerson />
            </button>
            <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white">
              <span className="flex-row flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-mainColor dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact
                <FaPhoneAlt />
              </span>
            </button>
          </div>
        </div>
        <img className=" h-60" src="src/assets/portpic.png" alt="My face as a memoji" />
      </div>
    </div>
  );
}
