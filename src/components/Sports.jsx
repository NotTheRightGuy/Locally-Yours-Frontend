import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
function Sports() {
    const [sportsNews, setSportsNews] = useState([]);
    const url = "https://locally-yours.onrender.com";

    const getSportsNews = async (e) => {
        axios
            .post(`${url}/news/query`, { query: "sports" })
            .then((res) => {
                const news = res.data;
                // only get 20 news
                const newsSlice = news.slice(0, 20);
                setSportsNews(newsSlice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getSportsNews();
    }, []);
    return (
        <section>
            <div className="font-bebas text-8xl font-bold underline mb-5">
                SPORTS
            </div>
            <div className="grid grid-cols-2 gap-4">
                {sportsNews.map((news, id) => (
                    <NewsCard
                        key={id}
                        title={news.title}
                        description={news.description}
                        url={news.url}
                        urlToImage={news.urlToImage}
                        publishedAt={news.publishedAt}
                        source={news.source}
                    />
                ))}
            </div>
        </section>
    );
}

export default Sports;
