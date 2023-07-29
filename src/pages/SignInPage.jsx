import { SignIn } from "@clerk/clerk-react";
function SignInPage() {
    return (
        <>
            <div className="h-screen justify-center items-center flex">
                <SignIn />
            </div>
        </>
    );
}

export default SignInPage;
