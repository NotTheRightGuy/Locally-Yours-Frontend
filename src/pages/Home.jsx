import NavBar from "../components/Navbar";
import LandingNews from "../components/LandingNews";
import { useRef, useEffect } from "react";
import TypeWriter from "typewriter-effect/dist/core";

function Home() {
    const typewriter = useRef(null);
    useEffect(() => {
        const typewriterInstance = new TypeWriter(typewriter.current, {
            delay: 50,
            loop: true,
            deleteSpeed: 10,
        });

        typewriterInstance
            .pauseFor(200)
            .typeString("SIMPLIFYING THE NEWS FOR YOU")
            .pauseFor(400)
            .deleteChars(28)
            .typeString("EASING THE WAY YOU READ NEWS")
            .pauseFor(400)
            .deleteChars(32)
            .typeString("HELPING YOU STAY UPDATED")
            .pauseFor(400)
            .deleteChars(24)
            .start();
    }, []);
    return (
        <section className="landing-page">
            <NavBar />
            <hr />
            <div className="flex mt-10 px-10">
                <div
                    ref={typewriter}
                    className="w-[50vw] font-bebas font-bold text-6xl tracking-wide scale-y-125 translate-y-2"
                >
                    SIMPLIFYING THE NEWS FOR YOU
                </div>
                <div className="w-[50vw] font-poppins font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque mollitia inventore, dolorum perspiciatis numquam sit
                    iure ullam unde veniam maxime sequi eos odio atque voluptate
                    error autem! Deserunt, placeat fugit!
                </div>
            </div>
            <LandingNews />
        </section>
    );
}

export default Home;
