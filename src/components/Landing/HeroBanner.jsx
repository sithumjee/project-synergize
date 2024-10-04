import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function HomeBanner() {
  const router = useRouter();
  const [searchData, setSearchData] = useState("");

  return (
    <div className="h-[680px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-full z-0">
        <video
          className="absolute top-0 right-0 w-[110vw] h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/header_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      </div>
      <div className="z-20 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
        <h1 className="text-white text-5xl leading-snug">
          Find the perfect&nbsp;
          <i>freelance</i>
          <br />
          services for your business
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
            <input
              type="text"
              className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
              placeholder={`Try "building mobile app"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <button
            className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md"
            onClick={() => router.push(`/search?q=${searchData}`)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
