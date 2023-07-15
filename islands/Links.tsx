import { useRef } from "preact/hooks";
import LinkState from "~/components/state/link.ts";

export default function Links() {
  const ImageRefs = useRef([]);

  for (let i = 0; i < LinkState.length; i++) {
    ImageRefs.current[i] = useRef(true);
  }

  return (
    <div className="w-screen mt-10">
      <div className="w-screen h-auto flex justify-center text-3xl font-extrabold text-gray-700 font-retro mb-10 mt-1">
        <img src="/icons/links.svg" alt="tool" width="30" className="mx-1" />
        Links
      </div>
      <div className="mx-[15px] w-full h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {LinkState.map((link, idx) => (
          <div
            className={`w-[90%] h-[50px] border-[2px] border-black rounded-[10px] bg-gray-100 shadow-md flex hover:bg-white transition ease-in-out duration-300 hover:scale-105 hover:border-${link.color} hover:bg-${link.color} hover:text-white`}
            onClick={() => {
              window.location.href = link.url;
            }}
            onMouseOver={() => {
              ImageRefs.current[idx].current.style.filter = "invert(100%)";
            }}

            onMouseOut={() => {
              ImageRefs.current[idx].current.style.filter = "invert(0%)";
            }}
          >
            <img
              src={link.icon}
              alt="link-icon"
              width="30"
              height="30"
              className="m-[10px] w-[30px] h-[30px]"
              ref={ImageRefs.current[idx]}
            />
            <h5 className="m-[10px] text-2xl font-bold font-alk w-1/2 text-center">
              {link.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
