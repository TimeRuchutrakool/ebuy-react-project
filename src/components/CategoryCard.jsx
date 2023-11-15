function CategoryCard({ category, onClick }) {
  return (
    <div
      className="border rounded-md border-[#E4E9EE] p-7 flex flex-col justify-around items-center gap-1 cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      {/* <img src={category.image} alt="category" className="w-10" /> */}
      <span className="text-4xl text-green-900 ">{category.icon}</span>
      <p>{category.name}</p>
    </div>
  );
}

export default CategoryCard;
