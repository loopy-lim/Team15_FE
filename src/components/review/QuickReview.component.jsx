import { useSetAtom } from "jotai";
import { Txt } from "../common/Txt.component.jsx";
import { reviewText } from "../../stores/review.atom.js";

const quickReviewList = [
  "🧺 물건 잘 사용했습니다 !",
  "👍 상태가 좋아요 ~",
  "🤓 서비스가 만족스러워요 !",
  "💵 저렴하게 빌릴 수 있어 감사했습니다.",
  "🙇🏻‍♀️ 물건 빌려주셔서 감사해요. 다음에 또 이용하겠습니다.",
];

export const QuickReview = () => {
  const setText = useSetAtom(reviewText);

  return (
    <div className="flex flex-col w-full gap-4 text-center">
      <Txt>한줄 평으로 빠르게 남겨보세요 !</Txt>
      <div className="flex flex-wrap justify-center gap-2">
        {quickReviewList.map((review) => {
          return (
            <button
              key={review}
              className="p-2 border rounded-lg"
              onClick={() => setText(review)}
            >
              <Txt typography="subtitle">{review}</Txt>
            </button>
          );
        })}
      </div>
    </div>
  );
};
