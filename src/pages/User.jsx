import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";

export default function User() {
  const [click, setClick] = useState("marketplace");
  const [products] = useState([
    { id: 1, imageUrl: 111, price: 111, name: "test", des: "รายระเอียด" },
    { id: 2, imageUrl: 111, price: 222, name: "test2", des: "รายระเอียด บลาๆ" },
  ]);
  return (
    <div className="flex">
      <div className="  h-screen w-3/12 flex justify-center  ">
        <div className="border border-gray-300 flex flex-col shadow-md my-24 items-center h-[20rem] relative w-full md:h-fulllg:h-80 xl:h-64 ">
          <div className="h-10 flex justify-center absolute top-[-2.5rem] ">
            <img
              src="https://media.discordapp.net/attachments/1169121185053818954/1169273113473732718/gintoki_icon.jpeg?ex=6554cd72&is=65425872&hm=df872f430bbe5c701a5d3efbcf3efe1209b4c0a074957ae49eddd890b59f0375&=&width=1170&height=1170"
              alt=""
              className="w-[80px] h-[80px] rounded-full"
            />
          </div>
          <div className=" flex flex-col items-center w-full h-fit mt-16 ">
            <div>Gojo satoru</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>
            <div className="text-gray-300">หมายเลข xxxxxxxxx</div>

            <hr />
          </div>
        </div>
      </div>
      <div className=" w-full  ">
        <div className="mt-24 flex flex-row justify-center shadow-md bg-white">
          <button
            onClick={() => setClick("marketplace")}
            className="border border-gray-200 w-full p-4 flex justify-center hover:bg-gray-300  items-center gap-2 hover:text-white text-green-900 cursor-pointer "
          >
            <BiSolidStore className="text-xl " />
            <h1 className="">Market</h1>
          </button>
          <button
            onClick={() => setClick("bidproduct")}
            className="border border-gray-200 w-full p-4 flex justify-center hover:bg-gray-300 items-center gap-2 hover:text-white text-green-900 cursor-pointer"
          >
            <BiDollarCircle className="text-xl " />
            <h1 className="">Bid product</h1>
          </button>
        </div>
        <div className="pt-4">
          {/* <div className="grid grid-cols-4 place-items-center"> */}
          {/* const [click, setClick] = useState("marketplace"); */}
          {/* {1 === 1 ? "no" : "yes"} */}
          {click === "marketplace" ? (
            <div className="grid grid-cols-4 place-items-center">
              {products.map((el) => (
                <SellerCardProduct
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  imageUrl={el.imageUrl}
                  des={el.des}
                />
              ))}

              {/* <SellerCardProduct /> */}
            </div>
          ) : (
            ""
          )}
          {click === "bidproduct" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 place-items-center">
              <CardBidProduct />
              <CardBidProduct />
              <CardBidProduct />
              <CardBidProduct />
              <CardBidProduct />
              <CardBidProduct />
              <CardBidProduct />
            </div>
          ) : (
            ""
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
