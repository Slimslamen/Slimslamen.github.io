import { Button } from "@nextui-org/react";
import { TextInput, Textarea, FloatingLabel } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  const subbe = () => {

  }
  return (
    <div className="mx-auto my-36">
      <div className="mx-auto w-80 md:w-[35rem] mb-20">
        <h2 className="text-4xl md:text-5xl mb-5">Feel free to contact me</h2>
        <p className="text-xl">
          If you have any questions about my projects, how my current education is going or also question about me.
          Feel free to contact me and I'll be happy to answer all your questions.
        </p>
      </div>
    <form onSubmit={subbe} className="flex items-center justify-center flex-col mx-auto w-4/5 md:w-[25em] rounded-lg pt-16 pb-10 px-4  space-y-5 bg-thirdColor">
      <h2 className="text-4xl text-white">Contact</h2>
      <FloatingLabel variant="outlined" label="Label" className="bg-white max-w-md" />
      <div className="max-w-md">
        <TextInput id="email4" type="email" icon={HiMail} />
      </div>
      <div className="md:w-80 w-64">
        <Textarea id="comment" placeholder="Leave a message..." required />
      </div>
      <Button
        type="submit"
        value={"Contact"}
        className="text-3xl flex flex-row items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg px-5 md:py-2.5 md:text-xl"
      >
        Send
      </Button>
    </form>
    </div>
  );
}
