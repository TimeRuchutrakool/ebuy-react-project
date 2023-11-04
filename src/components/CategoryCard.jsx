function CategoryCard({ category, onClick }) {
  return (
    <div
      className="border rounded-md border-[#E4E9EE] p-7 flex flex-col justify-around items-center gap-1 cursor-pointer"
      onClick={onClick}
    >
      <img src={category.image} alt="category" className="w-10" />
      <p>{category.name}</p>
    </div>
  );
}

export default CategoryCard;
