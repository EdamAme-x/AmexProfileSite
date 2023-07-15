interface Links {
    name: string;
    url: string;
    icon: string;
    color?: string;
}

let links: Links[] = [
    {
        name: "GitHub",
        url: "https://github.com/edamame-x",
        icon: "/link/github.svg",
        color: "gray-800"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/macl2189",
        icon: "/link/twitter.svg",
        color: "[#00acee]"
    },
    {
        name: "OC",
        url: "https://openchat.xyz",
        icon: "/link/openchat.svg",
        color: "green-500"
    },
    {
        name: "Youtube",
        url: "https://www.youtube.com/@Liberluna-hacker",
        icon: "/link/youtube.svg",
        color: "red-500"
    },
    {
        name: "Discord",
        url: "https://discord.gg/5kcpVqvj",
        icon: "/link/discord.svg",
        color: "blue-500"
    },
    {
        name: "Org",
        url: "https://github.com/Liberluna",
        icon: "/link/org.svg",
        color: "purple-500"
    }
]

for (let i = 0; i < links.length; i++) {
    if (links[i].color == undefined) {
        links[i].color = "black";
    }
}

export default links;