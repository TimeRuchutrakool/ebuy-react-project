import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="flex cursor-pointer" onClick={() => navigate("/")}>
      <p className="text-6xl text-[#DF2727]">e</p>
      <p className="text-6xl text-[#0064D2]">b</p>
      <p className="text-6xl text-[#F5AF02]">u</p>
      <p className="text-6xl text-[#86B817]">y</p>
    </div>
  );
}

export default Logo;
