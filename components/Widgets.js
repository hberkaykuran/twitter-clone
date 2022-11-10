import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Trending from "./Trending";

export default function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline xl:w-[350px] py-1 mr-2.5">
      <div className="sticky top-0 bg-black z-50">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <MagnifyingGlassIcon className="text-gray-500 h-5 z-50" />
          <input
            placeholder="Search Twitter"
            type="text"
            className="bg-transparent placeholder-gray-500 absolute inset-0 pl-11 border border-transparent w-full outline-none text-[#d9d9d9] focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
          />
        </div>
        <div className="text-[#d9d9d9] space-y-3 bg-[#16181c] mt-4 rounded-xl ">
          <h4 className="font-bold text-xl px-4">{"What's happening"}</h4>
          {trendingResults.map((result, index) => (
            <Trending key={index} result={result} />
          ))}
          <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex item-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>
        <div className="text-[#d9d9d9] space-y-3 bg-[#16181c] mt-4 rounded-xl ">
          <h4 className="font-bold text-xl px-4">Who to follow</h4>
          {followResults.map((result, index) => (
            <div
              key={index}
              className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex item-center"
            >
              <Image
                src={result.userImg}
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <div className="ml-4 leading-5 group">
                <h4 className="font-bold group-hover:underline">
                  {result.username}
                </h4>
                <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
              </div>
              <button className="ml-auto bg-white text-black rounded-full font-bold text-sm my-1.5 px-3.5">
                Follow
              </button>
            </div>
          ))}
          <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex item-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
