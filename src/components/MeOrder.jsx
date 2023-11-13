
import { useSearchParams } from 'react-router-dom';
import useModal from '../hooks/useModal';
import { useDispatch } from 'react-redux';
import { confirmReceipted } from '../store/slices/orderSlice';
import { useState } from 'react';


export default function MeOrder({id,imageUrl,among,name,trackNum,logisticsName,price,sellerFirstName,sellerLastName}) {
  const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [input,setInput]=useState({
  //   id : id,
  //   status:"SUCCESS"
  // })
  let logistic = ""
  if(!logisticsName && !trackNum) {
    logistic = "รอการจัดส่งจากผู้ขาย"
  }
  const dispatch = useDispatch();

  // const handdleConfirmReceipt = async () => {
  //   console.log("click")
  //   setInput({...input})
  //   dispatch(confirmReceipted(input))
    
  // };

    return (
    <>
  <div className=" border-2 shadow flex flex-col p-5 " key={id}>
<div className='flex flex-col gap-4'>
    <div>
        <p>หมายเลขออเดอร์ {id}</p>
    </div>
    <div className=' flex gap-5 items-center'>
        <img className=' w-32 h-32' src={imageUrl} alt="" />
        <div>
          <div>
            seller : {sellerFirstName} {sellerLastName}
          </div>
          <p>ชื่อสินค้า : {name}</p>
        <p>จำนวน : {among}</p>
        <p>ราคา : {price}</p>
        <p>ผู้ให้บริการจัดส่ง : {logistic || logisticsName }</p>
        <p>หมายเลขพัสดุ : {logistic || trackNum }  </p>
        <p>{logistic}</p>
        </div>
    </div>
    <div className=' flex justify-between items-center'>
    <p>กรุณายืนยันเมื่อได้รับสินค้า</p>
    <button className=' border-2 p-4 rounded-sm hover:bg-gray-200' 
    onClick={() => {
      searchParams.set("orderId", id);
      setSearchParams(searchParams);
      modal({ type: "confirmReceipt" });
    }}>ยืนยัน</button>
    </div>
</div>
  </div>
  
    </>
  )
}
