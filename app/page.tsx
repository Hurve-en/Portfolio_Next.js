"use client";
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
      <header className="nav">
        <p className="btnLink2">Available for New Project</p>
        <div className="links">
          <a href="/work">Work</a>
          <a href="/service">Service</a>
          <a href="/experince">Experience</a>
          <a href="/contact">Contact</a>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            width: "50",
            position: "relative",
            border: "1px solid black",
            borderRadius: "999px",
            padding: "0.5rem 1rem",
            background: "white",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          <span style={{ marginLeft: 10 }}>Lets Talk</span>{" "}
          <ArrowUpRightIcon size={15} />
        </button>
      </header>

      <main>
        <section>
          <h1 className="textHero">Hurve-en</h1>

          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              position: "relative",
              right: "-200px",
              bottom: "-90px",
            }}
          >
            Full-Stack Developer
          </h2>
          <p
            style={{ position: "relative", right: "-200px", bottom: "-105px" }}
          >
            Developing meaningful apps <br />
            that help people on a daily basis.
          </p>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              width: "230px",
              position: "relative",
              right: "-200px",
              bottom: "-130px",
              border: "1px solid black",
              borderRadius: "999px",
              padding: "0.5rem 0.9rem",
              background: "white",
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            <span style={{ marginLeft: 20 }}>Let&apos;s Collaborate</span>
            <ArrowUpRightIcon size={20} />
          </button>

          <div className="imageContainer">
            <Image
              src="/Kenshin.png"
              alt="pfp"
              width={450}
              height={300}
              priority
            />
          </div>

          <div className="btnParent">
            <div className="buttons">
              <button className="btnLink1">
                <GithubLogoIcon size={24} />
                Github
              </button>
              <button className="btnLink1">
                <InstagramLogoIcon size={24} />
                Instagram
              </button>
              <button className="btnLink1">
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
