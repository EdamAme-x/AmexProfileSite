import tools from "~/components/state/tool.ts";

export default function Works() {
  return (
    <div>
      <div className="w-screen">
        <h2 className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
          <img src="/icons/box.svg" alt="tools-svg" width="40" />
          Tools
        </h2>
        {tools.map((tool, index) => {
          return (
            <>
              <div
                class="p-8 space-y-4 flex justify-center"
                onClick={() => {
                  location.href = tool.url;
                }}
              >
                <div class="flex w-96 shadow-lg rounded-lg hover:scale-105 transition ease-in-out duration-300">
                  <div
                    class={
                      "bg-" +
                      tool.color +
                      " py-4 px-6 rounded-l-lg flex items-center"
                    }
                  >
                    <img
                      src="/icons/box.svg"
                      alt="tools-svg"
                      width="40"
                      className="filter invert"
                    />
                  </div>
                  <div class="px-4 py-3 bg-white rounded-r-lg flex justify-between flex-col w-full border border-l-transparent border-gray-200">
                    <div className="font-bold text-2xl">{tool.title}</div>
                    <div>{tool.desc}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
