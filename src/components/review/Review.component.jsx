import { Txt } from "../common/Txt.component";
import { ReviewStars } from "./Stars.component";
import { QuickReview } from "./QuickReview.component";
import { ReviewTextArea } from "./TextArea.component";

export const Review = ({ productId }) => {
  return (
    <div className="flex flex-col items-center gap-6 my-4">
      <Txt typography="h3">물건은 잘 사용하셨나요?</Txt>
      <ReviewStars />
      <ReviewTextArea />
      <QuickReview />
    </div>
  );
};
