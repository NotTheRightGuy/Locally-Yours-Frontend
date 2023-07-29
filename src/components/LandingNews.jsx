import { Skeleton, Stack } from "@chakra-ui/react";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";

function LandingNews() {
    const url = "https://locally-yours.onrender.com";
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [active, setActive] = useState("technology");

    useEffect(() => {
        setLoading(true);
        axios
            .post(`${url}/news/query`, {
                query: active,
            })
            .then(function (res) {
                console.log(res);
                setNews(res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
        setLoading(false);
    }, [active]);
    const handleClick = (e) => {
        document.getElementById(active).classList.remove("bg-black");
        document.getElementById(active).classList.remove("text-white");
        if (e == "technology") {
            setActive("technology");
        } else if (e == "politics") {
            setActive("politics");
        } else if (e == "fashion") {
            setActive("fashion");
        } else if (e == "celebrity") {
            setActive("celebrity");
        } else if (e == "sports") {
            setActive("sports");
        }
        document.getElementById(e).classList.add("bg-black");
        document.getElementById(e).classList.add("text-white");
    };
    return (
        <section className="overflow-x-hidden  pt-[10vh]">
            <section className="news-filter w-screen flex justify-center gap-10 font-bebas text-3xl">
                <button
                    id="technology"
                    onClick={() => handleClick("technology")}
                    className="border-2 px-5 py-4 border-black rounded-full hover:scale-105 transition-all bg-black text-white"
                >
                    Techonology
                </button>
                <button
                    id="politics"
                    onClick={() => handleClick("politics")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Politics
                </button>
                <button
                    id="fashion"
                    onClick={() => handleClick("fashion")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Fashion
                </button>
                <button
                    id="celebrity"
                    onClick={() => handleClick("celebrity")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Celebrity
                </button>
                <button
                    id="sports"
                    onClick={() => handleClick("sports")}
                    className="border-2 border-black px-5 py-4 rounded-full hover:scale-105 transition-all"
                >
                    Sports
                </button>
            </section>
            <section className="news-cards pt-10 px-10 grid grid-cols-3 gap-6">
                {loading ? (
                    <Stack>
                        <Skeleton height="20px" width="95vw" />
                        <Skeleton height="20px" width="95vw" />
                        <Skeleton height="20px" width="95vw" />
                        <Skeleton height="20px" width="95vw" />
                        <Skeleton height="20px" width="95vw" />
                        <Skeleton height="20px" width="95vw" />
                    </Stack>
                ) : (
                    news.map((item, id) => {
                        return (
                            <NewsCard
                                key={id}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                urlToImage={item.urlToImage}
                                publishedAt={item.publishedAt}
                                source={item.source}
                                height={item.height}
                                width={item.width}
                            />
                        );
                    })
                )}
            </section>
        </section>
    );
}

export default LandingNews;
