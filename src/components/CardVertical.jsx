import { useState } from "react"

export default function CardVertical() {
    const before="A 21-member multi-party delegation of MPs of the Opposition bloc is on a two-day visit to Manipur. The visit is aimed at mounting pressure on the government, which had been stonewalling Opposition demands for a suo motu statement by Prime Minister Narendra Modi on the Manipur situation."

    function expand(){
        const website='https://codingbeautydev.com'
        window.open(website, '_blank', 'noreferrer');
        console.log(expandCard)
    }
    return(
        // <div className="flex flex-col">
            <div className="flex flex-col   h-full w-fit bg-[#EEEEEE] rounded-xl items-center border-[#EEEEEE ] border-2 hover:shadow-sm hover:cursor-pointer hover:shadow-gray-400 hover:translate-y-[-4px] hover:duration-100" onClick={expand}>
                <div className="w-72 text-gray-500 font-normal text-[10px] mt-3 ">
                        26-jul-2023
                </div>
                <div className="title text-4xl w-72 flex justify-end items-end font-bebas">
                        MODI GOES ALL OUT ON TERRORIST
                        
                </div>
                {/* <div className="translate-y-[-10px] text-[13px] ml-16 text-gray-500">
                        Mamta bannerjee
                </div> */}
                <div className="w-72 mx-5 pb-2 pt-5  text-gray-500 font-rubik">
                    {before}
                </div>
            </div>
        // </div>
    )
}