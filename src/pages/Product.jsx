import { useEffect } from "react";
import { DetailOperation } from "../features/product/DetailOperation";
import { ProductPreview } from "../features/product/ProductPreview";
import { useState } from "react";
import { getProduct } from "../services/apiProduct";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProductDetail() {
      try {
        setIsLoading(true);
        const { product } = await getProduct(productId);
        setProduct(() => product);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProductDetail();
  }, [productId]);

  if (isLoading || Object.keys(product).length === 0) return <Loading />;
  return (
    <div className="mx-20 flex flex-col gap-10">
      <ProductPreview product={product} />
      <DetailOperation product={product} />
    </div>
  );
}

export default Product;
