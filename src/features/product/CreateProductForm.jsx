import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import axios from "../../config/axios";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CreateProductForm() {
  const [categoryData, setCategoryData] = useState({
    category: [],
    color: [],
    pantsSize: [],
    shirtSize: [],
    shoeSize: [],
    brand: [],
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [onChangeCategory, setOnChangeCategory] = useState("");
  const { register, handleSubmit } = useForm();
  const [sizeAndStock, setSizeAndStock] = useState([
    {
      id: v4(),
      colorId: null,
      stock: null,
    },
  ]);

  const onChangeSizeForm = ({ index, key, value }) => {
    const sizeAndStockClone = sizeAndStock;
    sizeAndStockClone[index][key] = value;
    setSizeAndStock(sizeAndStockClone);
  };

  let nameSize = "";
  let cloneArraySize = [];
  if (onChangeCategory === "1") {
    nameSize = "shirtSizeId";
    cloneArraySize = categoryData?.shirtSize;
  } else if (onChangeCategory === "2") {
    nameSize = "shoeSizeId";
    cloneArraySize = categoryData?.shoeSize;
  } else if (onChangeCategory === "3") {
    nameSize = "pantsSizeId";
    cloneArraySize = categoryData?.pantsSize;
  }

  useEffect(() => {
    axios.get("/product/variant").then((res) => {
      setCategoryData(res?.data?.productVariant);
    });
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <form
      className="grid grid-cols-4 gap-5 px-40 py-10 "
      onSubmit={handleSubmit(async (data) => {
        const images = [];
        for (let i = 0; i < data?.image.length; i++) {
          images.push(data.image[i]);
        }

        const formData = new FormData();

        images.forEach((image) => {
          formData.append("image", image);
        });

        formData.append("typeId", data.typeId);
        formData.append("sizeAndStock", JSON.stringify(sizeAndStock));
        formData.append("brandId", data.brandId);
        formData.append("categoryId", data.categoryId);
        formData.append("description", data.description);
        formData.append("name", data.name);
        formData.append("price", data.price);

        try {
          setIsLoading(true);
          await axios.post("/product", formData);
          navigate("/user");
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      })}
    >
      <div></div>
      {
        <select
          {...register("typeId")}
          className="col-span-3 border border-[#B8B8B8]"
        >
          <option value="">ประเภท</option>
          <option value="1">มือหนึ่ง</option>
          <option value="2">มือสอง</option>
        </select>
      }

      <label htmlFor="" className="">
        ประเภท <span className="text-red-500">*</span>
      </label>
      <select
        {...register("categoryId")}
        className="col-span-3 border border-[#B8B8B8]"
        onChange={(e) => {
          setOnChangeCategory(e.target.value);
        }}
      >
        <option value="">ระบุบราคาสินค้า</option>
        {categoryData?.category?.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name === "shirts"
              ? "เสื้อผ้า"
              : el.name === "shoes"
              ? "รองเท้า"
              : el.name === "pants"
              ? "กางเกง"
              : el.name}
          </option>
        ))}
      </select>

      <label htmlFor="">
        ตัวเลือก และ จำนวน <span className="text-red-500">*</span>
      </label>

      <div
        className=" cursor-pointer flex justify-center items-center bg-green-200 w-10 rounded-md "
        onClick={() =>
          setSizeAndStock([
            ...sizeAndStock,
            { id: v4(), colorId: null, stock: null },
          ])
        }
      >
        <FiPlusCircle />
      </div>
      <div className="col-span-2"></div>
      {/* product variants */}

      {sizeAndStock.map((pv, idx) => (
        <div className="col-span-4 grid grid-cols-8 gap-2" key={idx}>
          <div className="col-span-2"></div>
          <select
            className=" border border-[#B8B8B8]"
            onChange={(event) =>
              onChangeSizeForm({
                index: idx,
                key: nameSize,
                value: event.target.value,
              })
            }
            value={sizeAndStock.shirtSizeId}
          >
            <option value="">ไซส์</option>
            {cloneArraySize &&
              cloneArraySize.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.name}
                </option>
              ))}
          </select>

          <select
            className=" border border-[#B8B8B8]"
            onChange={(event) =>
              onChangeSizeForm({
                index: idx,
                key: "colorId",
                value: event.target.value,
              })
            }
            value={sizeAndStock.colorId}
          >
            <option value="">สี</option>
            {categoryData.color.map((color) => (
              <option key={color.id} value={color.id}>
                {color.name}
              </option>
            ))}
          </select>
          <input
            onChange={(event) =>
              onChangeSizeForm({
                index: idx,
                key: "stock",
                value: event.target.value,
              })
            }
            value={sizeAndStock.stock}
            className=" border border-[#B8B8B8] p-1 "
            placeholder="จำนวน"
          />
          <div
            className=" cursor-pointer flex justify-center items-center bg-red-200 rounded-md w-10 "
            onClick={() => {
              const newObj = sizeAndStock.filter((el) => el.id !== pv.id);
              setSizeAndStock([...newObj]);
            }}
          >
            <FiTrash2 />
          </div>
        </div>
      ))}

      {/* /////////////////////////////////// */}
      <label htmlFor="">
        แบรนด์ <span className="text-red-500 ">*</span>
      </label>
      <select
        {...register("brandId")}
        className=" border border-[#B8B8B8] col-span-3"
      >
        <option value="">แบรนด์</option>
        {categoryData.brand.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <label htmlFor="">
        ชื่อสินค้า <span className="text-red-500">*</span>
      </label>
      <input
        {...register("name")}
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ชื่อสินค้า"
      />

      <label htmlFor="">
        รูปภาพสินค้า <span className="text-red-500">*</span>
      </label>

      <input
        {...register("image")}
        type="file"
        multiple
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ชื่อสินค้า"
        // onChange={handleImageChange}
      />

      <label htmlFor="">
        รายละเอียดสินค้า <span className="text-red-500">*</span>
      </label>
      <textarea
        {...register("description")}
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ข้อมูลเพิ่มเติม เช่น สภาพสินค้า"
      />
      <label htmlFor="">
        ราคา <span className="text-red-500">*</span>
      </label>
      <input
        {...register("price", {
          minLength: {
            value: 1,
            message: "error message",
          },
        })}
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ระบุบราคาสินค้า"
      />
      <div></div>
      <div className="col-span-3 text-sm">
        กรุณาใส่เบอร์โทรที่คุณใช้สมัครสมาชิก เพื่อความปลอดภัยในการใช้งาน
        หากพบปัญหา สามารถติดต่อฝ่ายบริการลูกค้า
      </div>

      <button className="bg-[#1E4C2F] py-3 text-white">บันทึก</button>
    </form>
  );
}
