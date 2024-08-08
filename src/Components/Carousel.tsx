import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <div className="h-56 sm:h-64 xl:h-3/4 2xl:h-3/4 w-3/4 pt-6">
      <Carousel>
        <img src="/coldbrew1.png" alt="cold brew coffee img" />
        <img src="/Cold-Brew-2.jpg" alt="cold brew coffee img" />
        <img src="/tanamera.jpg" alt="tanamera cold brew img" />
        <img src="/cold-brews.png" alt="cold brew image" />
      </Carousel>
    </div>
  );
}
