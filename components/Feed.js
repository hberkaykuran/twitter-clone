import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { mobileSidebarState } from "../atom/modalAtom";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useRecoilState(mobileSidebarState);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="w-full h-full">
      <div className="text-[#d9d9d9] flex-grow sm:border-l sm:border-r border-gray-700 w-full sm:max-w-[600px]">
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black/[0.65] backdrop-blur-md">
          <div className="sm:hidden min-w-[56px]">
            <img
              src={session.user.image}
              alt=""
              className="h-8 w-8 rounded-full cursor-pointer "
              onClick={() => {
                console.log(mobileSidebarOpen);
                setMobileSidebarOpen(!mobileSidebarOpen);
              }}
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Home</h2>
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto group">
            <SparklesIcon className="h-5 text-[#d9d9d9]" />
            <span className="tooltip">Top Tweets</span>
          </div>
        </div>
        <Input />
        <div className="pb-72 border-t border-gray-700">
          {posts.map((post) => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </div>
      </div>
      <div
        className={`${
          mobileSidebarOpen
            ? "bg-[#5b7083]/40"
            : "bg-transparent pointer-events-none"
        } w-full h-full  top-0 left-0 fixed transition-all duration-300 ease-in-out z-50`}
      >
        <div
          id="mside"
          className={`${
            mobileSidebarOpen ? "left-0" : "-left-[100%]"
          } sm:hidden relative min-w-[280px] max-w-[70%] h-[100vh] bg-black flex-grow shadow-[0_0_5px_0_rgba(217,217,217,0.2),0_1px_4px_1px_rgba(217,217,217,0.25)] transition-all duration-300 ease-in-out`}
        >
          <div
            id="header"
            className="flex flex-row w-full justify-between p-3.5"
          >
            <h4 className="text-[#d9d9d9] font-bold"> Account info</h4>
            <XMarkIcon
              className="h-5 text-white mr-2"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          </div>
          <div id="sbody">
            <div id="sprofile">
              <div className="flex flex-row w-full justify-between p-3.5">
                <img
                  src={session.user.image}
                  alt=""
                  className="h-[38px] w-[38px] rounded-full cursor-pointer "
                />
                <EllipsisHorizontalCircleIcon className="h-9 text-white" />
              </div>
              <div className="px-3.5 -mt-3">
                <h4 className="font-bold text-white text-[16px] leading-[19px]">
                  {session.user.name}
                </h4>
                <p className="text-[#6e767d] text-[14px] leading-[19px]">
                  @{session.user.tag}
                </p>
              </div>
              <div className="flex flex-row p-3.5">
                <div className="flex flex-row mr-4">
                  <p className="text-white font-bold text-[13px]">0</p>
                  <p className="text-[#6e767d] text-[13px]">&nbsp;Following</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-white font-bold text-[13px]">0</p>
                  <p className="text-[#6e767d] text-[13px]">&nbsp;Followers</p>
                </div>
              </div>
            </div>
            <div id="sbuttons" className="flex flex-col">
              <div className="flex flex-row items-center p-3.5 hoverAnimationFull">
                <UserIcon className="text-white h-[23px] mr-6" />
                <h4 className="text-white font-bold text-[19px]">Profile</h4>
              </div>
              <div className="flex flex-row items-center p-3.5 hoverAnimationFull">
                <ChatBubbleBottomCenterTextIcon className="text-white h-[23px] mr-6" />
                <h4 className="text-white font-bold text-[19px] ">Topics</h4>
              </div>
              <div className="flex flex-row items-center p-3.5 hoverAnimationFull">
                <BookmarkIcon className="text-white h-[23px] mr-6" />
                <h4 className="text-white font-bold text-[19px] ">Bookmarks</h4>
              </div>
              <div className="flex flex-row items-center p-3.5 hoverAnimationFull">
                <ClipboardIcon className="text-white h-[23px] mr-6" />
                <h4 className="text-white font-bold text-[19px] ">Lists</h4>
              </div>
              <div className="flex flex-row items-center p-3.5 hoverAnimationFull">
                <UserIcon className="text-white h-[23px] mr-6" />
                <h4 className="text-white font-bold text-[19px] ">
                  Twitter Circle
                </h4>
              </div>
            </div>
            <div id="sseperator" className="flex items-center justify-center">
              <div className="border-b border-gray-700 w-[90%]"></div>
            </div>
            <div id="sdropdowns" className="">
              <div className="p-3.5 flex flex-row items-center justify-between hoverAnimationFull">
                <p className="text-white text-[14px] font-bold">
                  Creater Studio
                </p>
                <ChevronDownIcon className="text-white h-[18px]" />
              </div>
              <div className="p-3.5 flex flex-row items-center justify-between hoverAnimationFull">
                <p className="text-white text-[14px] font-bold">
                  Professional Tools
                </p>
                <ChevronDownIcon className="text-white h-[18px]" />
              </div>
              <div className="p-3.5 flex flex-row items-center justify-between hoverAnimationFull">
                <p className="text-white text-[14px] font-bold">
                  Settings and Support
                </p>
                <ChevronDownIcon className="text-white h-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
