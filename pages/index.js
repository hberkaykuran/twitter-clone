import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Widgets from "../components/Widgets";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  if (!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black min-h-screen flex mx-auto">
        <header
          role="banner"
          className="flex flex-row justify-end xl:min-w-[299px] sm:min-w-[80px] flex-grow-[2]"
        >
          <Sidebar />
        </header>
        <main role="main" className="flex flex-start flex-grow-[1]">
          <div className="w-[999px] flex justify-between ">
            <Feed />
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
