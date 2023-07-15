import Layout from "Layout";

export default function _404() {
  return (
    <>
      <Layout>
        <div className="w-screen mt-10">
          <div className="w-screen h-[50px] relative shadow-md">
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
            <h4 className="text-gray-800 text-3xl w-screen flex justify-center font-bold mt-[10px]">
              Sorry.... 404 Not Found
            </h4>
            <h5 className="text-gray-800 mt-3 text-xl w-screen flex justify-center">
                AD
            </h5>
            <div className="w-screen flex justify-center">
              <div
                id="liberad"
                data-version="1.00"
                data-token="net133476"
                className="bg-gray-200 mt-2"
              ></div>{" "}
              <style>
                {
                    `
                    .lad-svg {
                        filter: invert(100%);
                    }
                    `
                }
              </style>
            </div>
            <script src="https://liberad.deno.dev/api/LiberAD"></script>
          </div>
        </div>
      </Layout>
    </>
  );
}
