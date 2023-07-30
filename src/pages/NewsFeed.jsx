import NavBar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import moment from "moment/moment";
import { GiHamburgerMenu } from "react-icons/gi";
import PersonalizeNews from "../components/PersonalizeNews";
function NewsFeed() {
    const [userData, setUserData] = useState({});
    const [email, setEmail] = useState("");
    const user = useUser();
    const url = "http://localhost:3000";

    function printTimeAndDate() {
        const now = moment();
        const formattedTime = now.format("HH:mm A");
        const formattedDate = now.format("d MMM");

        return `It's ${formattedTime} of 30th July`;
    }

    useEffect(() => {
        if (user.isSignedIn) {
            setEmail(user.user.primaryEmailAddress.emailAddress);
            // console.log(user.user.emailAddresses[0].emailAddress);
        }
        if (email) {
            axios
                .post(`${url}/users/email`, { email })
                .then((res) => {
                    setUserData(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user.isSignedIn, email]);
    return (
        <div>
            <NavBar />
            <section className="news-section px-4 mt-4">
                <div className="greetings flex items-center relative">
                    <div>
                        <span className="greetings font-rubik italic text-6xl mr-5">
                            Hello
                        </span>
                        <span className="font-rubik text-5xl italic">
                            {userData.first_name}
                        </span>{" "}
                        <span className="font-rubik text-5xl italic">
                            {userData.last_name}
                        </span>
                    </div>
                    <div className="hamburger-menu absolute right-0 top-8">
                        <GiHamburgerMenu
                            onClick={() =>
                                (window.location.href = "/complete-profile")
                            }
                            height={"50px"}
                            className="cursor-pointer text-3xl hover:-translate-x-2 transition-all"
                        />
                    </div>
                </div>
                <div className="font-poppins text-sm font-bold mb-10">
                    {printTimeAndDate()}
                </div>

                <PersonalizeNews data={userData} />
            </section>
        </div>
    );
}

export default NewsFeed;
