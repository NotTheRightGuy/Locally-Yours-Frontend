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
                <h1>News Feed</h1>
                <SignOutButton />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

export default NewsFeed;
