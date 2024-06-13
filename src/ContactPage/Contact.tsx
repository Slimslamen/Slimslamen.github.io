import { Button } from "@nextui-org/react";
import { TextInput, Textarea, FloatingLabel } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  const subbe = () => {

  }
  return (
    <form onSubmit={subbe} className="flex items-center justify-center flex-col mx-auto w-4/5 md:w-[25em] rounded-lg pt-16 pb-10 px-4 my-36 space-y-5 bg-thirdColor">
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
  );
}
