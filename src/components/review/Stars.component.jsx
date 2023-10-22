import { useAtom } from "jotai";
import { Icon } from "../common/Icon.component.jsx";
import { reviewScore } from "../../stores/review.atom.js";

/**
 * @param {{
 *  length?: number,
 * }}
 */
export const ReviewStars = ({ length = 5 }) => {
  const [rating, setRating] = useAtom(reviewScore);

  return (
    <div className="flex gap-4">
      {Array.from({ length }, (_, index) => {
        return (
          <button onClick={() => setRating(index + 1)}>
            {index < rating ? (
              <Icon
                key={index}
                type="fillStar"
                size="large"
                className="fill-[#62AB05]"
              />
            ) : (
              <Icon
                key={index}
                type="star"
                size="large"
                className="fill-[#62AB05]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
