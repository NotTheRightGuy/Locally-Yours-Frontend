import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import SignOutBtn from "./SignOutBtn";

function NavBar() {
    const user = useUser();
    return (
        <nav className="flex justify-between h-16 items-center px-10 border-b-2">
            <div className="nav-links flex gap-6 font-bebas text-lg">
                <div
                    className="hover:underline transition-all cursor-pointer"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    HOME
                </div>
                <div
                    className="hover:underline transition-all cursor-pointer"
                    onClick={() => {
                        window.location.href = "/newsfeed";
                    }}
                >
                    NEWS
                </div>
                <div className="hover:underline transition-all cursor-pointer">
                    CONTACT
                </div>
            </div>
            <div className="project-name font-poppins text-4xl font-bold tracking-tighter">
                LOCALLY YOURS
            </div>
            <div className="btn-section flex gap-3 font-bebas text-lg">
                <button
                    onClick={() => (window.location.href = "/signup")}
                    className="border-2  px-4 py-2 rounded-full bold hover:bg-black hover:text-white transition-all hover:scale-105"
                >
                    GET STARTED
                </button>
                <SignOutBtn hidden={user.isSignedIn ? "" : "hidden"} />
            </div>
        </nav>
    );
}

export default NavBar;
