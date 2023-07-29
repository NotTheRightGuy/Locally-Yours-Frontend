export default function CardHorizontal(props){
    
    return(
        <div className={props.colour}   >
            {/* <div className="image"> */}
                <img src="https://i.ibb.co/3h3jmmS/modiji.jpg" className="rounded-xl h-52 m-5" alt="" />
            {/* </div> */}
            <div className="flex flex-col font-bebas">
                <div className="title text-[30px] p-5 pt-2 pl-0 pb-2 font-bold">
                    MODI GOES ALL OUT ON TERRORIST
                </div>
                <div className="">
                    A 21-member multi-party delegation of MPs of the Opposition bloc is on a two-day visit to Manipur. The visit is aimed at mounting pressure on the government, which had been stonewalling Opposition demands for a suo motu statement by Prime Minister Narendra Modi on the Manipur situation.
                </div>
            </div>
        </div>
    )
}