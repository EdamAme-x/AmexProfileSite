import Layout from "Layout";
import Skills from "~/islands/Skills.tsx";
import Links from "~/islands/Links.tsx";

import { useEffect } from "preact/hooks";
import Particle from "~/components/WebGL.tsx";

export default function index() {
  return (
    <Layout>
      <Index />
    </Layout>
  );
}

function Index() {
  return (
    <div className="relative">
      <Particle />
      <div className="w-screen mt-10 relative z-1">
        <div className="w-screen h-[50px] relative shadow-md z-[10]" style={{pointerEvents: "none"}}>
          <img
            src="/icon.jpg"
            alt="icon"
            className="w-[100px] rounded-full border-[3px] border-white bg-white mx-auto shadow-md"
          />
        </div>

        <div className="w-screen h-auto pb-10 bg-gray-200">
          <h2 className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
            Ame.x
          </h2>

          <h3>
            <a
              href="https://twitter.com/macl2189"
              className="text-gray-500 text-[15px] w-screen flex justify-center font-bold mt-[-5px]"
            >
              @macl2189
            </a>
          </h3>

          <h4 className="text-gray-800 text-[14px] w-screen flex justify-center font-bold mt-[-1px] whitespace-nowrap flex-nowrap">
            <img
              src="/icons/code.svg"
              alt="code"
              width="18"
              className="mx-1 mt-[1.8px]"
            />
            Web Developer /{" "}
            <img
              src="/icons/bug.svg"
              alt="bug"
              width="18"
              className="mx-1 mt-[1.75px]"
            />
            Bug Reporter /{" "}
            <img
              src="/link/org.svg"
              alt="moon"
              width="18"
              className="mx-1 mt-[1.75px]"
            />
            <a href="https://github.com/Liberluna" className="underline">
              {" "}
              @Liberluna
            </a>
          </h4>

          <div className="text-gray-800 text-[14px] w-screen flex justify-center font-bold mt-[5px]">
            脆弱性調査やフロントエンド・UI/UX を主に担当
          </div>

          <div>
            <Skills />
          </div>

          <div>
            <Links />
          </div>

        </div>
      </div>
    </div>
  );
}
