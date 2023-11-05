import { useState } from "react";
import Heading from "../../components/Heading";

import { GrPrevious, GrNext } from "react-icons/gr";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { formatCurrency } from "../../utils/helper";
import ImageCarousel from "../../components/ImageCarousel";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/slices/cartSlice";
import { useEffect } from "react";
import {
  isWish as isWishAPI,
  toggleWish as toggleWishAPI,
} from "../../services/apiWish";

export function ProductPreview({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(1);
  const [isWish, setIsWish] = useState(null);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getWishProduct() {
      const res = await isWishAPI(product.id);
      setIsWish(res.isWish);
    }
    if (user) getWishProduct();
  }, [product.id, user]);

  const onNext = () =>
    setSelectedImage((cur) => (cur + 1) % product.images.length);
  const onPrev = () =>
    setSelectedImage(
      (cur) => (cur - 1 + product?.images.length) % product.images.length
    );

  const handleAddToCart = () => {
    const sizeField = Object.keys(product.productVariants[0]).find((key) =>
      key.includes("SizeId")
    );
    const data = { productId: product.id, colorId: color };
    data[`${sizeField}`] = size;
    dispatch(addProductToCart(data));
  };

  const toggleWish = async () => {
    const { isWish } = await toggleWishAPI(product.id);
    setIsWish(isWish)
  };

  if (Object.keys(product).length === 0) return null;

  return (
    // --------- images ---------
    <div className="grid grid-cols-2 mt-10">
      <div className="w-full px-20">
        <div className="w-full aspect-square p-2 relative">
          <img
            src={product.images[selectedImage].imageUrl}
            alt="product-image"
            className="rounded-md "
          />
          <ImageController position="top-1/2 left-5" onClick={onNext}>
            <GrPrevious />
          </ImageController>
          <ImageController position="top-1/2 right-5" onClick={onPrev}>
            <GrNext />
          </ImageController>
        </div>
        <ImageCarousel
          images={product.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
      {/* --------- details --------- */}
      <div className="w-full flex flex-col font-light gap-4">
        <Heading big={true}>{product.name}</Heading>
        <div className="flex gap-2 items-center">
          <span className="text-[#FFA439]">
            <AiFillStar />
          </span>
          <span>{product.avgRating}</span>
        </div>
        <p className="text-xl text-[#1D9E34]">
          {formatCurrency(product.price)}
        </p>
        <p className="text-sm text-[#818B9C] font-light">
          {product.description}
        </p>
        <hr />
        {/* ------------ options ------------*/}
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="color">Color</label>
            <select
              name="color"
              id="color"
              className="border rounded-lg p-1"
              value={color}
              onChange={(e) => setColor(() => e.target.value)}
            >
              {product.options.colors.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="size">Size</label>
            <select
              name="size"
              id="size"
              className="border rounded-lg p-1"
              value={size}
              onChange={(e) => setSize(() => e.target.value)}
            >
              {product.options.sizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-7 mt-5">
          <button
            className="border flex items-center justify-center gap-5 w-fit px-5 py-2 rounded-lg border-black"
            onClick={handleAddToCart}
          >
            <MdOutlineAddShoppingCart />
            <span>Add to Cart</span>
          </button>

          <button className="text-2xl" onClick={toggleWish}>
            {isWish ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageController({ position, children, onClick }) {
  return (
    <button className={`absolute ${position}`} onClick={onClick}>
      {children}
    </button>
  );
}
