
interface tool {
    title: string;
    desc: string;
    url: string;
    color?: string;
}

let toolState: tool[] = [
    {
        title: "分散型田代砲",
        desc: "田代砲を打てるリンクを作成し、そこにアクセスするだけで予め設定した対象、間隔etcで打てます。 コミュニティの仲間とも共有しやすく、参加が容易くなります。",
        url: "/tool/tashiro/",
        color: "blue-500"
    },
    {
        title: "OC 通報リンク作成",
        desc: "LINE OpenChatのリンクを入力するだけでそのオープンチャットの通報リンクを作成可能です。",
        url: "/tool/report/",
        color: "green-500"
    },
]

toolState = toolState.reverse();

export default toolState;