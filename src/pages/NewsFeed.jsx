import CardHorizontal from "../components/CardHorizontal.jsx"
import CardVertical from "../components/CardVertical.jsx"
import FilterBar from "../components/FilterBar.jsx" 
import { useState,useEffect } from "react";
import axios from "axios"
import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignOutButton,
} from "@clerk/clerk-react";
function NewsFeed() {

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


    return (
        <div>
            <SignedIn>
                <FilterBar/>
                <section className="flex m-16 mt-0 rounded-2xl p-16">
                    {/* <div className="horizontal flex flex-col basis-2/3 gap-6 "> */}
                    {news.map((item, id) => {
                        return (
                            // console.log(item),
                            <CardHorizontal
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
                    }  
                    {/* </div> */}
                    {/* <div className="basis-1/3">
                        <CardVertical
                        />
                    </div> */}
                </section>                
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>

        </div>
    );
}

export default NewsFeed;
