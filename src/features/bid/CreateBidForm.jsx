import React from "react";
import { useState, useEffect } from "react";
import axios from "../../config/axios";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs'
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

function CreateBidForm() {

  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();

  /////////////////////////// preview image ///////////////////////////
  const [images, setImages] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImagesURLs(newImageUrls);
  }, [images]);
  
  if (isLoading) {
    return <Loading />;
  }

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };


///////////////////////////////////////////////////////////////////////
/////////////////////////// handle error by useForm() /////////////////////////////
  /////////////////////////////////////////////////////////////////////
  
  const handleOnSubmit = async (obj) => {
    try {
      console.log(obj)
      setIsLoading(true)
      const formData = new FormData();
      formData.append("startedAt",dayjs(obj.startedAt).format("YYYY-MM-DD HH:mm"))
      formData.append("name",obj.name)
      formData.append("duration",obj.duration)
      formData.append("description",obj.description)
      formData.append("price",obj.price)
      images.forEach((image)=>{
        formData.append("image",image)
      })

      await axios.post("/bid/create",formData)
      navigate("/user")   
    } catch (error) {
      console.error("Error submitting form:", error);
    }finally{
      setIsLoading(false)
    }
  };


  return (
    <form
      className="grid grid-cols-3 gap-5 px-40 py-10"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <label className="col-span-1">
        ชื่อสินค้าที่ต้องการประมูล <span className="text-red-500">*</span>
      </label>

      <input
        {...register("name", { required: "กรุณากรอกชื่อสินค้า" })}
        type="text"
        className="border rounded-md border-[#B8B8B8] p-1 col-span-2"
        placeholder="ระบุชื่อ"
       
      />
     
      {errors?.name?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.name?.message}
          </p>
        </>
      )}

      <label className="col-span-1">
        รายละเอียด <span className="text-red-500">*</span>
      </label>
      <textarea
      {...register("description",{required:"กรุณากรอกรายละเอียดของสินค้า"})}
      className="border rounded-md border-[#B8B8B8] p-1 col-span-2  min-h-[100px]"
      
      />
        
      {errors?.description?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.description?.message}
          </p>
        </>
      )}

      <label className="col-span-1">
        รูปภาพสินค้าสำหรับประมูล <span className="text-red-500">*</span>
      </label>
      <input
      {...register("picture",{required:"กรุณาเลือกรูปภาพอย่างน้อย 1 รูป"})}
        type="file"
        multiple
        accept="image/*"
        className="col-span-2"
        onChange={onImageChange}
      />
      {imagesURLs.length ? (
        <div className="col-span-3 overflow-x-scroll scrollbar">
          <div className="flex w-[200px] h-[200px] gap-2  ">
            {imagesURLs.map((imageSrc, idx) => (
              <img key={idx} src={imageSrc} alt="preview image" />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
         {errors?.picture?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.picture?.message}
          </p>
        </>
      )}

      <label className="col-span-1">
        ราคาประมูลเริ่มต้น <span className="text-red-500">*</span>
      </label>
      <input
      {...register("price",{required :"กรุณาใส่ราคา"})}
        type="number"
        className="border rounded-md border-[#B8B8B8] p-1 col-span-2"
        placeholder="ระบุราคา"
        
      />
       {errors?.price?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.price?.message}
          </p>
        </>
      )}


      <label className="col-span-1">
        ระยะเวลาในการประมูล <span className="text-red-500">*</span>
      </label>
      <select className="border rounded-md border-[#B8B8B8] p-1 col-span-2"
      {...register("duration",{required:"กรุณาระบุเวลาในการประมูล"})}
         >

        <option value="">กรุณาระบุเวลา</option>
        <option value="0.5">30 นาที</option>
        <option value="1">1 ชั่วโมง</option>
        <option value="3">3 ชั่วโมง</option>
        <option value="5">5 ชั่วโมง</option>
        <option value="7">7 ชั่วโมง</option>
        </select>
        {errors?.duration?.message && (
          
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.duration?.message}
          </p>
        </>
      )}
    
  
     

      <label className="col-span-1">
        วันที่ต้องการประมูล <span className="text-red-500">*</span>
      </label>
      <input
        {...register("startedAt",{required:"กรุณาเลือกวันที่"})}
        type="datetime-local"
        className="border rounded-md border-[#B8B8B8] p-1 col-span-2"     
      />
          {errors?.startedAt?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-2">
            {errors?.startedAt?.message}
          </p>
        </>
      )}

      <div className="col-span-3 text-sm">
        กรุณาใส่เบอร์โทรที่คุณใช้สมัครสมาชิก เพื่อความปลอดภัยในการใช้งาน
        หากพบปัญหา สามารถติดต่อฝ่ายบริการลูกค้า
      </div>

      <button className="bg-[#1E4C2F] py-3 text-white">บันทึก</button>
    </form>
  );
}

export default CreateBidForm;
