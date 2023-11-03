import { AiFillStar } from "react-icons/ai";
import { formatDate } from "../../utils/helper";
import { BsFillPersonFill } from "react-icons/bs";

function ReviewList({ reviews }) {
  return (
    <div className="font-extralight">
      <p className="mb-5">Review List</p>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;

function ReviewCard({ review }) {
  return (
    <div className="border-b-[1px] flex flex-col gap-3 my-5 py-2">
      <div className="flex">
        {Array.from({ length: review.rating }).map((_, index) => (
          <span className="text-[#FFA439]" key={index}>
            <AiFillStar />
          </span>
        ))}
      </div>
      <p>{review.content}</p>
      <div className="text-xs">{formatDate(new Date(review.reviewAt))}</div>
      <div className="flex items-center gap-3">
        {review.reviewer.imageUrl ? (
          <img
            src={`${review.reviewer.imageUrl}`}
            alt="profile-image"
            className="w-10 h-10 object-cover rounded-full"
          />
        ) : (
          <div className="border border-[#E4E9EE] rounded-full p-2">
            <BsFillPersonFill />
          </div>
        )}
        <p>{review.reviewer.name}</p>
      </div>
    </div>
  );
}
