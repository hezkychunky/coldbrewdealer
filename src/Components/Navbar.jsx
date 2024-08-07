
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavbarComp() {
  return (
    <Navbar fluid rounded className="h-24 fixed w-screen pt-6 z-30">
      <NavbarBrand as={Link} href="/">
        <img src="bottle-icon.svg" className="h-12 sm:h-12" alt="Coldbrew Dealer Logo" />
        <span className="self-center whitespace-nowrap text-4xl font-extralight dark:text-white text-lime-600">COLDBREW DEALER</span>
      </NavbarBrand>
      <NavbarToggle/>
      <NavbarCollapse className="pr-10 bg-white">
        <NavbarLink href="/" className="text-xl font-light hover:font-medium" /*active*/>
          Home
        </NavbarLink>
        <NavbarLink as={Link} className="text-xl font-light hover:font-medium" href="/about">
          About
        </NavbarLink>
        <NavbarLink href="products" className="text-xl font-light hover:font-medium">Products</NavbarLink>
        <NavbarLink href="teams" className="text-xl font-light hover:font-medium">Teams</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
