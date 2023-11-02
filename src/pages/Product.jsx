import { DetailOperation } from "../features/product/DetailOperation";
import { ProductPreview } from "../features/product/ProductPreview";

const mockProduct = {
  id: 1,
  name: "Spy x USA Tshirt",
  price: 590,
  avgRating: 4.8,
  seller: "SabaideeShop",
  sellerImage: "https://www.clothhouse.com/cdn/shop/files/Studio-cloth-house_1620x630.jpg?v=1638967599",
  description:
    "G502 X LIGHTSPEED is the latest addition to legendary G502 lineage. Featuring ourfirst-ever LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 68% faster response rate.",
  productVariants: [
    { color: "red", size: "XL", stock: 3 },
    { color: "green", size: "M", stock: 2 },
    { color: "green", size: "L", stock: 1 },
  ],
  images: [
    {
      id: 1,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-22100-zcsgns09h8ivd1",
    },
    {
      id: 2,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-22100-l5yf8s09h8iv60",
    },
    {
      id: 3,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-22100-0ieo8s09h8iv5a",
    },
    {
      id: 4,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-22100-nrnlbp09h8iv56",
    },
    {
      id: 5,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-22100-21yhrt09h8iv0d",
    },
  ],
};

function Product() {
  const product = mockProduct;
  return (
    <div className="mx-20 flex flex-col gap-10">
      <ProductPreview product={product} />
      <DetailOperation product={product} />
    </div>
  );
}

export default Product;
