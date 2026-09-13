import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusjakartasans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

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
        <button className="btnLink2">Lets Talk</button>
      </header>

      <main>
        <section>
          <h1 className="textHero">Hurve-en</h1>

          <div className="textSub">
            <h2 className="h2">Full-Stack Developer</h2>
            <p>
              Developing meaningful apps <br />
              that help people on a daily basis.
            </p>
            <button className="btnLink2">Let&apos;s Collaborate</button>
          </div>

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
              <button className="btnLink1">Github</button>
              <button className="btnLink1">Instagram</button>
              <button className="btnLink1">LinkedIn</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
