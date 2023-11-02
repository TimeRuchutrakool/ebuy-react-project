import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateProductForm() {
  const { register, handleSubmit } = useForm();
  const [inputFrom, setInputForm] = useState();
  return (
    <form
      className="grid grid-cols-4 gap-5 px-40 py-10 "
      onSubmit={handleSubmit((data) => {
        setInputForm(data);
      })}
    >
      <label htmlFor="" className="">
        ประเภท <span className="text-red-500">*</span>
      </label>
      <select
        {...register("category")}
        className="col-span-3 border border-[#B8B8B8]"
      >
        <option value="">ระบุบราคาสินค้า</option>
        <option value="1">เสื้อผ้า</option>
        <option value="2">รองเท้า</option>
        <option value="3">กางเกง</option>
      </select>

      <label htmlFor="">
        ตัวเลือก และ จำนวน <span className="text-red-500">*</span>
      </label>

      <button className="   border border-[#B8B8B8]">+</button>
      <div className="col-span-2"></div>
      <div></div>
      <select {...register("Size")} className=" border border-[#B8B8B8]">
        <option value="">ไซส์</option>
        <option value="1">XS</option>
        <option value="2">S</option>
        <option value="3">M</option>
        <option value="3">L</option>
        <option value="3">XL</option>
        <option value="3">XXL</option>
        <option value="3">3XL</option>
        <option value="3">4XL</option>
        <option value="3">5XL</option>
      </select>
      <select {...register("Size")} className=" border border-[#B8B8B8]">
        <option value="">สี...</option>
        <option value="1">แดง</option>
        <option value="2">น้ำเงิน</option>
        <option value="3">เขียว</option>
        <option value="4">เหลือง</option>
      </select>
      <input
        {...register("amount")}
        className=" border border-[#B8B8B8] p-1 "
        placeholder="จำนวน"
      />

      <label htmlFor="">
        แบรนด์ <span className="text-red-500 ">*</span>
      </label>
      <select
        {...register("Size")}
        className=" border border-[#B8B8B8] col-span-3"
      >
        <option value="">แบรนด์</option>
        <option value="1">Nike</option>
        <option value="2">Gucci</option>
        <option value="3">Zara</option>
        <option value="4">H&M</option>
      </select>

      <label htmlFor="">
        ชื่อสินค้า <span className="text-red-500">*</span>
      </label>
      <input
        {...register("amount")}
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ชื่อสินค้า"
      />

      <label htmlFor="">
        รูปภาพสินค้า <span className="text-red-500">*</span>
      </label>
      <input
        {...register("amount")}
        type="file"
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ชื่อสินค้า"
      />

      <label htmlFor="">
        รายละเอียดสินค้า <span className="text-red-500">*</span>
      </label>
      <textarea
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ข้อมูลเพิ่มเติม เช่น สภาพสินค้า"
      />
      <div></div>
      <div className="col-span-3 text-sm">
        กรุณาใส่เบอร์โทรที่คุณใช้สมัครสมาชิก เพื่อความปลอดภัยในการใช้งาน
        หากพบปัญหา สามารถติดต่อฝ่ายบริการลูกค้า
      </div>
      <div>{inputFrom}</div>
      <button className="bg-[#1E4C2F] py-3 text-white">บันทึก</button>
    </form>
  );
}
