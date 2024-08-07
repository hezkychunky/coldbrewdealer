import { Card } from "flowbite-react";

export default function ProductCard() {
   return (
      <Card className="max-w-sm" imgSrc="vending.webp" horizontal>
             <h5 className="text-2xl font-bold tracking-tight text-lime-600">
             Cold Brew Coffee Vending Machine
             </h5>
             <p className="font-normal text-gray-900">
             Since we are using vending machine, of course our products are stored inside the vending machine.
             </p>
      </Card>
   )
}