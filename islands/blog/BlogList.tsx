import blogs from "~/components/state/blog.ts";

export default function BlogList() {
  return (
    <>
      <div className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
        <img src="/icons/book.svg" alt="book-icon" width="40" />
        Blog
      </div>

      <div className="w-screen h-auto flex flex-wrap justify-center">
        {blogs
          .map((blog, idx) => {
            if (idx == 0) {
              return <></>;
            }
            return (
              <>
                <div className="w-auto h-auto p-2 m-5 bg-gray-200 rounded-[10px] shadow-xl font-alk hover:bg-gray-300 transition duration-300">
                  <a
                    href={"/posts/" + idx + ""}
                    className="w-[320px] h-auto bg"
                  >
                    <div className="w-[320px] h-auto p-2 text-center text-2xl font-bold">
                      {blog.title}
                    </div>
                    <div className="w-[320px] text-center h-auto p-2">
                      Date : {blog.date}
                    </div>
                    <div className="w-[320px] text-center h-auto p-2 flex flex-wrap justify-center">
                      {blog.tag.map((tag) => {
                        return <div className="mx-1">{tag}</div>;
                      })}
                    </div>
                    <div className="w-[320px] h-auto flex align-center p-2">
                      {blog.desc}
                    </div>
                  </a>
                </div>
              </>
            );
          })
          .reverse()}
      </div>
    </>
  );
}
