"use client";

import {button, defaultPadding} from "@/components/primitives";
import clsx from "clsx";
import {Branding} from "@/components/Branding";
import Image from "next/image";

export default function HeroLanding(){
    return (
        <section
        className={clsx(
            defaultPadding(),
            "hero grid grid-cols-1 md:grid-cols-2 items-center justify-center px-8 gap-20",
            "flex-grow"
        )}
        >
            <div className="flex flex-col items-center md:items-start">
                <Image src={"/logo-name.svg"}
                       alt={"logo name"}
                       width={600}
                       height={100}
                />

                <p className={"text-2xl my-8"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, est,
                    voluptatum. Aliquam architecto assumenda at dolores fugit, illo tempore tenetur. Ducimus eaque fugit
                    illo illum laborum nobis placeat provident veniam.</p>

                <button
                    type={"button"}
                    className={button()}
                >
                    Meet the team
                </button>
            </div>
            <div>
                <Image
                    src={"/logo nou.svg"} alt={"logo"}
                    width={350} height={350}
                    className={clsx(
                        "object-contain max-w-[350px] mr-0 ml-auto"
                    )}
                />
            </div>
        </section>
    );
}