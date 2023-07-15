import Layout from "Layout";

export default function index() {
  return (
    <>
      <Layout>
        <div className="mt-10 mb-5 w-screen h-auto bg-gray-200 rounded p-5">
          <div className="w-full h-auto mx-auto">
            <h2 className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
              <ruby>
                分散 型 田代 砲<rt>Decentralized Tashiro Shot</rt>
              </ruby>
            </h2>
            <div className="w-full h-auto pb-10 bg-gray-200 text-center">
              <h3 className="text-xl font-bold">Target</h3>
              <br />
              <input
                type="text"
                id="target"
                className="w-1/2 px-5 rounded"
                placeholder="https://goooooogle.com"
              />
              <br />
              <h3 className="text-xl font-bold">Power</h3>
              <input
                type="text"
                id="power"
                className="w-1/2 px-5 rounded"
                placeholder="1 ~ 10 ( Stable : 5 )"
              />
              <br />
              <button
                type="button"
                className="w-2/5 bg-white font-bold px-5 rounded border border-white mt-5"
                id="gen"
              >
                Generate
              </button>

              <br />

              <div>
                <h3 className="text-xl font-bold mt-5">URL</h3> <br />
                <div id="result">
                  <a href="/">Null</a>
                  <br />
                </div>
                <button
                  id="copy"
                  type="button"
                  className="w-auto bg-white font-bold px-5 rounded-lg border border-white mt-5"
                >
                  Copy
                </button>
                <p className="mt-5">
                  詳細は
                  <a href="/tools" className="underline">
                    こちら
                  </a>
                  を参照、あくまでテストツールです。
                </p>
              </div>
            </div>
          </div>

          <script
            dangerouslySetInnerHTML={ {__html: `document.getElementById("gen").addEventListener("click", () => {
          const target = document.getElementById("target").value;
          let power = document.getElementById("power").value;

          if (power > 10 || power < 1 || typeof power !== "number") {
            power = 5
          }else if(power == 10) {
            power = 9;
          }

          const hash = power + btoa(target);

          document.getElementById("result").innerHTML = '<a href="/tool/tashiro/atk/' + hash + '">https://amex.deno.dev/tool/tashiro/atk/' + hash + '</a>';
        })` }}
          ></script>
        </div>
      </Layout>
    </>
  );
}
