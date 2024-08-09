import Link from "next/link";


export default function Overview() {
   return (
     <div className="flex flex-col w-full h-auto bg-gray-100 items-center">
       <div className="pt-20 text-2xl font-semibold text-lime-600">So, what exactly is <span className="font-semibold sm:text-3xl text-gray-700">COLDBREW DEALER ?</span> Here is the overview...</div>
       <p className="pt-16 px-24 text-lg">To be exact, let just call us as a cold brew coffee curator and distributor. We are here to collect and provide the best cold brew coffee available in the market. Our goal is to make our partners product become convenient & reachable by all of the caffeine hunter, like you!</p>
       <div className="pt-6 text-2xl justify-start font-semibold text-lime-600">How is that possible to distribute?</div>
       <p className="pt-2 px-24 text-lg">Easy, we will just drop our vending machine to the public facility, events, your office, your school, your private party, police station, you name it! And because it is a vending machine, means it is 24/7 of caffeine availability!</p>
       <div className="pt-6 text-2xl justify-start font-semibold text-lime-600">Anway, why cold brew coffee?</div>
       <p className="pt-2 px-24 text-lg">Due we store products in vending machine, cold brew coffee have good flavor consistency for a relatively long time. But they are not the only benefit, cold brew coffee also tends to be <span className="font-semibold text-2xl">less acidic, more caffeine</span> and of course<span className="font-semibold text-2xl"> anytime, anywhere!</span></p>
       <div className="bg-lime-600 p-1 mt-9 mb-4 rounded-xl font-semibold hover:scale-110 hover:brightness-110 hover:text-gray-300"><Link href="/about">Learn more about us...</Link></div>
     </div>
   );
 }