import WorkState from "~/components/state/work.ts";

export default function Works() {
  return (
    <div>
      <div className="w-screen">
        <h2 className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
          <img
            src="/icons/works.svg"
            alt="works-icon"
            width="40"
          />
          Works
        </h2>
        {WorkState.map((work, index) => {
          return (
            <>
              <div
                class="p-8 space-y-4 flex justify-center"
                onClick={() => {
                  location.href = work.url;
                }}
              >
                <div class="flex w-96 shadow-lg rounded-lg hover:scale-105 transition ease-in-out duration-300">
                  <div
                    class={
                      "bg-" +
                      work.color +
                      " py-4 px-6 rounded-l-lg flex items-center"
                    }
                  >
                    <img
                      src="/icons/works.svg"
                      alt="works-icon"
                      width="40"
                      className="filter invert"
                    />
                  </div>
                  <div class="px-4 py-3 bg-white rounded-r-lg flex justify-between flex-col w-full border border-l-transparent border-gray-200">
                    <div className="font-bold text-2xl">{work.title}</div>
                    <div>{work.desc}</div>
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
