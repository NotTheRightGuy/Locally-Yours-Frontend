import NavBar from "../components/Navbar";
import LandingNews from "../components/LandingNews";
function Home() {
    return (
        <section className="landing-page">
            <NavBar />
            <hr />
            <div className="flex mt-10 px-10">
                <div className="w-[50vw] font-bebas font-bold text-6xl tracking-wide scale-y-125 translate-y-2">
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
