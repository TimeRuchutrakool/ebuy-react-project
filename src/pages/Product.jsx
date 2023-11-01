const product = {
  id: 1,
  name: "Spy x USA Tshirt",
  price: 590,
  avgRating: 4.8,
  description:
    "G502 X LIGHTSPEED is the latest addition to legendary G502 lineage. Featuring ourfirst-ever LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 68% faster response rate.",
  productVariants: {
    colors: ["Black", "Red", "Blue", "Green"],
    sizes: ["M", "L", "XL", "XXL"],
  },
  images: [
    {
      id: 1,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-7qvf8-lk5b1vteu4bv2d",
    },
    {
      id: 2,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-7qve2-lkeqnaq7zxh860",
    },
    {
      id: 3,
      imageUrl:
        "https://down-th.img.susercontent.com/file/sg-11134201-7qvdh-lk5b1sdxtehj69",
    },
  ],
};

function Product() {
  return (
    <div>
      <ProductPreview />
      <DetailOperation />
    </div>
  );
}

export default Product;

function ProductPreview() {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full bg-red-400" style={{ height: "300px" }}></div>
      <div className="w-full bg-blue-500" style={{ height: "300px" }}></div>
    </div>
  );
}

function DetailOperation() {
  return <div></div>;
}
