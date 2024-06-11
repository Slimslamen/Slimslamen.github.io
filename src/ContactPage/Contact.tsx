import { TextInput, Textarea, FloatingLabel } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <form className="flex items-center justify-center flex-col mx-auto w-4/5 md:w-[25em] rounded-lg py-20 px-4 my-36 space-y-5 bg-thirdColor">
      <h2 className="text-4xl text-white mt-[-50px] pb-8">Contact</h2>
      <FloatingLabel variant="outlined" label="Label" className="bg-white max-w-md"/>
      <div className="max-w-md">
        <TextInput id="email4" type="email" icon={HiMail} />
      </div>
      <div className="md:w-80 w-64">
        <Textarea id="comment" placeholder="Leave a message..." required />
      </div>
    </form>
  );
}
