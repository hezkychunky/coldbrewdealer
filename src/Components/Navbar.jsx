
import Link from "next/link";
import Image from "next/image";

export default function NavbarComp() {
  return (
    <div className="h-24 fixed w-screen z-30 bg-white py-2">
      <div className="flex flex-col md:flex-row">
      <Link href="/" className="flex">
          <Image src="/bottle-icon.svg" width={50} height={80} alt="Coldbrew Dealer Logo" />
          <span className="text-2xl md:text-4xl font-extralight dark:text-white text-lime-600">COLDBREW DEALER</span>
        </Link>
        <div className="pr-10 flex gap-4 w-full justify-center md:justify-end items-center">
          <Link href="/" className="md:text-xl text-sm font-light hover:font-medium" /*active*/>
            Home
          </Link>
          <Link className="md:text-xl text-sm font-light hover:font-medium" href="/about">
            About
          </Link>
          <Link href="products" className="md:text-xl text-sm font-light hover:font-medium">Products</Link>
          <Link href="teams" className="md:text-xl text-sm font-light hover:font-medium">Teams</Link>
        </div>
      </div>
    </div>
  );
}
