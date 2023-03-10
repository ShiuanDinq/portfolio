import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="parallax">
          <div id="group1" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">Pure CSS Parallax</div>
            </div>
          </div>

          <div id="group2" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                This parallax example is achieved using only CSS.
              </div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              <div className="title">No JavaScript Required!</div>
            </div>
          </div>

          <div id="group3" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title">After Layer.</div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">You Can Have Layer...</div>
            </div>
          </div>

          <div id="group4" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">Still More.</div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              <div className="title">And More.</div>
            </div>
            <div className="parallax__layer parallax__layer--deep">
              <div className="title">More Layers.</div>
            </div>
          </div>

          <div id="group5" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title">Edmund Hang</div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              {/* <div className="title">Scrolling at Different Speeds</div> */}
            </div>
          </div>

          <div id="group6" className="parallax__group">
            <div className="parallax__layer parallax__layer--back">
              <div className="title">
                To Achieve a Complete Parallax Effect.
              </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">Using ONLY CSS!</div>
            </div>
          </div>

          <div id="group7" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">Hope You Enjoyed It!</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
