import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Trending from "./Trending";

export default function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <MagnifyingGlassIcon className="text-gray-500 h-5 z-50" />
          <input
            placeholder="Search Twitter"
            type="text"
            className="bg-transparent placeholder-gray-500 absolute inset-0 pl-11 border border-transparent w-full outline-none text-[#d9d9d9]"
          />
        </div>
        <div className="text-[#d9d9d9] space-y-3 bg-[#16181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
          <h4 className="font-bold text-xl px-4">What's happening</h4>
          {trendingResults.map((result, index) => (
            <Trending key={index} result={result} />
          ))}
          <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex item-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}