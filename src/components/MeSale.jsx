import { useState } from 'react'
import { confirmTracking } from '../store/slices/saleSlice';
import { useDispatch } from 'react-redux';

export default function MeSale({id,among,name,trackNum,logisticsName,imageUrl}) {
    // const [logistic,setLogistic]=useState([])
    const dispatch = useDispatch();
    const [input,setInput]=useState({
        trackNum :"",
        id :id
    })
    const handleChangLogistic = async(event)=>{
        setInput({...input,[event.target.name]: event.target.value})
    }
    const handleSubmitForm = async ()=>{
        dispatch(confirmTracking(input))
    }
    return (
    <>
    <div className=" border-2 shadow flex flex-col p-4 " key={id}>
    <div className='flex flex-col gap-2'>
    <div>
        <p>หมายเลขออเดอร์ {id}</p>
    </div>
    <div className=' flex gap-5  items-center'>
        <img className=' w-32 h-32' src={imageUrl} alt="" />
        <div>
          
        <p>จำนวน : {among}</p>
        <p>ชื่อสินค้า : {name}</p>
        <div className=' flex gap-2'>
        <p>tracking : </p>
        <input
        className=' ring-1 ring-slate-600' 
        type="text" 
        name='trackNum'
        value={input.trackNum}
        onChange={handleChangLogistic}
        />
        </div>
        <div className=' flex items-center gap-4 justify-between'>
        <div className=' flex gap-4'>
            <p>logistic : </p>
          <select name="logisticsName" id="" onChange={handleChangLogistic} className=' ring-1 ring-slate-500'> 
          <option value="">กรุณาเลือก</option>
          <option value="THAIPOST">THAIPOST</option>
          <option value="KERRY">KERRY</option>
          <option value="FLASH">FLASH</option>
          <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>
        <button className=' bg-green-400 p-2' onClick={handleSubmitForm}>ยืนยัน</button>
        </div>
        </div>
    </div>
</div>
  </div>
    </>
  )
}
