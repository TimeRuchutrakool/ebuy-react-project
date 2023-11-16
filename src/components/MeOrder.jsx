import { useSearchParams } from "react-router-dom";
import useModal from "../hooks/useModal";
import { useDispatch } from "react-redux";

export default function MeOrder({
  id,
  imageUrl,
  among,
  name,
  trackNum,
  logisticsName,
  price,
  sellerFirstName,
  sellerLastName,
}) {
  const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [input,setInput]=useState({
  //   id : id,
  //   status:"SUCCESS"
  // })
  let logistic = "";
  if (!logisticsName && !trackNum) {
    logistic = "รอการจัดส่งจากผู้ขาย";
  }
  const dispatch = useDispatch();

  // const handdleConfirmReceipt = async () => {
  //   console.log("click")
  //   setInput({...input})
  //   dispatch(confirmReceipted(input))

  // };

  return (
    <>
      <div className=" shadow flex flex-col p-5 " key={id}>
        <div className="flex flex-col gap-4">
          <div>
            <p>หมายเลขออเดอร์ {id}</p>
          </div>
          <div className=" flex gap-16 items-center px-5">
            <img className=" w-32 h-32 object-cover" src={imageUrl} alt="" />
            <div className="flex flex-col gap-3">
              <div>
                seller : {sellerFirstName} {sellerLastName}
              </div>
              <p>ชื่อสินค้า : {name}</p>
              <p>จำนวน : {among}</p>
              <p>ราคา : {price}</p>
              <p>ผู้ให้บริการจัดส่ง : {logistic || logisticsName}</p>
              <p>หมายเลขพัสดุ : {logistic || trackNum} </p>
            </div>
          </div>
          <div className=" flex gap-x-[36px] items-center">
            <p className="text-red-600">กรุณายืนยันเมื่อได้รับสินค้า</p>
            <button
              className=" p-4 rounded-md hover:bg-green-700 bg-[#1E4C2F] py-1.5 px-6  text-white"
              onClick={() => {
                searchParams.set("orderId", id);
                setSearchParams(searchParams);
                modal({ type: "confirmReceipt" });
              }}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
