import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Comment from "../components/Comment";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function PostPage({
  trendingResults,
  followResults,
  providers,
}) {
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();
  const { id } = router.query;

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snaphot) => {
        setPost(snaphot.data());
      }),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>
          {post?.username} on Twitter: &quot;{post?.text}&quot;{" "}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black min-h-screen flex mx-auto">
        <header
          role="banner"
          className="flex flex-row justify-end xl:min-w-[299px] sm:min-w-[80px] flex-grow-[2]"
        >
          <Sidebar />
        </header>
        <main role="main" className="flex flex-start flex-grow">
          <div className="w-[999px]  flex justify-between">
            <div className="flex-grow border-l border-r border-gray-700 max-w-[600px]">
              <div className="flex itemcs-center px-1.5 py-2 text-[#d9d9d9] text-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
                <div
                  className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                  onClick={() => router.push("/")}
                >
                  <ArrowLeftIcon className="h-5 text-[#d9d9d9]" />
                </div>
                Tweet
              </div>
              <Post id={id} post={post} PostPage />
              {comments.length > 0 && (
                <div className="pb-72">
                  {comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      id={comment.id}
                      comment={comment.data()}
                    />
                  ))}
                </div>
              )}
            </div>
            <Widgets
              trendingResults={trendingResults}
              followResults={followResults}
            />
          </div>
        </main>
        {isOpen && <Modal />}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://www.jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://www.jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
