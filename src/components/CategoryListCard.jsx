import { useNavigate } from "react-router-dom";
import { mockCategory } from "../mock/category";
import CategoryCard from "./CategoryCard";
import Heading from "./Heading";

function CategoryListCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Heading big={true}>Shop By Category</Heading>
      <div className="flex justify-between gap-8">
        {mockCategory.map((category, index) => (
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
