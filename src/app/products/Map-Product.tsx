import { IProductDetail } from "@/type";
import { Card } from "flowbite-react";



const productDetail: IProductDetail[] = [
   {
      productname: "Tanamera",
      image: "tanamera-product.webp",
      notes: "Green Apple, Cinnamon, Light-bodied",
      price: "$2.4"
   },
   {
      productname: "Grady's",
      image: "gradys-product.webp",
      notes: "Chocolate, Chicory, Clove, Bold",
      price: "$3"
   },
   {
      productname: "Chameleon",
      image: "chameleon-product.jpg",
      notes: "Vanilla, Biscoff, Medium-bodied",
      price: "$2.6"
   },
   {
      productname: "Blue Bottle",
      image: "BB-product.webp",
      notes: "Lavender, Blueberry, Medium-bodied",
      price: "$2.2"
   }
]

export default function MapProduct() {
   return productDetail.map((product) => {
      return (
         <div className="flex flex-col hover:scale-110 duration-200" key={product.productname}>
            <Card className="max-w-sm" imgSrc={product.image} horizontal>
             <h5 className="text-3xl font-bold tracking-tight text-lime-600">
             {product.productname}
             </h5>
             <p className="font-normal text-gray-900">
             <span className="font-bold text-lime-600">Charateristics:</span> {product.notes}
             </p>
             <h5 className="text-2xl font-bold text-lime-600 flex justify-end">
             {product.price}
             </h5>
      </Card>
         </div>
      )
   }
   )
}