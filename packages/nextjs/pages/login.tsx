import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div
        className="relative bg-ivory-100 w-full h-screen overflow-hidden text-left text-21xl text-black font-inter"
        data-theme="exampleUi"
      >
        <Image
          className="absolute top-[149px] left-[362px] object-cover"
          alt=""
          src="/logo.png"
          width={589}
          height={72}
        />

        <div className="absolute top-[497px] left-[428px] rounded-21xl bg-orange w-[457px] h-[83px]" />
        <div className="absolute top-[514px] left-[590px]">
          <Link href="/debug" passHref className="link">
            SIGN UP
          </Link>
        </div>
        <div className="absolute top-[609px] left-[428px] rounded-21xl bg-orange w-[457px] h-[83px]" />
        <div className="absolute top-[626px] left-[590px]">
          <Link href="/debug" passHref className="link">
            LOG IN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
