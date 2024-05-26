export default function Hero() {
    return (
        <div className="h-screen absolute top-0 bg-landing w-full">
                <div className={"flex responsive-px h-full flex-col lg:flex-row lg:items-center lg:justify-between"}>
                    <div className={"w-full lg:w-1/2"}>
                        <h1 className={"text-9xl font-bold text-white"}>Kron<br className={"lg:hidden"}/>BOT</h1>
                        <p className={"text-6xl font-bold text-white"}>we don’t predict the <br/> future we invent it</p>
                    </div>
                    <div className={"mx-auto"}>
                        <img src="/logo.png" alt="" className={"w-72"}/>
                    </div>
                </div>
        </div>
    )
}