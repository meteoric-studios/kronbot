"use client";

import {defaultPadding} from "@/components/primitives";
import clsx from "clsx";
import {Branding} from "@/components/Branding";
import {FooterLink, linkContainer} from "@/components/footer/FooterLink";

export default function Footer() {
    return (
        <footer className={"bg-gray"}>
            <div className={clsx(
                defaultPadding(),
                "flex flex-col gap-8 items-center justify-center"
            )}>
                <Branding />

                <div className={"flex items-center gap-2"}>
                    <div className={linkContainer({ side: "left" })}>
                        <FooterLink href={"/"}>
                            Home
                        </FooterLink>

                        <FooterLink href={"/"}>
                            Team
                        </FooterLink>

                        <FooterLink href={"/"}>
                            Contact
                        </FooterLink>
                    </div>

                    <div className={linkContainer({ side: "right" })}>
                        <FooterLink href={"/"}>
                            FTC
                        </FooterLink>

                        <FooterLink href={"/"}>
                            News
                        </FooterLink>

                        <FooterLink href={"/"}>
                            Technical
                        </FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
