
import {Textarea} from "@nextui-org/react";

export default function Contact() {
  return (
    <form className="w-1/2 m-10 mx-auto">
    <Textarea
      label="Description"
      placeholder="Enter your description"
      className="max-w-xs"
    />
    </form>
  )
}
