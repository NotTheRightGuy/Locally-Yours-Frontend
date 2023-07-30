import moment from "moment/moment";
import { CiLocationOn } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Technology from "./Technology";
import Politics from "./Politics";
import Fashion from "./Fashion";
import Sports from "./Sports";
import Anime from "./Anime";

function PersonalizeNews({ data }) {
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [isTechnology, setIsTechnology] = useState(false);
    const [isPolitics, setIsPolitics] = useState(false);
    const [isFashion, setIsFashion] = useState(false);
    const [isSports, setIsSports] = useState(false);
    const [isAnime, setIsAnime] = useState(false);
    const [localNews, setLocalNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);
    const [fashionNews, setFashionNews] = useState([]);
    const [anime, setAnime] = useState([]);
    const [sportsNews, setSportsNews] = useState([]);

    const getCityFromPin = async (e) => {
        fetch(`https://api.postalpincode.in/pincode/${data.pincode}/`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                setCity(res[0].PostOffice[0].District);
            });
    };

    const getLocalNews = async (e) => {
        const url = "https://locally-yours.onrender.com";

        axios
            .post(`${url}/news/query`, { query: city })
            .then((res) => {
                const localArray = res.data;
                const localSlice = localArray.slice(0, 60);
                setLocalNews(localSlice);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (data.pincode) {
            console.log(data.pincode);
            setPincode(data.pincode);
            getCityFromPin();
            getLocalNews();
        }
        if (data.technology) {
            setIsTechnology(true);
        }
        if (data.politics) {
            setIsPolitics(true);
        }
        if (data.sports) {
            setIsSports(true);
        }
        if (data.fashion) {
            setIsFashion(true);
        }
        if (data.anime) {
            setIsAnime(true);
        }
    }, [data.pincode]);

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
            <div className="news-section px-4 mt-16 flex">
                <div className="curated w-[70vw] h-screen ">
                    {isTechnology ? <Technology /> : <></>}
                    {isSports ? <Sports /> : <></>}
                    {isAnime ? <Anime /> : <></>}
                    {isFashion ? <Fashion /> : <></>}
                    {isPolitics ? <Politics /> : <></>}
                </div>
                <div className="local-pincode w-[30vw] border-2 border-black">
                    <div className="font-bebas text-3xl ml-4 mb-5 mt-2 outline w-fit px-3 py-2 bg-black text-white hover:bg-white hover:text-black transition-all">
                        LOCAL
                    </div>
                    {localNews.map((news, id) => (
                        <NewsCard
                            key={id}
                            title={news.title}
                            description={news.description}
                            url={news.url}
                            publishedAt={news.publishedAt}
                            source={news.source}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PersonalizeNews;
