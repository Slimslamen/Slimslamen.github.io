import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Project() {
  const travNav = (url: string) => {
    window.location.href = url;
  };
  return (
    <div className="bg-thirdColor mx-0 md:mx-20 md:max-w-2/3 flex items-center justify-center flex-col py-20 rounded-md">
      <div className="mx-auto w-full px-12 md:w-[35rem]">
        <h2 className="text-4xl md:text-5xl mb-10">My <span className="text-white">Projects</span></h2>
        <p className="text-xl">
          Bellow I've linked 4 different projects. The projects involve everything from simple vanilla javascript, to
          the manipulation of different hooks, APIs, dependencys aswell as working with databases.
        </p>
      </div>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto py-20">
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="src\assets\vividClean.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white">VividClean</p>
                <p className="text-tiny text-white">Sparkling Clean, Every Time, Your Satisfaction Guaranteed.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Button
                onClick={() => travNav("https://gitlab.com/jimmy.lopezmorales/vividclean")}
                className="bg-pink-200"
                radius="full"
                size="sm"
              >
                View Repository
              </Button>
              <Button className="bg-pink-200" radius="full" size="sm">
                View Project
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="src\assets\Blogish.png"
          />
          <CardFooter className="absolute bg-black/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-tiny">Blogish</p>
              <p className="text-white text-tiny">Your Go-To Source for Tips, Trends, and Talk</p>
            </div>
            <div className="flex flex-col space-y-3">
              <Button
                onClick={() => travNav("https://gitlab.com/jimmy.lopezmorales/blogisch")}
                className="text-tiny bg-rose-200"
                radius="full"
                size="sm"
              >
                View Repository
              </Button>
              <Button className="text-tiny bg-rose-200" radius="full" size="sm">
                View Project
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-5 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="src\assets\rps.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-tiny">RPS</p>
              <p className="text-white text-tiny">Rock, Paper, Scissors! Victory Awaits!</p>
            </div>
            <div className="flex flex-col space-y-3">
              <Button
                onClick={() => travNav("https://gitlab.com/jimmy.lopezmorales/rps")}
                className="text-tiny bg-yellow-400"
                radius="full"
                size="sm"
              >
                View Repository
              </Button>
              <Button className="text-tiny bg-yellow-400" radius="full" size="sm">
                Visit page
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="src\assets\konify.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white">Konify</p>
                <p className="text-tiny text-white">Unleash Your Unique Style Today. </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Button
                onClick={() => travNav("https://gitlab.com/jimmy.lopezmorales/konify")}
                className="bg-violet-300"
                radius="full"
                size="sm"
              >
                View Repository
              </Button>
              <Button className="bg-violet-300" radius="full" size="sm">
                View Project
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
