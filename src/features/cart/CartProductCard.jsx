
import { RiDeleteBin6Line} from 'react-icons/ri'
export default function CartProductCard() {
  return (
    <div className=" p-2 w-[610px] h-[210px] border-2 flex flex-col gap-2 rounded-sm">
            <p> Seller : seller user</p>
            <div className=' flex gap-4'>
            <div className=" h-40 bg-black flex w-96" > 
                <img src="https://down-th.img.susercontent.com/file/04dcbdf1849656514bb2d5c4651278b7" alt="" />
            </div>
            <div className=' flex flex-col'>

            <div className=' flex justify-between gap-4 items-start'>
                <p>เสื้อวง bodyslam ผ้าconton100% กฟหกฟหกฟหกหฟกหฟกฟหกฟหกฟหกฟหกฟหกasdasdsadasdasdsadsadsadasdsadasdasdaasd size : xl</p>
                <RiDeleteBin6Line className=' h-10 w-10 cursor-pointer'/>
            </div>
                <p>price : 1000</p>
            </div>
            </div>
    </div>
  )
}
