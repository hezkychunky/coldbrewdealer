import ProductCard from "./Product-Card";
import Link from "next/link";

export default function ProductsHome() {
   return (
    <div className="flex flex-col items-center bg-lime-600 h-auto">
       <div className="pt-24 text-4xl font-semibold">Product & Testimonials</div>
         <Link href="/products" className="pt-10 pb-4 hover:scale-105 hover:hue-rotate-60">
            <ProductCard/>
         </Link>
         <Link href="/products" className="bg-white hover:scale-105 hover:hue-rotate-60 px-3 rounded-lg my-8"><span className="font-semibold text-lime-600 text-xl"> Click Here</span> to see all products</Link>
    </div>
     
   );
 }
