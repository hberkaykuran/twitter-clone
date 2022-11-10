import { HomeIcon } from "@heroicons/react/24/solid";
import {
  PencilIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function Bottombar() {
  const router = useRouter();
  return (
    <div className="fixed sm:hidden flex-col items-center fix bottom-0 left-0 right-0 z-10">
      <div className="flex flex-row justify-end items-end w-full h-max-[16vh] h-14">
        <button
          className="flex xl:hidden rounded-full w-[52px] h-[52px] 
            text-lg font-bold shadow-md bg-[#1d9bf0] text-[#d9d9d9] hover:bg-[#1a8cd8] justify-center items-center relative bottom-5 right-5"
          onClick={() => router.push("/tweet")}
        >
          <div>
            <PlusIcon className="h-4 absolute" />
            <PencilIcon className="h-5 pl-2 mt-1" />
          </div>
        </button>
      </div>
      <div className="w-full h-max-[16vh] h-14 relative pbSafe border-t  border-gray-700 bg-black">
        <div className="flex flex-row items-center justify-center h-full">
          <HomeIcon className="h-7 text-white flex-grow" />
          <MagnifyingGlassIcon className="h-7 text-white flex-grow" />
          <BellIcon className="h-7 text-white flex-grow" />
          <InboxIcon className="h-7 text-white flex-grow" />
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
