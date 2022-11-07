import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row justify-end xl:min-w-[299px] sm:min-w-[80px] flex-grow">
      <div className="hidden sm:flex flex-col items-center xl:items-start fixed h-full sm:px-3 sm:justify-between xl:w-[275px]">
        <div className="w-full">
          <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0">
            <Image src="https://rb.gy/ogau5a" width={30} height={30} />
          </div>
          <div className="space-y-1">
            <SidebarLink text="Home" Icon={HomeIcon} active />
            <SidebarLink text="Explore" Icon={HashtagIcon} />
            <SidebarLink text="Notifications" Icon={BellIcon} />
            <SidebarLink text="Messages" Icon={InboxIcon} />
            <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarLink text="Lists" Icon={ClipboardIcon} />
            <SidebarLink text="Profile" Icon={UserIcon} />
            <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
          </div>
          <button
            className="hidden xl:inline rounded-full w-full h-[52px] 
            text-lg font-bold shadow-md bg-[#1d9bf0] text-[#d9d9d9] hover:bg-[#1a8cd8] my-4"
          >
            Tweet
          </button>
          <button
            className="flex xl:hidden rounded-full w-[52px] h-[52px] 
            text-lg font-bold shadow-md bg-[#1d9bf0] text-[#d9d9d9] hover:bg-[#1a8cd8] justify-center items-center my-4"
          >
            <div>
              <PlusIcon className="h-4 absolute" />
              <PencilIcon className="h-5 pl-2 mt-1" />
            </div>
          </button>
        </div>
        <div
          className="text-[#d9d9d9] flex items-center justify-center hoverAnimation my-3 flex-end w-full"
          onClick={signOut}
        >
          <img
            src={session.user.image}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-[#6e767d]">@{session.user.tag}</p>
          </div>
          <EllipsisHorizontalIcon className="h-6 hidden xl:inline flex-grow" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
