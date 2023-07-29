function NewsCard({
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    height,
    width,
}) {
    return (
        <div
            onClick={() => window.open(url, "_blank")}
            className={`bg-[#eeeeee] ${height} ${width} rounded-2xl relative pt-4 pl-4 flex flex-col cursor-pointer pr-5 hover:-translate-x-2 hover:-translate-y-2 hover:border hover:border-black transition-all`}
        >
            <div className="news-title font-bebas text-4xl ">{title}</div>
            <div className="news-body font-inter mt-4">{description}</div>
            <div className="news-footer flex gap-4 mt-10 items-center mb-4">
                <div className="news-source font-inter text-sm font-bold border-2 border-black rounded-lg px-4 py-1">
                    {source}
                </div>
                <div className="news-date font-inter text-sm font-bold">
                    {publishedAt}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
