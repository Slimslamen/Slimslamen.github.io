
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";

export function NavbarComp() {
  return (
      <Navbar fluid className="bg-secondColor py-5">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="ml-10 self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-mainColor">JLM</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div className="mx-auto md:mr-10 space-x-10 text-white">
          <a className="hover:text-mainColor active:text-secondColor ease-in-out duration-200" href="#">Home</a>
          <a className="hover:text-mainColor active:text-secondColor ease-in-out duration-200" href="#">About</a>
          <a className="hover:text-mainColor active:text-secondColor ease-in-out duration-200" href="#">Projects</a>
          <a className="hover:text-mainColor active:text-secondColor ease-in-out duration-200" href="#">Contact</a>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
