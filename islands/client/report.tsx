import { useState, useRef } from "preact/hooks";

export default function report() {
  const [link, setLink] = useState<string>("");
  const linkRef = useRef<HTMLInputElement>(null);

  const [linker, setLinker] = useState<string>("");

  function convert() {
    if (link.replace("ti/g2", "") == link) {
      alert(
        "不正なURLの可能性が有ります。オープンチャットのURLのみを記述して下さい。"
      );
    } else {
      // convert
      let hash: string | string[] = link.split("/");
      hash = hash[hash.length - 1];
      const linkers =
        "line://square/report?ticket=" +
        hash.replace(
          "?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
          ""
        ) +
        "&by=amex-@macl2189";
      setLinker(linkers);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-center">そのOCのリンク</h3>
        <input
          className="w-1/2 px-3 py-2 rounded-md border border-gray-300 mb-4"
          type="text"
          placeholder="https://line.me/ti/g2/{hash}"
          value={link}
          onChange={() => {
            setLink(linkRef.current!.value);
          }}
          ref={linkRef}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={convert}
        >
          変換
        </button>
        <input
          className="w-1/2 mt-5 px-3 py-2 rounded-md border border-gray-300"
          type="text"
          value={linker}
        />

        <h4 className="text-center font-extrablod mt-2 mb-[16vh]">
          Support:{" "}
          <a className="underline" href="https://twitter.com/macl2189">
            @macl2189
          </a>
        </h4>
      </div>
    </>
  );
}
