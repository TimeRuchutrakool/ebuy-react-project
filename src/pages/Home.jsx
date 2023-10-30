import CategoryListCard from "../components/CategoryListCard";
import ImageBanner from "../components/ImageBanner";
import PopularProductList from "../components/PopularProductList";
import RandomProductBanner from "../features/product/RandomProductBanner";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col gap-20">
      <ImageBanner />
      <CategoryListCard />
      <PopularProductList />
      <RandomProductBanner />
    </div>
  );
}
