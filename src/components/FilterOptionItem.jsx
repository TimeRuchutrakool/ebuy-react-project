import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function FilterOptionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl  ">{title}</div>
          <div>
            <FiChevronUp
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`${
                isOpen ? "rotate-180 duration-200" : "duration-100"
              }`}
            />
          </div>
        </div>
        {isOpen ? children : ""}
      </div>
      <div className="flex justify-center">
        <hr className="w-5/6 bg-[#E4E9EE]  " />
      </div>
    </div>
  );
}
