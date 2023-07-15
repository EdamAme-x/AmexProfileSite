import Skill from "~/components/state/skill.ts";

export default function Skills() {
  return (
    <>
      <div className="w-screen mt-10 flex justify-center text-3xl font-extrabold text-gray-800 font-retro select-none whitespace-nowrap">
        <img src="/icons/tools.svg" alt="tool" width="30" className="mx-1" />
        Skills
      </div>
      <div className="mx-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {Skill.map((skill) => {
          return (
            <div className="w-full border border-gray-800 rounded-[10px] h-[100px] flex shadow-md bg-gray-100 hover:bg-white transition ease-in-out duration-300 hover:scale-105">
              <img
                src={skill.icon}
                alt="skill-icons"
                width="80"
                height="80"
                className="mr-2 rounded-[50px] h-[80px] m-[10px]"
                onClick={() => {
                  
                }}
              />
              <div className="flex flex-col w-full">
                <h5 className="text-gray-800 text-3xl p-2 font-bold mb-3 mt-1 font-alk pl-5">
                  {skill.name}
                </h5>
                <div className="bg-gray-300 w-[90%] mx-[10px] h-4 rounded-full">
                  <div
                    className={
                      skill.color + " opacity-80 h-full w-[" +
                      20 * skill.status +
                      "%] rounded-full"
                    }
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
