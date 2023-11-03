import { useState } from "react";
import StarRating from "../../components/StarRate";
import { createReviews, getReviews } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

function ReviewForm({ setReviews, setOpenReviewForm }) {
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const onReview = async (e) => {
    e.preventDefault();
    const reviewData = { rating, content, productId: +productId };
    await createReviews(reviewData);
    const data = await getReviews(productId);
    setReviews(() => data);
    setOpenReviewForm(false);
  };
  return (
    <form className="w-full border px-4 py-5 " onSubmit={onReview}>
      <div className="flex flex-col gap-3 w-full">
        <StarRating onSetRating={setRating} />
        <textarea
          type="text"
          placeholder="To review this product ..."
          className="font-extralight w-full p-3 border rounded-lg"
          rows={4}
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
        />
        <button className="px-5 py-2 rounded-lg bg-black text-white border font-extralight w-fit h-fit text-sm self-end">
          Send
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
