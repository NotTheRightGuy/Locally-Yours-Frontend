import { SignIn } from "@clerk/clerk-react";
function SignInPage() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <SignIn afterSignInUrl={"/newsfeed"} />
        </div>
    );
}

export default SignInPage;
