import {button, defaultPadding} from "@/components/primitives";
import clsx from "clsx";
import Image from "next/image";
import HeroLanding from "@/components/home/hero_section";
import CarouselComponent from "@/components/home/CarouselComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    return (
        <div>
            <HeroLanding/>

            <div className="px-4 py-8">
                <p className="text-lg text-center mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>


        </div>
    );
}
