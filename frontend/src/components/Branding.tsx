import Link from "next/link";
import Image from "next/image";

export function Branding() {
    return (
        <Link
            href={"/"}
            className={"flex items-center gap-4"}
        >
            <Image
                src={"/logo nou.svg"}
                alt={"Kronbot logo"}
                width={50}
                height={61.9}
            />

            <Image
                src={"/logo-name.svg"}
                alt={"Kronbot logo text"}
                width={100}
                height={20}
            />
        </Link>
    );
}