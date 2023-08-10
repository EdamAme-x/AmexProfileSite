import Header from "~/components/Header.tsx";
import Footer from "~/components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Layout(props: any) {
  return (
    <>
      <Head
        prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#"
        lang="ja"
      >
        <title>Ame'x Door</title>
        <meta name="description" content="Ame'x Door / Profile Site" />
        <meta name="google-site-verification" content="ecaqPuUOXzHhc_098hQOPRl3JXJ9CIKQ4ompf0mRKYc" />

        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta http-equiv="Content-Language" content="ja" />
        <meta name="msapplication-config" content="none" />
        <meta name="yandex" content="notranslate" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta property="og:locale" content="ja_JP" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ame'x Door" />
        <meta property="og:title" content="Ame'x Door" />
        <meta property="og:description" content="Ame'x Door / Profile Site" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gradient-to-b from-white to-gray-800 overflow-x-hidden">
        <Header className="bg-gray-100 relative z-[10] w-[95%] mx-auto h-auto rounded-md shadow-md hover:shadow-lg transition duration-300 flex" />
        {props.children}
        <Footer className="bg-gray-700 relative z-[10] text-white w-[95%] mx-auto h-[50px] rounded-md shadow-md hover:shadow-lg transition duration-300 flex" />
      </div>
      <style>
        {`
              body {
                overflow-x: hidden;
                line-height: 1.5;
              }
              
              ::-webkit-scrollbar {
                width: 10px;
                height: 8px;
              }

              ::-webkit-scrollbar-track {
                background-color: #f1f1f1;
                border-radius: 8px;
              }
              
              ::-webkit-scrollbar-thumb {
                background-color: #888;
                border-radius: 8px;
              }
              
              ::-webkit-scrollbar-thumb:hover {
                background-color: #aaa;
              }
              
              ::-webkit-scrollbar-corner {
                background-color: #333;
                border-radius: 8px;
                opacity: 0.8;
              }
              
              ::-webkit-scrollbar-resizer {
                background-color: #333;
                border-radius: 8px;
                opacity: 0.8;
              }

              .font-alk {
                font-family: 'Alkatra', cursive;
              }
            `}
      </style>
    </>
  );
}
