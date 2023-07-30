import NavBar from "../components/Navbar";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function ProfileCompletion() {
    const user = useUser();
    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);
    const url = "https://locally-yours.onrender.com";
    const toast = useToast();
    const updateProfile = (
        first_name,
        last_name,
        adr_line_1,
        adr_line_2,
        pincode
    ) => {
        const email =
            user.user.primaryEmailAddress.emailAddress ||
            user.user.emailAddresses.emailAddress;
        axios
            .put(`${url}/users/email`, {
                email,
                first_name,
                last_name,
                adr_line_1,
                adr_line_2,
                pincode,
            })
            .then((res) => {
                toast({
                    title: "Profile Updated.",
                    description:
                        "We've created your profile for you. Redirecting",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                setTimeout(() => {
                    window.location.href = "/category-selection";
                }, 3000);
                console.log(res);
            })
            .catch((err) => {
                toast({
                    title: "An error occurred.",
                    description: "Unable to create profile.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                console.log(err);
            });
    };
    return (
        <div>
            <NavBar />
            <div className="h-screen flex justify-center">
                <div className="profileComplete  w-[60vw] mt-10 rounded-3xl border-2 pl-4">
                    <div className="font-bebas text-3xl mt-4 mb-4">
                        LET'S CREATE YOUR PROFILE
                    </div>
                    <form action="">
                        <FormControl isRequired>
                            {/* <FormLabel>Email Address</FormLabel>
                            <Input type="email" width={"40vw"} id="email" />
                            <FormHelperText>
                                We will Never Share your email
                            </FormHelperText> */}
                            <div className="flex gap-6 mt-4">
                                <div>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        width={"19vw"}
                                        id="firstName"
                                    />
                                </div>
                                <div>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        width={"20vw"}
                                        id="lastName"
                                    />
                                </div>
                            </div>
                            <FormLabel className="mt-4">
                                Address Line 1
                            </FormLabel>
                            <Input type="text" width={"40vw"} id="adrLine1" />
                            <FormHelperText>
                                Don't worry, we will keep your address safe
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel className="mt-4">
                                Address Line 2
                            </FormLabel>
                            <Input type="text" width={"40vw"} id="adrLine2" />
                            <FormHelperText>
                                Don't worry, we will keep your address safe
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel className="mt-4">Pincode</FormLabel>
                            <Input type="number" width={"40vw"} id="pincode" />
                            <FormHelperText>
                                We will be using pincode to serve you better
                            </FormHelperText>
                        </FormControl>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const first_name =
                                    document.getElementById("firstName").value;
                                const last_name =
                                    document.getElementById("lastName").value;
                                const adr_line_1 =
                                    document.getElementById("adrLine1").value;
                                const adr_line_2 =
                                    document.getElementById("adrLine2").value;
                                const pincode =
                                    document.getElementById("pincode").value;

                                updateProfile(
                                    first_name,
                                    last_name,
                                    adr_line_1,
                                    adr_line_2,
                                    pincode
                                );
                            }}
                            className="mt-10 font-bebas text-2xl cursor-pointer border-2 px-4 py-2 rounded-2xl hover:bg-black hover:text-white transition-all"
                        >
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileCompletion;
