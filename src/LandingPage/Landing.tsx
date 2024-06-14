import { FaPerson } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {

  const navigate = useNavigate()

  const nav = (value : string) => {
    setTimeout(() => {
      navigate(`/${value}`)
    }, 400)
  }

  useEffect(() => {
    setTimeout(() => {
      const leftMain = document.getElementById("leftMain");
      if (leftMain) {
        leftMain.classList.add("inLeft");
      }
      const rightMain = document.getElementById("rightMain");
      if (rightMain) {
        rightMain.classList.add("inRightMain");
      }
    }, 1500);
}, [])

  return (
    <div className="py-28">
      <div className="flex md:flex-row flex-col-reverse justify-around w-full items-center">
        <div id="leftMain" className="space-y-4 absolute top-44 left-0 ease-in duration-1000 opacity-0">
          <h1 className="text-5xl">Hello!</h1>
          <h1 className="text-4xl md:text-xl">
            I'm <span className="text-white text-3xl md:text-2xl"> Jimmy Lopez Morales.</span><br /> Welcome to my portfolio.
          </h1>
          <h2 className="text-secondColor md:text-large text-2xl">Web developer</h2>
          <div className="space-x-5 flex flex-row">
            <Button onPress={() => nav("About")} value={"About"} className="flex flex-row items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg px-5 md:py-2.5 md:text-sm text-xl">
              <FaPerson />
              About me
            </Button>
            <Button onPress={() => nav("Contact")} value={"Contact"} className="flex flex-row items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg px-5 md:py-2.5 md:text-sm text-xl">
              <FaPhoneAlt />
              Contact
            </Button>
          </div>
        </div>
        <Image id="rightMain" isBlurred width={220} src="src/assets/portpic.png" alt="My face as a bitmoji" className="m-5 absolute top-44 right-[20px] ease-in duration-1000" />
      </div>
    </div>
  );
}
