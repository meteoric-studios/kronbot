"use client";
import { useEffect, useState } from "react";

const ScrollHandler = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <style jsx global>{`
            .navbar {
                transition: background-color 0.3s, color 0.3s;
                background-color: ${scrolled ? "#fbf8f8" : "transparent"};
                color: ${scrolled ? "black" : "#fbf8f8"};
            }
        `}</style>
    );
};

export default ScrollHandler;
