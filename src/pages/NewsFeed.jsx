import CardHorizontal from "../components/CardHorizontal.jsx";
import CardVertical from "../components/CardVertical.jsx";

import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignOutButton,
} from "@clerk/clerk-react";
function NewsFeed() {
    return (
        <div>
            <SignedIn>
                <div className="flex m-16 rounded-2xl bg-gray-500 p-16">
                    <div className="horizontal flex flex-col basis-2/3 ">
                        <CardHorizontal colour="bg-[#e0f5c3] mr-16 rounded-2xl flex gap-5" />
                        <CardHorizontal colour="bg-[#feffc0] mr-16 mt-5 rounded-2xl flex gap-5" />
                    </div>
                    <div className="basis-1/3">
                        <CardVertical />
                    </div>
                </div>
                <SignedOut />
                <SignOutButton />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

export default NewsFeed;
