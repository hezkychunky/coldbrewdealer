import { Carousel } from "flowbite-react";
import { Rating, RatingStar } from "flowbite-react";

export default function Reviews() {
  return (
    <div className="h-24 w-3/5 mb-10 mt-8 ">
      <Carousel>
        <div className="flex w-full h-full items-center justify-center bg-gray-300 bg-opacity-45 backdrop-blur-xl px-8 ">
        <Rating><RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar filled={true} /></Rating>
        It is awesome
        </div>
        <div className="flex h-full items-center justify-center bg-gray-300 bg-opacity-45 backdrop-blur-xl px-8 ">
        <Rating><RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar filled={false} /></Rating>
        Very convenient!
        </div>
        <div className="flex h-full items-center justify-center bg-gray-300 bg-opacity-45 backdrop-blur-xl px-8">
        <Rating><RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar filled={true} /></Rating>
        Sleep is for the weak
        </div>
      </Carousel>
    </div>
  );
}
