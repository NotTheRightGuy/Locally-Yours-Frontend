import NavBar from "../components/Navbar";
import LandingNews from "../components/LandingNews";
import { useRef, useEffect } from "react";
import TypeWriter from "typewriter-effect/dist/core";
import { SignOutButton } from "@clerk/clerk-react";

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
                    Are you tired of sifting through endless news articles to
                    find the ones that are relevant to you? With our tailored
                    news service, you can get the news that matters to you,
                    delivered right where you need it.
                </div>
            </div>
            <LandingNews />
        </section>
    );
}

export default Home;
