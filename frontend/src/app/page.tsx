import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Carousel from "@/app/components/Carousel";
import {Input} from "@nextui-org/input";
import * as Icon from "react-feather";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
    return (
        <section>
            <Header/>
            <Hero/>
            {/*div for bg-layer of Hero*/}
            <div className={"h-[90vh]"}/>
            <div className={"h-[90vh] bg-black responsive-px text-center py-8"}>
                <p>
                    Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularis
                </p>
                <Carousel/>
            </div>
            <section className={"responsive-px py-32 min-h-screen"}>
                <div className={"flex flex-col md:flex-row gap-8"}>
                    <div className={"w-full md:w-1/2 flex flex-col justify-between"}>
                        <h1 className="font-bold text-left text-6xl mb-16 ">Contact us</h1>
                        <p className={"w-2/3 text-2xl 2xl:text-4xl mb-8"}>
                            For questions, technical assistance, or collaboration opportunities via the contact
                            information
                            below or trough the form.
                        </p>
                        <div className={"flex flex-col gap-4"}>
                            <div className={"flex items-center"}>
                                <Icon.Phone/>
                                <p className={"ml-4"}>Phone: +40 765 597 608</p>
                            </div>
                            <div className={"flex items-center"}>
                                <Icon.Mail/>
                                <p className={"ml-4"}>beyondbrand@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </section>
        </section>
    );
}
