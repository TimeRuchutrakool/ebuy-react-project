import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import Heading from "./Heading";
import { IoShirtSharp } from "react-icons/io5";
import { PiPantsFill } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { GiAmpleDress } from "react-icons/gi";

function CategoryListCard() {
  const navigate = useNavigate();
  const iconCategory = [
    { icon: <PiPantsFill className="" />, name: "Pants" },
    { icon: <IoShirtSharp />, name: "Shirt" },
    { icon: <GiConverseShoe />, name: "shoes" },
    { icon: <HiShoppingBag />, name: "Bag" },
    { icon: <GiAmpleDress />, name: "dress" },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Heading big={true}>Shop By Category</Heading>
      <div className="flex justify-between gap-8">
        {iconCategory.map((category, index) => (
          <CategoryCard
            category={category}
            key={index}
            onClick={() => {
              navigate(`/search/${category.name}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryListCard;
