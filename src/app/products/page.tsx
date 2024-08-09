import Reviews from "@/Components/Reviews";
import MapProduct from "./Map-Product";


export default function ShowProduct() {
   return (
      <div className="flex justify-center flex-wrap gap-8 items-center pt-36 bg-lime-600">
         <h1 className="text-4xl text-gray-900 font-extrabold">Products</h1>
         <MapProduct/>
      </div>
   )
}
