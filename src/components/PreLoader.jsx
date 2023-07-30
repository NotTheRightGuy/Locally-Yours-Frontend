import "../stylesheets/Preloader.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PreLoader() {
    const preloader = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            ".future",
            {
                duration: 1.5,
                x: 200,
                ease: "Expo.easeInOut",
            },
            {
                duration: 1.5,
                x: 0,
                ease: "Expo.easeInOut",
            }
        );
        gsap.to(".preloader__container-top", {
            duration: 1,
            delay: 2.25,
            top: "-100%",
            ease: "Expo.easeInOut",
        });
        gsap.to(".preloader__container-bottom", {
            duration: 1,
            delay: 2.25,
            bottom: "-100%",
            ease: "Expo.easeInOut",
        });
        gsap.to(".preloader", {
            duration: 1,
            delay: 2.25,
            display: "none",
            ease: "Expo.easeInOut",
        });
    });
    return (
        <section className="preloader" ref={preloader}>
            <div className="preloader__container-top">
                Trying to Simplify the<span className="future">FUTURE</span>
            </div>
            <div className="preloader__container-bottom">of News Reading.</div>
        </section>
    );
}

export default PreLoader;
