import Link from "next/link";
import Image from "next/image";

export function Branding() {
    return (
        <Link
            href={"/"}
            className={"flex items-center gap-4"}
        >
            <Image
                src={"/logo.png"}
                alt={"Kronbot logo"}
                width={50}
                height={61.9}
            />

            <h2 className={"text-2xl"}>KronBOT</h2>
        </Link>
    );
}