import { Card, CardFooter, Button } from "@nextui-org/react";

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


interface ITools{
  language :string;
  pic:JSX.Element
}

export default function About() {
  const toolsArray : ITools[] = [
    {
      language: "Javscript",
      pic: <RiJavascriptFill className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "Typescript",
      pic: <BiLogoTypescript className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "React",
      pic: <FaReact className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "Angular",
      pic: <FaAngular className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "Firebase",
      pic: <IoLogoFirebase className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "Figma",
      pic: <PiFigmaLogoThin className="text-white size-16 mt-8 mb-12"/>
    },
    {
      language: "C#",
      pic: <SiCsharp className="text-white size-16 mt-4 mb-12"/>
    },
    {
      language: ".NET",
      pic: <AiOutlineDotNet className="text-white size-24 mb-5" />
    },
    {
      language: "Tailwind",
      pic: <RiTailwindCssFill className="text-white size-16 mb-5"/>
    },
    {
      language: "Bootstrap",
      pic: <FaBootstrap className="text-white size-16 mb-5"/>
    },
    {
      language: "Github",
      pic: <FaGithub className="text-white size-16 mt-6 mb-14"/>

    },
    {
      language: "Git",
      pic: <FaGitAlt className="text-white size-16 mt-6 mb-14"/>
    },
  ];
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="w-1/2 ml-mx my-20">
        <h1 className="text-2xl mb-10">
          Get to <span className="text-3xl text-white">know</span> me!
        </h1>
        <p>
          Hi, my name is Jimmy Lopez Morales and I'm from Gislaved, småland. I'm studying to become a frontenddeveloper.
        </p>
        <br />
        <p>
          I like to try new tools when creating projects. Whether it is just trying out a new hook, or trying out a new
          service for a database and hosting, try to make the UI be as modern as possible.
        </p>
        <br />
        <p>
          Right below this section you'll be able to see different kinds of languagues and frameworks I've learned so
          far. If you have any questions about me or my projects, feel free to contact me.
        </p>
        <br />
        <p>
          Apart from coding I like to train, in all different kinds of manners. But mostly I train running, swimming and
          I also like to train at the gym. If I got time left over after my coding sessions and training I usually sit
          down for a period and read.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-6 py-10">
        {toolsArray.map((tool) => (
          <Card isFooterBlurred radius="lg" className="size-32 border-none flex items-center justify-center bg-thirdColor">
            {tool.pic}
           {/*  <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            /> */}
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                {tool.language}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
