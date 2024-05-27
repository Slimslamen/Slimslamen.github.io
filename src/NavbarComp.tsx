
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";

export function NavbarComp() {
  return (
      <Navbar fluid rounded className="md:mx-20 font-Poetsen">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-mainColor">JLM</span>
        <span className="text-secondColor text-5xl">ok</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse >
        <a className="text-xl hover:text-red-600 active:text-red-300 ease-in-out duration-200" href="#">Home</a>
        <a className="text-xl hover:text-red-600 active:text-red-300 ease-in-out duration-200" href="#">About</a>
        <a className="text-xl hover:text-red-600 active:text-red-300 ease-in-out duration-200" href="#">Projects</a>
        <a className="text-xl hover:text-red-600 active:text-red-300 ease-in-out duration-200" href="#">Contact</a>
      </NavbarCollapse>
    </Navbar>
  );
}
