import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import ScrollHandler from "@/app/components/ScrollHandler";

interface IHeader {
    id: string;
    attributes: {
        contactDisplay: string;
        contactUrl: string;
        showContactIcon: boolean;
        logo: {
            data: {
                id: string;
                attributes: {
                    url: string;
                };
            };
        };
        header_links: {
            data: {
                id: string;
                attributes: {
                    display: string;
                    url: string;
                };
            }[];
        };
    }
}

export default async function Header() {
    const headerResponse = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL!}/api/header?populate=logo&populate=header_links`, { cache: 'no-cache' });
    const header: { data: IHeader } = await headerResponse.json();
    const src = `${process.env.NEXT_PUBLIC_CMS_URL!}${header.data.attributes.logo.data.attributes.url!}`;

    return (
        <>
            <ScrollHandler />
            <Navbar className="navbar flex items-center justify-between w-full px-16 h-[10vh] sticky top-0 z-20">
                <NavbarBrand>
                    <Image src={src} alt="Logo" width={40} height={40} />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {header.data.attributes.header_links.data.map(item => (
                        <NavbarItem key={item.id}>
                            <Link href={item.attributes.url}>{item.attributes.display}</Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <div className="flex gap-2">
                    <Link href={header.data.attributes.contactUrl}>{header.data.attributes.contactDisplay}</Link>
                    {header.data.attributes.showContactIcon && (
                        <Icon.Mail />
                    )}
                </div>
            </Navbar>
        </>
    );
}
