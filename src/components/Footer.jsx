import Logo from "./Logo";

function Footer() {
  return (
    <div
      className="w-full bg-[#F7F7F7] py-5 px-7 gap-5 flex flex-col mt-7"
      style={{ height: "18vh" }}
    >
      <Logo />
      <div className="flex justify-between font-extralight text-m">
        <span>COPYRIGHT © Ebuy CO., LTD. ALL RIGHTS RESERVED.</span>
        <span>Terms of use</span>
      </div>
    </div>
  );
}

export default Footer;
