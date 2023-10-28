import { useNavigate } from "react-router-dom";

const logoText = [
  { text: "e", color: "#DF2727" },
  { text: "b", color: "#0064D2" },
  { text: "u", color: "#F5AF02" },
  { text: "y", color: "#86B817" },
];
function Logo() {
  const navigate = useNavigate();
  return (
    <div className="flex cursor-pointer" onClick={() => navigate("/")}>
      {logoText.map((text, index) => (
        <p
          key={index}
          className={`text-6xl text-[${text.color}]`}
        >
          {text.text}
        </p>
      ))}
    </div>
  );
}

export default Logo;
