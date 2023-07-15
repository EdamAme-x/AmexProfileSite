import blogs from "~/components/state/blog.ts";
import Layout from "Layout";

export default function Blog(props) {
  return (
    <>
      <Layout>
        <div className="w-screen mt-10">
          <div className="w-screen h-auto pb-10 bg-gray-200">
            <p className="w-full pt-2 flex justify-center text-xl font-extrabold text-gray-700 font-alk select-none whitespace-nowrap">
              Blog #{props.page}
            </p>
            <h2 className="w-full pt-5 flex justify-center text-2xl font-extrabold text-gray-700 font-alk select-none whitespace-nowrap">
              {blogs[props.page].title}
            </h2>
            <p className="w-full pt-2 flex justify-center text-xl font-extrabold text-gray-700 font-alk select-none whitespace-nowrap">
              Date : {blogs[props.page].date}
            </p>
            <div className="w-full pt-2 flex justify-center text-xl font-extrabold text-gray-700 font-alk select-none whitespace-nowrap">
              {blogs[props.page].tag.map((tag) => (
                <div className="mx-1">{tag} </div>
              ))}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: blogs[props.page].content }}
            ></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
