import { SignUp } from "@clerk/clerk-react";
function SignUpPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignUp
                path="/signup"
                routing="path"
                afterSignUpUrl="/complete-profile"
            />
        </div>
    );
}

export default SignUpPage;
