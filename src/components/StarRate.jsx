import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({
  maxRating = 5,
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div className="flex items-center">
      <div className="flex text-2xl">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="text-[#FFA439]"
    >
      {full ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  );
}
