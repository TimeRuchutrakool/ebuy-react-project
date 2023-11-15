import { useState } from "react";
import CreateProductForm from "../features/product/CreateProductForm";
import CreateBidForrn from "../features/bid/CreateBidForm";
import Loading from "../components/Loading";

export default function CreateProduct() {
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) return <Loading />;
  return (
    <div className="flex justify-center mt-20">
      <div className=" w-2/3 min-h-[63vh]">
        <div className="flex gap-2 ">
          <div
            className={
              isClick
                ? `w-1/2 h-10 flex justify-center items-center text-[#1E4C2F]
           bg-gray-100  hover:bg-[#1E4C2F] hover:text-white  cursor-pointer `
                : `w-1/2 h-10 flex justify-center items-center bg-[#1E4C2F] text-white `
            }
            onClick={() => {
              setIsClick(false);
            }}
          >
            สินค้าปกติ
          </div>
          <div
            className={
              isClick
                ? `w-1/2 h-10 flex justify-center items-center bg-[#1E4C2F] text-white `
                : `w-1/2 h-10 flex justify-center text-[#1E4C2F]
           items-center bg-gray-100  hover:bg-[#1E4C2F] hover:text-white cursor-pointer `
            }
            onClick={() => setIsClick(true)}
          >
            สินค้าประมูล
          </div>
        </div>
        {isClick ? (
          <CreateBidForrn setIsLoading={setIsLoading} />
        ) : (
          <div>
            <CreateProductForm setIsLoading={setIsLoading} />
          </div>
        )}
      </div>
    </div>
  );
}
