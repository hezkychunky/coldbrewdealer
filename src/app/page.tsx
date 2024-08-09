import Overview from "@/Components/Company-Overview";
import Hero from "@/Components/Hero";
import ProductsHome from "@/Components/Products";


export default function Home() {
  return (
    <div>
      <Hero/> 
      <Overview/>
      <ProductsHome />
    </div>
  );
}
