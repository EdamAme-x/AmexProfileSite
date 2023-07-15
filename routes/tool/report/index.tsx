import Layout from "Layout";
import Report from "~/islands/client/report.tsx"

export default function report() {
  return (
    <>
      <Layout>
        <div className="mt-10 mb-5 w-screen h-auto bg-gray-200 rounded p-5">
          <div className="w-full h-auto mx-auto">
            <h2 className="w-full pt-10 flex justify-center text-3xl font-extrabold text-gray-700 font-retro select-none whitespace-nowrap">
              OC-ReportLink
            </h2>

            <div>
                <Report />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
