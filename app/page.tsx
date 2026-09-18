"use client";
import Link from "next/link";
import Image from "next/image";

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-6">
        <p className="border border-black rounded-full py-2 px-6 bg-white cursor-pointer text-[14px]">
          Available for New Project
        </p>
        <div className="flex gap-8">
          <Link href="/work">Work</Link>
          <Link href="/service">Service</Link>
          <Link href="/experince">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className="flex items-center gap-[15px] w[50px] relative border border-black rounded-full px-4 py-2 bg-white cursor-pointer text-[14px]">
          <span className="ml-[10px]">Lets Talk</span>{" "}
          <ArrowUpRightIcon size={15} />
        </button>
      </header>

      <main>
        <section>
          <h1 className="relative -top-[30px] flex justify-center items-center text-[12rem] scale-x-[1.4] z-[1]">
            Hurve-en
          </h1>

          <h2 className="text-[30px] font-bold relative -right-[200px] -bottom-[90px]">
            Full-Stack Developer
          </h2>
          <p className="relative -right-[200px] -bottom-[105px]">
            Developing meaningful apps <br />
            that help people on a daily basis.
          </p>

          <button className="flex items-center gap-[26px] w-[230px] relative -right-[200px] -bottom-[130px] border border-black rounded-full px-[0.9rem] py-2 bg-white cursor-pointer text-[15px]">
            <span className="ml-5">Let&apos;s Collaborate</span>
            <ArrowUpRightIcon size={20} />
          </button>

          <div className="relative -top-[370px] flex justify-center items-center z-[2]">
            <Image
              src="/Kenshin.png"
              alt="pfp"
              width={450}
              height={300}
              priority
            />
          </div>

          <div className="flex justify-end relative -left-[160px] -top-[710px]">
            <div className="flex flex-col items-start gap-[30px] relative -top-[50px] -left-[100px]">
              <button className="flex items-center gap-[10px] w-[140px] border border-black rounded-full px-6 py-[0.9rem] bg-white cursor-pointer text-[12px]">
                <GithubLogoIcon size={24} />
                Github
              </button>
              <button className="flex items-center gap-[10px] w-[140px] border border-black rounded-full px-6 py-[0.9rem] bg-white cursor-pointer text-[12px]">
                <InstagramLogoIcon size={24} />
                Instagram
              </button>
              <button className="flex items-center gap-[10px] w-[140px] border border-black rounded-full px-6 py-[0.9rem] bg-white cursor-pointer text-[12px]">
                <LinkedinLogoIcon size={24} />
                LinkedIn
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
