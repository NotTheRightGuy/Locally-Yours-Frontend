import React from "react";
import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignOutButton,
} from "@clerk/clerk-react";

export default function FilterBar(){
    const filters="font-bebas font-bold border-2 text-2xl border-black font p-2 ml-5 mt-5 border-radius rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white duration-700";
  return (
    
    <div>
      <ul className="flex gap-5 font-bebas ml-28 w-fit">
        <li className={filters}>NATIONAL</li>
        <li className={filters}>FASHION</li>
        <li className={filters}>EDUCATION</li>
        <li className={filters}>POLITICS</li>
        <li className={filters}>SPORTS</li>
        <li className={filters}>TECHNOLOGY</li>
        <li className={filters}>ENTERTAINMENT</li>
        <li className={filters}>WEATHER</li>
        <li className={filters}>BUISNESS</li>
        <div className="flex items-center ml-28 mt-4 text-[25px]">
            <SignOutButton />

        </div>
      </ul>

    </div>
  )
}
