import { useEffect } from "react";
import { DetailOperation } from "../features/product/DetailOperation";
import { ProductPreview } from "../features/product/ProductPreview";
import { useState } from "react";

const mockProduct = {
  id: 1,
  name: "Spy x USA Tshirt",
  price: 590,
  avgRating: 4.8,
  seller: "SabaideeShop",
  sellerImage:
    "https://www.clothhouse.com/cdn/shop/files/Studio-cloth-house_1620x630.jpg?v=1638967599",
  description:
    "G502 X LIGHTSPEED is the latest addition to legendary G502 lineage. Featuring ourfirst-ever LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 68% faster response rate.",
  productVariants: [
    {
      color: { id: 1, name: "red" },
      shirtSize: { id: 3, name: "XL" },
      stock: 3,
    },
    {
      color: { id: 2, name: "green" },
      shirtSize: { id: 2, name: "L" },
      stock: 2,
    },
    {
      color: { id: 1, name: "red" },
      shirtSize: { id: 1, name: "M" },
      stock: 1,
    },
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

function removeDuplicates(duplicate) {
  const flag = {};
  const unique = [];
  duplicate.forEach((elem) => {
    if (!flag[elem.id]) {
      flag[elem.id] = true;
      unique.push(elem);
    }
  });
  return unique;
}

function Product() {
  const product = mockProduct;
  const [options, setOptions] = useState({});
  const sizeName = Object.keys(product.productVariants[0]).find((v) =>
    v.includes("Size")
  );

  useEffect(() => {
    let colors = new Set();
    let sizes = new Set();
    for (const variant of product.productVariants) {
      colors.add(variant.color);
      sizes.add(variant[`${sizeName}`]);
    }
    colors = removeDuplicates(colors);
    sizes = removeDuplicates(sizes);
    setOptions(() => {
      return { colors, sizes };
    });
  }, [product.productVariants, sizeName]);

  return (
    <div className="mx-20 flex flex-col gap-10">
      <ProductPreview product={product} options={options} />
      <DetailOperation product={product} />
    </div>
  );
}

export default Product;
