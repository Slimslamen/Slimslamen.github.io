/* import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react"; */
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link as NextLink} from "@nextui-org/react";
import { useEffect, useState } from "react";


export function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
      const leftNav = document.getElementById("leftNav");
      if (leftNav) {
        leftNav.classList.add("fromTop");
      }
      const rightNav = document.getElementById("rightNav");
      if (rightNav) {
        rightNav.classList.add("inRight");
      }
  
  }, [])
  

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Contact",
  ];
  return (
    <Navbar  className="bg-mainColor" position="static" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent id="leftNav" className="absolute top-[-20px] ease-in duration-1000 opacity-0">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="text-3xl font-bold text-inherit">JLM</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent id="rightNav" className="hidden sm:flex gap-4 absolute right-[-100px] ease-in-out duration-1000 opacity-0" justify="end">
      <NavbarItem>
        <NextLink href="/" className=" text-lg hover:text-secondColor active:text-thirdColor ease-in-out duration-200" color="foreground">
          Home
        </NextLink>
      </NavbarItem>
      <NavbarItem>
        <NextLink href="/About" className=" text-lg hover:text-secondColor active:text-secondColor ease-in-out duration-200" color="foreground">
          About
        </NextLink>
      </NavbarItem>
      <NavbarItem>
        <NextLink href="/Projects" className=" text-lg hover:text-secondColor active:text-secondColor ease-in-out duration-200" color="foreground" >
          Projects
        </NextLink>
      </NavbarItem>
      <NavbarItem>
        <NextLink href="/Contact" className=" text-lg hover:text-secondColor active:text-secondColor ease-in-out duration-200" color="foreground" >
          Contact
        </NextLink>
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu className="bg-thirdColor">
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={index}>
          <NextLink
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full text text-sm hover:text-mainColor active:text-secondColor ease-in-out duration-200"
            href={item === 'Home' ? '/' : `/${item}`}
          >
            {item}
          </NextLink>
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