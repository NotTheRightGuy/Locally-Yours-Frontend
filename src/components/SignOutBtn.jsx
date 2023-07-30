import { useClerk } from "@clerk/clerk-react";
const SignOutBtn = ({ hidden }) => {
    const { signOut } = useClerk();
    return (
        <button
            onClick={() => {
                signOut();
                window.location.href = "/";
            }}
            className={`${hidden} border-2  px-4 py-2 rounded-full bold hover:bg-red-600 hover:text-white transition-all hover:scale-105`}
        >
            SIGN OUT
        </button>
    );
};

export default SignOutBtn;
