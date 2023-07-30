import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
function Anime() {
    const [animeNews, setAnimeNews] = useState([]);
    const url = "http://localhost:3000";
    const getAnimeNews = async (e) => {
        axios
            .post(`${url}/news/query`, { query: "anime" })
            .then((res) => {
                const news = res.data;
                // only get 20 news
                const newsSlice = news.slice(0, 20);
                setAnimeNews(newsSlice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getAnimeNews();
    }, []);
    return (
        <section>
            <div className="font-bebas text-8xl font-bold underline mb-5">
                ANIME
            </div>
            <div className="grid grid-cols-2 gap-4">
                {animeNews.map((news, id) => (
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

export default Anime;
