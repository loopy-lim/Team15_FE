import { Txt } from "../common/Txt.component.jsx";
import { ReviewStars } from "./Stars.component.jsx";
import { QuickReview } from "./QuickReview.component.jsx";
import { ReviewTextArea } from "./TextArea.component.jsx";

export const Review = () => {
  return (
    <div className="flex flex-col items-center gap-6 my-4">
      <Txt typography="h3">물건은 잘 사용하셨나요?</Txt>
      <ReviewStars />
      <ReviewTextArea />
      <QuickReview />
    </div>
  );
};
