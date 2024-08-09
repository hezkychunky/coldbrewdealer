import Image from "next/image";

export default function Hero() {
   return (
     <div className="flex flex-col w-full h-auto bg-lime-600 items-center pt-5 pb-10">
       <div className="mt-28 text-3xl sm:text-4xl font-extrabold text-gray-900">LESS ACIDIC, MORE CAFFEINE <br/> ANYTIME, ANYWHERE!</div>
       <Image src="/coldbrew1.png" alt="cold brew collection images" height={100} width={700} className="pt-5 rounded-xl"/>
     </div>
   );
 }