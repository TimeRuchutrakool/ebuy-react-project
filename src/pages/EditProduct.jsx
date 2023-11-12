import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import axios from "../config/axios";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const [productObj, setProductObj] = useState({});

  const { productId } = useParams();

  const [categoryData, setCategoryData] = useState({
    category: [],
    color: [],
    pantsSize: [],
    shirtSize: [],
    shoeSize: [],
    brand: [],
  });

  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const fileEl = useRef();
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [onChangeCategory, setOnChangeCategory] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ defaultValues: null });

  const [sizeAndStock, setSizeAndStock] = useState([]);

  const onChangeSizeForm = ({ index, key, value }) => {
    const sizeAndStockClone = sizeAndStock;
    sizeAndStockClone[index][key] = value;
    setSizeAndStock(sizeAndStockClone);
  };

  let nameSize = "";
  let cloneArraySize = [];
  if (onChangeCategory.categoryId == "1") {
    nameSize = "shirtSizeId";
    cloneArraySize = categoryData?.shirtSize;
  } else if (onChangeCategory.categoryId == "2") {
    nameSize = "shoeSizeId";
    cloneArraySize = categoryData?.shoeSize;
  } else if (onChangeCategory?.categoryId == "3") {
    nameSize = "pantsSizeId";
    cloneArraySize = categoryData.pantsSize;
  }

  useEffect(() => {
    axios.get(`/user/editProductById/${productId}`).then((res) => {
      setProductObj(() => res.data.product);
      console.log(res.data.product);
      reset(
        res.data.product
        // { name: res.data.product.name },
        // { description: res.data.product.description },
        // { price: res.data.product.price }
      );
      setOnChangeCategory({
        // ...onChangeCategory,
        typeId: res.data.product.typeId,
        categoryId: res.data.product.categoryId,
        brandId: res.data.product.brandId,
      });
      setSizeAndStock([...sizeAndStock, ...res.data.product.productVariants]);
    });
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
        console.log("data on submit", data);
        const images = [];
        for (let i = 0; i < data?.image.length; i++) {
          images.push(data.image[i]);
        }

        const formData = new FormData();

        images.forEach((image) => {
          formData.append("image", image);
        });

        formData.append("productId", productObj?.id);
        formData.append("typeId", data.typeId);
        formData.append("sizeAndStock", JSON.stringify(sizeAndStock));
        formData.append("brandId", data.brandId);
        formData.append("categoryId", data.categoryId);
        formData.append("description", data.description);
        formData.append("name", data.name);
        formData.append("price", data.price);

        try {
          setIsLoading(true);
          await axios.post("/product/editProduct", formData);
          navigate("/user");
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      })}
    >
      <div></div>

      <select
        {...register("typeId", {
          required: "กรุณาเลือกสภาพสินค้า",
        })}
        className="col-span-3 border border-[#B8B8B8]"
        // value={onChangeCategory.typeId}
        // onChange={(e) =>
        //   setOnChangeCategory({ ...onChangeCategory, typeId: e.target.value })
        // }
      >
        <option value="">สภาพสินค้า</option>
        <option value="1">สินค้ามือหนึ่ง</option>
        <option value="2">สินค้ามือสอง</option>
      </select>
      {errors?.typeId?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.typeId?.message}
          </p>
        </>
      )}

      <label htmlFor="1" className="">
        ประเภท <span className="text-red-500">*</span>
      </label>
      <select
        id="1"
        {...register("categoryId", {
          required: "กรุณาเลือกประเภทสินค้า",
        })}
        className="col-span-3 border border-[#B8B8B8]"
        // onChange={(e) => {
        //   setOnChangeCategory({
        //     ...onChangeCategory,
        //     categoryId: e.target.value,
        //   });
        // }}
        // value={onChangeCategory.categoryId}
      >
        <option value="">ประเภทสินค้า</option>
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
      {errors?.categoryId?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.categoryId?.message}
          </p>
        </>
      )}
      <label>
        ตัวเลือก และ จำนวน <span className="text-red-500">*</span>
      </label>

      <div
        className=" cursor-pointer flex justify-center items-center bg-green-200 w-10 rounded-md "
        onClick={() => {
          setSizeAndStock([
            ...sizeAndStock,
            { id: v4(), colorId: null, stock: null },
          ]);
        }}
      >
        <FiPlusCircle />
      </div>

      <div className="col-span-2"></div>
      {/* product variants */}
      {sizeAndStock?.map((pv, idx) => (
        <div className="col-span-4 grid grid-cols-8 gap-2" key={idx}>
          <div className="col-span-2"></div>
          <select
            className=" border border-[#B8B8B8]"
            // onChange={(event) =>
            //   onChangeSizeForm({
            //     index: idx,
            //     key: nameSize,
            //     value: event.target.value,
            //   })
            // }
            // value={sizeAndStock[idx][nameSize]}
            // required
          >
            <option value="">ไซส์</option>
            {cloneArraySize &&
              cloneArraySize?.map((size) => (
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
            value={sizeAndStock[idx].colorId}
            // required
          >
            <option value="">สี</option>
            {categoryData.color?.map((color) => (
              <option key={color.id} value={color.id}>
                {color.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            onChange={(event) =>
              onChangeSizeForm({
                index: idx,
                key: "stock",
                value: event.target.value,
              })
            }
            value={sizeAndStock[idx].stock}
            className=" border border-[#B8B8B8] p-1 custom-number-input "
            placeholder="จำนวน"
            // required
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
      <label htmlFor="2">
        แบรนด์ <span className="text-red-500 ">*</span>
      </label>
      <select
        id="2"
        {...register("brandId", {
          required: "กรุณาเลีอกแบรนด์",
        })}
        className=" border border-[#B8B8B8] col-span-3"
        // onChange={(e) =>
        //   setOnChangeCategory({ ...onChangeCategory, brandId: e.target.value })
        // }
        // value={onChangeCategory.brandId}
      >
        <option value="">แบรนด์</option>
        {categoryData.brand?.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      {errors?.name?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.name?.message}
          </p>
        </>
      )}
      <label htmlFor="3">
        ชื่อสินค้า <span className="text-red-500">*</span>
      </label>
      <input
        id="3"
        {...register("name", {
          required: "กรุณาระบุบชื่อสินค้า",
        })}
        // defaultValue={productObj?.name}
        className=" border border-[#B8B8B8] p-1 col-span-3  "
        placeholder="ชื่อสินค้า"
      />
      {errors?.name?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.name?.message}
          </p>
        </>
      )}
      <label>
        รูปภาพสินค้า <span className="text-red-500">*</span>
      </label>
      {/* incon image */}
      <div
        className="col-span-3  w-[50px] cursor-pointer "
        onClick={() => {
          fileEl.current.click();
        }}
      >
        <MdOutlineAddPhotoAlternate className="w-[50px] h-[50px]" />
      </div>
      <input
        accept="image/*"
        {...register(
          "image"
          //  { required: "กรุณาเพิ่มรูปภาพ" }
        )}
        type="file"
        multiple
        ref={fileEl}
        className=" hidden  "
        onChange={onImageChange}
      />
      {imageURLs.length ? (
        <div className="col-span-4 overflow-x-scroll scrollbar">
          <div className="flex w-[200px] h-[200px] gap-2  ">
            {imageURLs?.map((imageSrc, idx) => (
              <img key={idx} src={imageSrc} alt="preview image" />
            ))}
          </div>
        </div>
      ) : (
        <div className="col-span-4 overflow-x-scroll scrollbar">
          <div className="flex w-[200px] h-[200px] gap-2  ">
            {productObj?.images?.map((imageSrc, idx) => (
              <img key={idx} src={imageSrc?.imageUrl} alt="preview image" />
            ))}
          </div>
        </div>
      )}

      {errors?.image?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.image?.message}
          </p>
        </>
      )}
      <label htmlFor="4">
        รายละเอียดสินค้า <span className="text-red-500">*</span>
      </label>
      <textarea
        id="4"
        {...register("description", {
          required: "กรุณาระบุบรายละเอียดสินค้า",
        })}
        className=" border border-[#B8B8B8] p-1 col-span-3 min-h-[100px] "
        placeholder="ข้อมูลเพิ่มเติม เช่น สภาพสินค้า"
      />
      {errors?.description?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.description?.message}
          </p>
        </>
      )}
      <label htmlFor="5">
        ราคา <span className="text-red-500">*</span>
      </label>
      <input
        id="5"
        type="number"
        {...register("price", {
          validate: (value) => value > 0 || "ข้อมูลไม่ถูกต้อง",
          valueAsNumber: true,
          required: "กรุณาระบุบราคาสินค้า",
        })}
        className=" border border-[#B8B8B8] p-1 col-span-3 custom-number-input  "
        placeholder="ระบุบราคาสินค้า"
      />
      {errors?.price?.message && (
        <>
          <div></div>
          <p className="mt-[-20px] text-red-400 col-span-3 ">
            {errors?.price?.message}
          </p>
        </>
      )}
      <div></div>
      <div className="col-span-3 text-sm">
        กรุณาใส่เบอร์โทรที่คุณใช้สมัครสมาชิก เพื่อความปลอดภัยในการใช้งาน
        หากพบปัญหา สามารถติดต่อฝ่ายบริการลูกค้า
      </div>

      <div></div>
      <button className="bg-[#1E4C2F] py-3 text-white">บันทึก</button>
    </form>
  );
}
