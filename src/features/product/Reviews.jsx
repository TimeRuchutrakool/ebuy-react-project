import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import CircularProgress from "@mui/material/CircularProgress";
import { LinearProgress } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { formatDate } from "../../utils/helper";
import { BsFillPersonFill } from "react-icons/bs";

const mockReview = {
  numberOfReview: 6,
  ratings: [
    { rating: 5, nums: 2 },
    { rating: 4, nums: 2 },
    { rating: 3, nums: 1 },
    { rating: 2, nums: 1 },
    { rating: 1, nums: 0 },
  ],
  reviews: [
    {
      id: 1,
      content: "This is amazing product I have.",
      rating: 5,
      reviewAt: Date.now() + 1 * 60 * 1000,
      reviewer: {
        name: "Adam Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-zcsgns09h8ivd1",
      },
    },
    {
      id: 2,
      content: "This is amazing product I have.",
      rating: 4,
      reviewAt: Date.now() + 1.2 * 60 * 1000,
      reviewer: {
        name: "Peter Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-l5yf8s09h8iv60",
      },
    },
    {
      id: 3,
      content: "This is amazing product I have.",
      rating: 3,
      reviewAt: Date.now() + 1.5 * 60 * 1000,
      reviewer: {
        name: "Sam Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-nrnlbp09h8iv56",
      },
    },
    {
      id: 4,
      content: "This is amazing product I have.",
      rating: 2,
      reviewAt: Date.now() + 2 * 60 * 1000,
      reviewer: {
        name: "Jennie Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-21yhrt09h8iv0d",
      },
    },
    {
      id: 5,
      content: "This is amazing product I have.",
      rating: 5,
      reviewAt: Date.now() + 2.5 * 60 * 1000,
      reviewer: {
        name: "Good Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-zcsgns09h8ivd1",
      },
    },
    {
      id: 6,
      content: "This is amazing product I have.",
      rating: 4,
      reviewAt: Date.now() + 3 * 60 * 1000,
      reviewer: {
        name: "Ben Warlock",
        imageUrl:
          "https://down-th.img.susercontent.com/file/sg-11134201-22100-l5yf8s09h8iv60",
      },
    },
  ],
};

export function Reviews() {
  const reviews = mockReview;
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
      <ReviewList reviews={reviews.reviews} />
    </div>
  );
}

function ReviewBox({ numberOfReview, ratings }) {
  const avgRating =
    ratings.reduce((acc, cur) => acc + cur.rating * cur.nums, 0) /
    numberOfReview;
  return (
    <div className="border flex font-extralight px-3 py-4">
      <div className="w-1/3 flex items-center gap-5">
        <div className="w-fit relative flex items-center justify-center">
          <CircularProgress
            variant="determinate"
            value={Math.ceil((avgRating / 5) * 100)}
            color="success"
            size="4rem"
          />
          <p className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
            {avgRating.toFixed(2)}
          </p>
        </div>
        <p>from {numberOfReview} reviews</p>
      </div>
      <div className="w-2/3 flex flex-col justify-between gap-y-2">
        {ratings.map((rating, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full gap-x-14"
          >
            <div className="flex items-center gap-1 justify-between text-sm">
              <span>{rating.rating}.0</span>
              <span className="text-[#FFA439]">
                <AiFillStar />
              </span>
            </div>
            <div className="w-full">
              <RatingScale value={(rating.nums / numberOfReview) * 100} />
            </div>
            <p>{rating.nums}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RatingScale({ value }) {
  return <LinearProgress variant="determinate" value={value} />;
}

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
      <div className="text-xs">{formatDate(review.reviewAt)}</div>
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
