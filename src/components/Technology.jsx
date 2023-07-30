import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
function Technology() {
    const [technologyNews, setTechnologyNews] = useState([]);
    const url = "http://localhost:3000";
    const getTechnologyNews = async (e) => {
        axios
            .post(`${url}/news/query`, { query: "technology" })
            .then((res) => {
                const news = res.data;
                // only get 20 news
                const newsSlice = news.slice(0, 20);
                setTechnologyNews(newsSlice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getTechnologyNews();
    }, []);
    return (
        <section>
            <div className="font-bebas text-8xl font-bold underline mb-5">
                TECHNOLOGY
            </div>
            <div className="grid grid-cols-2 gap-4">
                {technologyNews.map((news, id) => (
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

export default Technology;
