import moment from "moment/moment";
import { CiLocationOn } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";

function PersonalizeNews({ data }) {
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [localNews, setLocalNews] = useState([]);
    const getSityFromPin = async (e) => {
        await axios
            .get(`https://api.postalpincode.in/pincode/${data.pincode}/`)
            .then((res) => {
                setCity(res.data[0].PostOffice[0].District);
            });
    };

    const getNewsWithCity = async (e) => {
        await axios
            .post(`http://localhost:3000/news/query`, {
                query: city,
            })
            .then((res) => {
                console.log(res.data);
                setLocalNews(res.data);
            });
    };
    useEffect(() => {
        if (data.pincode) {
            console.log(data.pincode);
            setPincode(data.pincode);
            getSityFromPin();
            getNewsWithCity();
        }
    }, [data.pincode]);

    const url = "http://localhost:3000";
    function formatedDate() {
        const now = moment();
        const formattedDate = now.format("d MMM");
        return "30th July";
    }
    return (
        <section className=" bg-[#eeeeee] rounded-lg">
            <div className="top-section flex justify-between pt-4 px-4">
                <div>
                    <div className="border-2 px-4 py-2 border-black font-rubik">
                        {formatedDate()}
                    </div>
                </div>
                <div className="font-eb font-bold text-6xl">TIMES OF LOCAL</div>
                <div>
                    <div className="border-2 px-4 py-2 flex items-center gap-4 border-black font-rubik">
                        30°C
                        <div className="flex gap-2 items-center">
                            <CiLocationOn />
                            {data.pincode}
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-section flex justify-center pt-4 px-4">
                <div className="font-eb -mt-4 -translate-x-6">
                    Specially Curated For {data.first_name} {data.last_name}
                </div>
            </div>
            <div className="news-section px-4 mt-4 flex">
                <div className="curated w-[70vw] h-screen "></div>
                <div className="local-pincode w-[30vw] border-2 border-black">
                    <div className="font-bebas text-3xl ml-4 mt-2 outline w-fit px-3 py-2 bg-black text-white hover:bg-white hover:text-black transition-all">
                        LOCAL
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PersonalizeNews;
