import CircularProgress from "@mui/material/CircularProgress";
import { LinearProgress } from "@mui/material";
import { AiFillStar } from "react-icons/ai";

function ReviewBox({ numberOfReview, ratings }) {
  const avgRating =
    ratings.reduce(
      (acc, cur) => acc + Number(cur.rating) * Number(cur.nums),
      0
    ) / numberOfReview;
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
            {!isNaN(avgRating) ? avgRating.toFixed(2) : (0).toFixed(2)}
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
export default ReviewBox;

function RatingScale({ value }) {
  return <LinearProgress variant="determinate" value={value} />;
}
