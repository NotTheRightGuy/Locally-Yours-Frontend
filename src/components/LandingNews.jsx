import { useState } from "react";
function LandingNews() {
    const [active, setActive] = useState("tech");
    const handleClick = (e) => {
        document.getElementById(active).classList.remove("bg-black");
        document.getElementById(active).classList.remove("text-white");
        if (e == "tech") {
            setActive("tech");
        } else if (e == "politics") {
            setActive("politics");
        } else if (e == "fashion") {
            setActive("fashion");
        } else if (e == "celebrity") {
            setActive("celebrity");
        } else if (e == "sports") {
            setActive("sports");
        }
        document.getElementById(e).classList.add("bg-black");
        document.getElementById(e).classList.add("text-white");
    };
    return (
        <section className="h-screen overflow-x-hidden  pt-[10vh]">
            <section className="news-filter w-screen flex justify-center gap-10 font-bebas text-3xl">
                <button
                    id="tech"
                    onClick={() => handleClick("tech")}
                    className="border-2 px-5 py-4 border-black rounded-full hover:scale-105 transition-all bg-black text-white"
                >
                    Techonology
                </button>
                <button
                    id="politics"
                    onClick={() => handleClick("politics")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Politics
                </button>
                <button
                    id="fashion"
                    onClick={() => handleClick("fashion")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Fashion
                </button>
                <button
                    id="celebrity"
                    onClick={() => handleClick("celebrity")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Celebrity
                </button>
                <button
                    id="sports"
                    onClick={() => handleClick("sports")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Sports
                </button>
            </section>
        </section>
    );
}

export default LandingNews;
