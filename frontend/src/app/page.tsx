import {button, defaultPadding} from "@/components/primitives";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
    return (
        <section
            className={clsx(
                defaultPadding(),
                "grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8",
                "flex-grow"
            )}
        >
            <div>
                <h1 className={"text-4xl mb-4"}>KronBET</h1>
                <p className={"text-2xl mb-8"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, est,
                    voluptatum. Aliquam architecto assumenda at dolores fugit, illo tempore tenetur. Ducimus eaque fugit
                    illo illum laborum nobis placeat provident veniam.</p>

                <button
                    type={"button"}
                    className={button()}
                >
                    Meet the team
                </button>
            </div>

            <Image
                src={"/logo-lg.png"} alt={"logo"}
                width={500} height={500}
                className={clsx(
                    "object-contain md:max-w-[300px] mx-auto md:mx-0 md:justify-self-end"
                )}
            />
        </section>
    );
}
