
interface Work {
    title: string;
    desc: string;
    url: string;
    color?: string;
}

let workState: Work[] = [
    {
        title: "Ame'x Door",
        desc: "Portfolioとして、PReact × Twind (Deno Fresh)で開発した物です。",
        url: "/",
        color: "blue-500"
    },
    {
        title: "Liberluna",
        desc: "所属するLiberlunaの公式サイトです。UI / UXを担当",
        url: "https://liberluna.github.io",
        color: "red-500"
    },
    {
        title: "LiberAD",
        desc: "学生間のサイトで広告を共有できるサービスです。全て私による制作です。404Pageにも使用されています。",
        url: "https://liberad.deno.dev",
        color: "green-500"
    }
]

export default workState;