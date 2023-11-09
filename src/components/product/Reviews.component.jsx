import { useGetAllReviews } from "../../hooks/useReviewQuery";
import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";

export const ProductReviews = ({ productId }) => {
  const { reviews } = useGetAllReviews({ productId });
  return (
    <>
      <Br className="py-5" />
      <Txt typography="h3" colors="prmiary">
        리뷰
      </Txt>
      {reviews.length === 0 && (
        <Txt typography="h4" colors="secondary" className="block py-5">
          아직 등록된 리뷰가 없습니다.
        </Txt>
      )}
      <div className="flex flex-col gap-4 pb-12 divide-y">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4 pt-4">
            <img
              className="object-cover w-12 h-12 rounded-full"
              src={review.idCardImagePath}
              alt={review.nickname}
            />
            <div className="flex flex-col gap-4">
              <Txt typography="h5">{review.nickname}</Txt>
              <Txt>{review.content}</Txt>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
