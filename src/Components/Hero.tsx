import CarouselComp from "./Carousel";

export default function Hero() {
   return (
     <div className="flex flex-col w-full h-auto md:h-screen bg-lime-600 items-center pb-10">
       <div className="mt-32 text-3xl sm:text-4xl font-extrabold text-gray-900">LESS ACIDIC, MORE CAFFEINE <br/> ANYTIME, ANYWHERE!</div>
       <CarouselComp/>
     </div>
   );
 }