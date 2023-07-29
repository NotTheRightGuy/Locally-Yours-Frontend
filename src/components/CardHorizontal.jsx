import { useState } from "react"
export default function CardHorizontal(
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    height,
    width,
){
    const data="A 21-member multi-party delegation of MPs of the Opposition bloc is on a two-day visit to Manipur. The visit is aimed at mounting pressure on the government, which had been stonewalling Opposition demands for a suo motu statement by Prime Minister Narendra Modi on the Manipur situation."
    
    function expand(){

        const website='https://codingbeautydev.com'
        window.open({website}, '_blank', 'noreferrer');
        console.log(expandCard)
    }
    const newsCard="bg-[#EEEEEE] mr-16 rounded-2xl flex gap-5 border-[#EEEEEE] border-2 hover:shadow-sm hover:cursor-pointer hover:shadow-gray-400 hover:translate-y-[-4px] hover:duration-100 p-5 pb-0 pt-0"

    return(
        <div className={newsCard}>
            {console.log(title)}
            <div className="flex flex-col ">
                <div className="m-0 translate-y-3 text-gray-500 text-[13px] p-0 h-0 ">
                    Saturday,
                </div>
                <div className="flex">
                    <div className="title text-4xl pr-5 pt-2 mt-5 font-bebas ">
                        {title}
                    </div>

                </div>
                <div className="text-[17px] pr-2 text-gray-500 font-rubik" >
                    {description}
                    <div className="h-fit w-fit translate-y-[-16px] text-[13px] ml-[600px] text-gray-400 ">
                        -Mamta bannerjee
                    </div>
                </div>
            </div>
        </div>
    )
}