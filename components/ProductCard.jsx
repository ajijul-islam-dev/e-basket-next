
import { Card } from "flowbite-react";
import Image from "next/image";
import onion from "../assets/images/products/onion.webp";
import AddCartBtn from "./AddCartBtn";

const ProductCard = () => {
    return (
        <Card
            className="relative m-1 md:m-2"
            renderImage={() => <Image className="w-fit h-fit" width={200} height={200} src={onion} alt="image 1" />}
        >
            <span className=" absolute top-5 right-5 px-2 py-1 text-xs flex items-center justify-center bg-acent rounded-lg text-white w-10">11%</span>
            <div className="absolute right-5 top-40 md:top-48">
                <AddCartBtn />
            </div>
            <div className="text-center">
                <p className="text-sm md:text-base text-gray-600 ">Deshi Peyaj (Local Onion) ± 50 gm</p>
                <span>1KG</span>
                <div className="flex items-center gap-1 md:gap-2 justify-center">
                    <span>BDT 120</span>  <span className="text-gray-600 line-through">BDT 135</span>
                </div>
            </div>
        </Card>
    );
}
export default ProductCard;