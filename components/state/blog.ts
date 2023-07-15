

let blog = [
    {
        title: "記事が見つかりませんでした。", //タイトル
        desc: "404", //説明文
        content: "404 記事が見つかりませんでした。",
        date: "XXXX/XX/XX",
        tag: ["404"] //テスト機能 検索用
    }, //404用　これは表示しない。
    {
        title: "新たにプロフィールサイト作成", //タイトル
        desc: "新たにサイトを開設しました(ここ)、以前はVanillaで書いていましたが...", //説明文
        content: `<div class="w-screen flex flex-wrap justify-center h-auto text-lg bg-gray-200" style="padding: 30px 0">>
        <div style="margin: 0 auto;" class="text-in">
        <style>
            .text-in p {
                padding: 5px 0;
            }
        </style>
        <p>新たにサイトを開設しました。(ここ)</p>
        <p>以前はVanillaで書いていましたが、PReactに移行。(near React) 今回はTailwindCSS(Twind)を使っています。</p>
        <p>サーバーサイドにはDeno Freshを採用。 まだまだ出来たばかりのフレームワークですが、ある程度洗練されてます。</p>
        <p>デプロイにはDeno Deployを採用、簡単に公開できるので助かります。</p>
        <p>ブログもPReactなら一日で構築できます。</p>
        <p>書きかけ・・・</p>
        <p></p>
        </div>
      </div>`,
        date: "2023/06/28",
        tag: ["Web","React","Deno","Fresh","TailwindCSS"] //テスト機能 検索用
    }
]

export default blog;