
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export default function NavbarComp() {
  return (
    <div className="h-24 fixed w-screen z-30">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <Image src="/bottle-icon.svg" width={50} height={80} alt="Coldbrew Dealer Logo" />
          <span className="self-center whitespace-nowrap text-2xl lg:text-4xl font-extralight dark:text-white text-lime-600">COLDBREW DEALER</span>
        </NavbarBrand>
        <NavbarToggle className="mr-6"/>
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
    </div>
  );
}
