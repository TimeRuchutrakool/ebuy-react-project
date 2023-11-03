import { PiPencilSimpleLineDuotone } from "react-icons/pi";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/apiProduct";
import Loading from "../../components/Loading";
import ReviewBox from "./ReviewBox";
import ReviewList from "./ReviewList";

export function Reviews() {
  const { productId } = useParams();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const data = await getReviews(productId);
        setReviews(() => data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [productId]);

  if (loading || Object.keys(reviews).length === 0) return <Loading />;

  return (
    <div className="mt-5 flex flex-col gap-4">
      <div className="flex justify-between items-center font-extralight">
        <p>Product Reviews</p>
        <button className="border flex items-center justify-center gap-2 w-fit px-5 py-2 rounded-lg border-black">
          <PiPencilSimpleLineDuotone />
          <span>Review</span>
        </button>
      </div>
      <ReviewBox
        numberOfReview={reviews.numberOfReview}
        ratings={reviews.ratings}
      />
      <ReviewList reviews={reviews.review} />
    </div>
  );
}
