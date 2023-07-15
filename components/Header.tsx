export default function Header(props: any) {
  return (
    <header className={props.className}>
      <h1
        className="text-xl mt-2 md:mt-0 md:text-3xl p-1 mx-4 font-extrabold text-gray-700 font-retro select-none whitespace-nowrap"
        style={{ textShadow: "0px 0px 15px #efefef", wordWrap: "unset" }}
      >
        <a href="/">Ame'x Door</a>
      </h1>

      <div className="flex justify-end items-center w-[100%] flex-wrap">
        <a href="/" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-300">
          <img
            src="/icons/profile.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
        <a href="/works" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-150">
          <img
            src="/icons/works.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
        <a href="/tools" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-150">
          <img
            src="/icons/box.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
        <a href="/blog" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-150">
          <img
            src="/icons/net.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
        <a href="/contact" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-150">
          <img
            src="/icons/mail.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
        <a href="/info" className="w-[40px] h-[40px] m-[5px] newm-box bg-gray-200 hover:bg-gray-300 filter hover:invert-90 transition duration-150">
          <img
            src="/icons/info.svg"
            alt="profile"
            className="w-[25px] h-[25px] m-[7.5px]"
          />
        </a>
      </div>

      <style>
        {`
            @font-face {
                font-family: 'Retron';
                src: url('Retron-Black.otf') format('opentype');
            }              

            .font-retro {
                font-family: 'Retron';
            }

            .newm-box {
                border-radius: 10px;
                box-shadow:  -20px 20px 160px #bebebe, 20px -20px 160px #ffffff;
            }
        `}
      </style>
    </header>
  );
}
