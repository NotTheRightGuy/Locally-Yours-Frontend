import NavBar from "../components/Navbar";
import { CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

import { useToast } from "@chakra-ui/react";
function CategorySelection() {
    const toast = useToast();
    const user = useUser();
    const url = "https://locally-yours.onrender.com";
    const [technology, setTechnology] = useState(false);
    const [sports, setSports] = useState(false);
    const [politics, setPolitics] = useState(false);
    const [fashion, setFashion] = useState(false);
    const [anime, setAnime] = useState(false);
    const handleCategory = (e) => {
        e.preventDefault();
        const mail =
            user.user.primaryEmailAddress.emailAddress ||
            user.user.emailAddresses.emailAddress;
        const tech_time = document.getElementById("technology-time").value;
        const sports_time = document.getElementById("sports-time").value;
        const politics_time = document.getElementById("politics-time").value;
        const fashion_time = document.getElementById("fashion-time").value;
        const anime_time = document.getElementById("anime-time").value;
        // Change default time to 00:00 if input is empty
        if (tech_time === "") {
            document.getElementById("technology-time").value = "00:00";
        }
        if (sports_time === "") {
            document.getElementById("sports-time").value = "00:00";
        }
        if (politics_time === "") {
            document.getElementById("politics-time").value = "00:00";
        }
        if (fashion_time === "") {
            document.getElementById("fashion-time").value = "00:00";
        }
        if (anime_time === "") {
            document.getElementById("anime-time").value = "00:00";
        }

        axios
            .post(`${url}/category/email`, {
                email: mail,
                technology,
                tech_time: document.getElementById("technology-time").value,
                sports,
                sports_time: document.getElementById("sports-time").value,
                politics,
                politics_time: document.getElementById("politics-time").value,
                fashion,
                fashion_time: document.getElementById("fashion-time").value,
                anime,
                anime_time: document.getElementById("anime-time").value,
            })
            .then((res) => {
                toast({
                    title: "Intrests Updated.",
                    description: "We've updated your Intrests. Redirecting",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                setTimeout(() => {
                    window.location.href = "/newsfeed";
                }, 3000);
                console.log(res);
            })
            .catch((err) => {
                toast({
                    title: "An error occurred.",
                    description:
                        "Something Happened and I have no idea how to solve it.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                console.log(err);
                console.log(err);
            });
    };
    return (
        <div>
            <NavBar />
            <div className="h-screen flex justify-center">
                <div className="profileComplete h-[80vh] w-[60vw] mt-10 rounded-3xl border-2 px-4">
                    <div className="font-bebas text-3xl mt-4 mb-4">
                        LET'S MAKE IT YOURS
                    </div>
                    <form action="" className="flex flex-col">
                        <CheckboxGroup>
                            <Checkbox
                                size="lg"
                                className="font-bebas"
                                onChange={() => {
                                    setTechnology(!technology);
                                    document
                                        .getElementById("technology")
                                        .classList.toggle("hidden");
                                }}
                            >
                                Technology
                            </Checkbox>
                            <div id="technology" className="flex gap-6 hidden">
                                <label htmlFor="technology-time">
                                    When do you prefer to have this News
                                </label>
                                <input
                                    type="time"
                                    id="technology-time"
                                    className=""
                                ></input>
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup>
                            <Checkbox
                                size="lg"
                                className="font-bebas"
                                onChange={() => {
                                    setSports(!sports);
                                    document
                                        .getElementById("sports")
                                        .classList.toggle("hidden");
                                }}
                            >
                                Sports
                            </Checkbox>
                            <div id="sports" className="flex gap-6 hidden">
                                <label htmlFor="sports-time">
                                    When do you prefer to have this News
                                </label>
                                <input
                                    type="time"
                                    id="sports-time"
                                    className=""
                                ></input>
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup>
                            <Checkbox
                                size="lg"
                                className="font-bebas"
                                onChange={() => {
                                    setPolitics(!politics);
                                    document
                                        .getElementById("politics")
                                        .classList.toggle("hidden");
                                }}
                            >
                                Politics
                            </Checkbox>
                            <div id="politics" className="flex gap-6 hidden">
                                <label htmlFor="sports-time">
                                    When do you prefer to have this News
                                </label>
                                <input
                                    type="time"
                                    id="politics-time"
                                    className=""
                                ></input>
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup>
                            <Checkbox
                                size="lg"
                                className="font-bebas"
                                onChange={() => {
                                    setFashion(!fashion);
                                    document
                                        .getElementById("fashion")
                                        .classList.toggle("hidden");
                                }}
                            >
                                Fashion
                            </Checkbox>
                            <div id="fashion" className="flex gap-6 hidden">
                                <label htmlFor="fashion-time">
                                    When do you prefer to have this News
                                </label>
                                <input
                                    type="time"
                                    id="fashion-time"
                                    className=""
                                ></input>
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup>
                            <Checkbox
                                size="lg"
                                className="font-bebas"
                                onChange={() => {
                                    setAnime(!anime);
                                    document
                                        .getElementById("anime")
                                        .classList.toggle("hidden");
                                }}
                            >
                                Anime
                            </Checkbox>
                            <div id="anime" className="flex gap-6 hidden">
                                <label htmlFor="anime-time">
                                    When do you prefer to have this News
                                </label>
                                <input
                                    type="time"
                                    id="anime-time"
                                    className=""
                                ></input>
                            </div>
                        </CheckboxGroup>

                        <button
                            onClick={handleCategory}
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

export default CategorySelection;
