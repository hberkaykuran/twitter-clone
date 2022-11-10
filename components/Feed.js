import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

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
    <div className="text-[#d9d9d9] flex-grow sm:border-l sm:border-r border-gray-700 w-full sm:max-w-[600px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black/[0.65] backdrop-blur-md">
        <div className="sm:hidden min-w-[56px]">
          <img
            src={session.user.image}
            alt=""
            className="h-8 w-8 rounded-full cursor-pointer "
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
  );
}
