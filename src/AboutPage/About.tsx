import { Card } from "@nextui-org/react";
import { FaFileDownload } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { PiFigmaLogoThin } from "react-icons/pi";
import { SiCsharp } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ITools {
  language: string;
  pic: JSX.Element;
}

export default function About() {
  const toolsArray: ITools[] = [
    {
      language: "Javscript",
      pic: <RiJavascriptFill className="text-white size-16 m-6" />,
    },
    {
      language: "Typescript",
      pic: <BiLogoTypescript className="text-white size-16 m-6" />,
    },
    {
      language: "React",
      pic: <FaReact className="text-white size-16 m-6" />,
    },
    {
      language: "Angular",
      pic: <FaAngular className="text-white size-16 m-6" />,
    },
    {
      language: "Firebase",
      pic: <IoLogoFirebase className="text-white size-16 m-6" />,
    },
    {
      language: "Figma",
      pic: <PiFigmaLogoThin className="text-white size-16 m-6" />,
    },
    {
      language: "C#",
      pic: <SiCsharp className="text-white size-16 m-6" />,
    },
    {
      language: ".NET",
      pic: <AiOutlineDotNet className="text-white size-16 m-6" />,
    },
    {
      language: "Tailwind",
      pic: <RiTailwindCssFill className="text-white size-16 m-6" />,
    },
    {
      language: "Bootstrap",
      pic: <FaBootstrap className="text-white size-16 m-6" />,
    },
    {
      language: "Github",
      pic: <FaGithub className="text-white size-16 m-6" />,
    },
    {
      language: "Git",
      pic: <FaGitAlt className="text-white size-16 m-6" />,
    },
  ];
  return (
    <div className="flex items-center flex-col justify-center pb-20">
      <div className="w-1/2 text-2xl md:text-xl my-20">
        <h1 className="text-4xl md:text-3xl mb-10">
          Get to <span className="text-4xl md:text-3xl text-white">know</span> me!
        </h1>
        <p>
          Hi, my name is Jimmy Lopez Morales and I'm from Gislaved, Småland. I'm studying to become a frontenddeveloper.
        </p>
        <br />
        <p>
          I like to try new tools when creating projects. Whether it is just trying out a new hook, or trying out a new
          service for a database and hosting, try to make the UI be as modern as possible.
        </p>
        <br />
        <p>
          Apart from coding I like to train, in all different kinds of manners. But mostly I train running, swimming and
          I also like to train at the gym. If I got time left over after my coding sessions and training I usually sit
          down for a period and read.
        </p>
        <br />
        <p>
          Right below this section you'll be able to download my resume aswell as see different kinds of languagues and frameworks I've learned so
          far. If you have any questions about me or my projects, feel free to contact me.
        </p>
        <a href="src\assets\CV.pdf" download="CV.pdf" className="mx-auto mt-10 rounded-lg md:w-72 space-x-5 active:bg-secondColor hover:shadow-2xl text-white py-5 px-12 border-none flex items-center justify-center bg-thirdColor">
          <p>Dowload Resume</p>
          <FaFileDownload />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-10">
        {toolsArray.map((tool) => (
          <Card
            isFooterBlurred
            radius="lg"
            className="hover:shadow-2xl hover:h-[110px] text-white size-32 border-none flex items-center justify-center bg-thirdColor"
          >
            {tool.pic}
          </Card>
        ))}
      </div>
    </div>
  );
}
