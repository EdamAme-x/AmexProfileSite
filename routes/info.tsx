import Layout from "Layout";

export default function info() {
  return (
    <>
      <Layout>
        <div className="w-screen h-auto pb-10 mt-10 bg-gray-200">
          <div className="w-screen h-auto">
            <div className="w-screen h-auto flex justify-center text-3xl font-extrabold text-gray-700 font-retro mb-10 mt-5">
              <img
                src="/icons/info.svg"
                alt="tool"
                width="30"
                className="mx-1"
              />
              Info
            </div>

            <div>
                <h2 className="w-screen text-center font-bold">Build 2023 6/29</h2>
                <h3 className="w-screen text-center">&copy; 2023 amex | @macl2189 All </h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
