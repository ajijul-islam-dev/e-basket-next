import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import QuickSale from "@/components/QuickSale";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className=" mt-32 md:mt-20">
      <BannerSlider />
      <QuickSale/>
      <ProductSlider/>
      <Footer />
    </div>
  );
}
