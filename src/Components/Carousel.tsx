import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <div className="h-56 sm:h-64 xl:h-3/4 2xl:h-3/4 w-3/4 pt-6">
      <Carousel>
        <Image src="coldbrew1.png" alt="cold brew coffee image" />
        <Image src="Cold-Brew-2.jpg" alt="cold brew coffee image" />
        <Image src="tanamera.jpg" alt="tanamera cold brew image" />
        <Image src="cold-brews.png" alt="cold brew image" />
      </Carousel>
    </div>
  );
}
