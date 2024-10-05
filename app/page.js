import BannerSlider from "@/components/BannerSlider";
import CategorySlider from "@/components/CategorySlider";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import QuickSale from "@/components/QuickSale";
import { Button } from "flowbite-react";
import { FaFire } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="">
      <BannerSlider />
      <QuickSale/>
      
      <ProductSlider/>
      <CategorySlider/>
      
      <ProductSlider title={"Hot Sale"} icon={<FaFire />}/>
      <ProductSlider title={"Flash Sale"} icon={<RiFlashlightFill />}/>
      <Footer />
    </div>
  );
}
