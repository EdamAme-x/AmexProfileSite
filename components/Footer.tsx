export default function Footer(props: any) {
  return (
    <footer className={props.className ? props.className : ""}>
      <div className="p-3 font-mono font-bold">
        &copy; 2023 amex /{" "}
        <a className="underline" href="https://twitter.com/macl2189">
          @macl2189
        </a>
      </div>

      <a
        href="/contact"
        className="w-[40px] h-[40px] m-[5px] ml-5 newm-box bg-gray-800 hover:bg-gray-700 transition duration-150"
      >
        <img
          src="/icons/mail.svg"
          alt="profile"
          className="w-[25px] h-[25px] m-[7.5px] filter invert"
        />
      </a>
    </footer>
  );
}
