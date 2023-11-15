import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import {
  getSellerProduct as getSellerProductAPI,
  getSellerBidProduct as getSellerBidProductAPI,
} from "../services/apiProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BidProductCard from "../features/bid/BidProductCard";

function SellerSite() {
  const [seller, setSeller] = useState({});
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className=" flex p-10 gap-5">
      <div className="w-3/12 border relative h-40">
        <img
          src={seller.imageUrl}
          alt="profile-image"
          className="absolute w-28 h-28 object-cover rounded-full left-1/2 -translate-x-1/2 -top-5"
        />
        <div className="absolute bottom-5 w-full text-center">
          {seller.name}
        </div>
      </div>
      <div className="w-9/12">
        <div className="border flex justify-around">
          <div
            className={`cursor-pointer w-1/2 text-center p-2 ${
              !menuToggle && "bg-green-600 text-white"
            }`}
            onClick={() => setMenuToggle(false)}
          >
            มาร์เก๊ตเพลส
          </div>
          <div
            className={`cursor-pointer w-1/2 text-center p-2 ${
              menuToggle && "bg-green-600 text-white"
            }`}
            onClick={() => setMenuToggle(true)}
          >
            สินค้าประมูล
          </div>
        </div>
        {!menuToggle ? (
          <SellerProducts setSeller={setSeller} />
        ) : (
          <SellerBidProducts />
        )}
      </div>
    </div>
  );
}

export default SellerSite;

function SellerProducts({ setSeller }) {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getSellerProduct() {
      try {
        const data = await getSellerProductAPI(userId);
        setSeller(data.seller);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getSellerProduct();
  }, [userId, setSeller]);
  if (products.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>ยังไม่มีสินค้าที่หน้าร้านผู้ขาย</p>
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full shadow-md rounded-md flex flex-col items-center p-4 gap-3"
          onClick={() => navigate(`../product/${product.id}`)}
        >
          <img
            src={product.imageUrl}
            alt="product-image"
            className="aspect-square object-cover"
          />
          <p className="self-start font-light">{product.name}</p>
          <div className="w-full flex justify-between">
            <span className="flex items-center gap-1">
              <AiFillStar className="text-[#FFA439]" />
              <p className="font-light">{product.avgRating}</p>
            </span>
            <span className="text-green-700">฿ {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SellerBidProducts() {
  const { userId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getSellerProduct() {
      try {
        const data = await getSellerBidProductAPI(userId);
        setProducts(data.bidProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getSellerProduct();
  }, [userId]);

  if (products.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>ไม่มีสินค้ากำลังจะประมูลในขณะนี้</p>
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {products.map((product) => (
        <BidProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
