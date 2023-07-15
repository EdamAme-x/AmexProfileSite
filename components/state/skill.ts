interface Skill {
    name: string; //HTML&CSS etc ...
    status: number; //1~5
    icon: string; //icon path => /icons/skill/~
    color?: string; //taliwind progress bar bg
}

let skill: Skill[] = [
    {
        name: "HTML",
        status: 4.5,
        icon: "/skill/html.svg",
        color: "bg-red-500"
    },
    {
        name: "CSS",
        status: 4.5,
        icon: "/skill/css.svg",
        color: "bg-blue-500"
    },
    {
        name: "JavaScript",
        status: 5,
        icon: "/skill/javascript.svg",
        color: "bg-yellow-500"
    },
    {
        name: "TypeScript",
        status: 4.25,
        icon: "/skill/typescript.svg",
        color: "bg-[#007ACC]"
    },
    {
        name: "PHP",
        status: 3.15,
        icon: "/skill/php.svg",
        color: "bg-[#6280B6]"
    },
    {
        name: "C#",
        status: 3,
        icon: "/skill/csharp.svg",
        color: "bg-purple-800"
    },
    {
        name: "Python",
        status: 4.75,
        icon: "/skill/python.svg",
        color: "bg-green-600"
    },
    {
        name: "NodeJS",
        status: 2,
        icon: "/skill/nodejs.svg",
        color: "bg-green-400"
    },
    {
        name: "Deno",
        status: 3,
        icon: "/skill/deno.svg",
        color: "bg-black"
    },
    {
        name: "VScode",
        status: 4,
        icon: "/skill/vscode.svg",
        color: "bg-blue-600"
    },
    {
        name: "Visual Studio",
        status: 2.25,
        icon: "/skill/vstudio.svg",
        color: "bg-purple-600"
    },
    {
        name: "React",
        status: 3.75,
        icon: "/skill/react.svg",
        color: "bg-blue-400"
    },
    {
        name: "PReact",
        status: 3.5,
        icon: "/skill/preact.svg",
        color: "bg-[#673AB8]"
    },
    {
        name: "Vue",
        status: 1.35,
        icon: "/skill/vue.svg",
        color: "bg-green-400"
    },  
    {
        name: "Angular",
        status: 1.5,
        icon: "/skill/angular.svg",
        color: "bg-red-700"
    },
    {
        name: "Bash",
        status: 2,
        icon: "/skill/cmd.svg",
        color: "bg-black"
    },
    {
        name: "Git&GitHub",
        status: 3.25,
        icon: "/skill/git.svg",
        color: "bg-black"
    },
    {
        name: "R",
        status: 1.25,
        icon: "/skill/r.svg",
        color: "bg-gray-500"
    },
    {
        name: "CTF",
        status: 1.75,
        icon: "/skill/ctf.svg",
        color: "bg-gray-900"
    },
    {
        name: "Blender",
        status: 1.75,
        icon: "/skill/blender.svg",
        color: "bg-[#f97316]"
    },
    {
        name: "etc..",
        status: 0,
        icon: "/skill/etc.svg",
        color: "bg-black"
    },
    {
        name: "Fresh",
        status: 4.45,
        icon: "/favicon.ico",
        color: "bg-yellow-300"
    },
    {
        name: "Astro",
        status: 1.5,
        icon: "/skill/astro.svg",
        color: "bg-[#FF5D01]"
    },
    {
        name: "TailwindCSS",
        status: 4,
        icon: "/skill/tailwind.svg",
        color: "bg-[#44A8B3]"
    },
    {
        name: "Svelte",
        status: 2,
        icon: "/skill/svelte.svg",
        color: "bg-[#FF3E00]"
    },
    {
        name: "WebGL",
        status: 1.95,
        icon: "/skill/webgl.svg",
        color: "bg-[#010101]"
    },
    {
        name: "C/C++",
        status: 1.05,
        icon: "/skill/cpp.svg",
        color: "bg-[#659AD2]"
    },
    {
        name: "CRX",
        status: 3.55,
        icon: "/skill/crx.svg",
        color: "bg-[#020202] opacity-50"
    },
    {
        name: "Vue-fw",
        status: 2.25,
        icon: "/skill/vuepress.svg",
        color: "bg-[#4ABF8A]"
    },
    {
        name: "jQuery",
        status: 3,
        icon: "/skill/jquery.svg",
        color: "bg-blue-500"
    }
]

for (let i = 0; i < skill.length; i++) {
    if (!skill[i].color) {
        skill[i].color = "bg-black"
    }

    if (skill[i].status > 5) {
        skill[i].status = 5
    }else if (skill[i].status < 0) {
        skill[i].status = 0
    }
}

//sort from status value
skill.sort((a, b) => {
    return a.status - b.status
})

skill = skill.reverse()

export default skill;