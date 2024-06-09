import { TextInput, Textarea, FloatingLabel } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <form className="flex items-center justify-center flex-col mx-auto w-[30rem] rounded-lg py-32 my-36 space-y-5 bg-thirdColor">
      <FloatingLabel variant="outlined" label="Label" className="bg-white max-w-md"/>
      <div className="max-w-md">
        <TextInput id="email4" type="email" icon={HiMail} />
      </div>
      <div className="w-80">
        <Textarea id="comment" placeholder="Leave a message..." required />
      </div>
    </form>
  );
}
