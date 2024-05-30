/* import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react"; */
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { useState } from "react";


export function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About me",
    "Projects",
    "Contact",
  ];
  return (
    <Navbar className="bg-thirdColor" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="text-3xl font-bold text-inherit">JLM</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="end">
      <NavbarItem>
        <Link className="text-white text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200" color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link className="text-white text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200" href="#" aria-current="page">
          About me
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-white text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200" color="foreground" href="#">
          Project
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-white text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200" color="foreground" href="#">
          Contact
        </Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu className="bg-thirdColor">
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <a 
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full text text-white text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200"
            href="#"
          >
            {item}
          </a>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  );
}

  /*  <Navbar fluid className="bg-mainColor py-5">
    <NavbarBrand href="https://flowbite-react.com">
      <span className="ml-10 self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-secondColor">JLM</span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <div className="mx-auto md:mr-10 space-x-10 text-white">
        <a className="hover:text-secondColor active:text-secondColor ease-in-out duration-200" href="#">Home</a>
        <a className="hover:text-secondColor active:text-secondColor ease-in-out duration-200" href="#">About</a>
        <a className="hover:text-secondColor active:text-secondColor ease-in-out duration-200" href="#">Projects</a>
        <a className="hover:text-secondColor active:text-secondColor ease-in-out duration-200" href="#">Contact</a>
      </div>
    </NavbarCollapse>
  </Navbar> */