import { useDispatch } from "react-redux";



export default function CardBidProduct({name,image,startAt,price,description}) {

  const dispatch = useDispatch()

  const handleOnClick = ()=>{
    dispatch()
  }

  return (
    <>
   
      <div className="bg-white w-56 h-[340px] m-2 shadow-lg overflow-hidden rounded-md ">
      <div className="w-[224px] h-[224px] relative ">
        <div className="absolute bg-white w-full p-1 grid-cols-2 grid text-center">
          {/* <div className="text-green-900">เวลาคงเหลือ</div>
          <div className="text-red-600">10:33:13</div> */}
        </div>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="p-3">
          <div className="flex justify-between">
            <h1>{name}</h1>
            <h1 className="text-green-600">฿{price}</h1>
          </div>
          <p>{description}</p>
        </div>
        <div className="flex justify-evenly p-3 gap-2 h-full ">
        
          <button className="bg-red-600 text-white w-full rounded-md"
          onClick={handleOnClick}          >
            ลบ
          </button>
        </div>
      </div>
    </div>
    
   </>
  );
}
