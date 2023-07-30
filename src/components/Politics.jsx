import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
function Politics() {
    const [politicsNews, setPolitics] = useState([]);
    const url = "https://locally-yours.onrender.com";
    const getPoliticsNews = async (e) => {
        axios
            .post(`${url}/news/query`, { query: "politics" })
            .then((res) => {
                const news = res.data;
                // only get 20 news
                const newsSlice = news.slice(0, 20);
                setPolitics(newsSlice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getPoliticsNews();
    }, []);
    return (
        <section>
            <div className="font-bebas text-8xl font-bold underline mb-5">
                Politics
            </div>
            <div className="grid grid-cols-2 gap-4">
                {politicsNews.map((news, id) => (
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

export default Politics;
