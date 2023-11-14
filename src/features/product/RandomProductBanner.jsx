import { useEffect } from "react";
import { useState } from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

function RandomProductBanner() {
  const [randomProduct, setRandomProduct] = useState({});

  useEffect(() => {
    const run = async () => {
      await axios.get("/product/random").then((res) => {
        setRandomProduct(res.data.randomProduct);
      });
    };
    run();
  }, []);

  return (
    <Link to={`/product/${randomProduct.id}`}>
    <div className="flex justify-center">
      <div className="w-9/12 flex justify-center">
        <img
          src={randomProduct.image}
          alt=""
          className="w-48 h-64 border border-none rounded-lg p-5"
        />
        <div className="w-8/12 flex flex-col justify-center gap-4">
          <p className="text-light">{randomProduct.name}</p>
          <p className="text-light text-sm text-[#818B9C]">
            {randomProduct.description}
          </p>
          <div className="flex gap-5">
            {/* <Link to={`/product/${randomProduct.id}`}> */}
            <button className="bg-[#1E4C2F] text-[#ffffff] px-5 py-1 rounded-lg">
              Buy {randomProduct.price}
            </button>
            {/* </Link> */}
            {/* <Link to={`/product/${randomProduct.id}`}> */}
            <button className="border border-[#1E4C2F] rounded-lg text-[#1E4C2F] px-5 py-1">
              View Detail
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default RandomProductBanner;
