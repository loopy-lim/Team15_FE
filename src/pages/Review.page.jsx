import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { Review } from "../components/review/Review.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { useAtom } from "jotai";
import { reviewScore, reviewText } from "../stores/review.atom";

export const ReviewPage = () => {
  const { productId } = useParams();

  const [text, setText] = useAtom(reviewText);
  const [score, setScore] = useAtom(reviewScore);

  return (
    <>
      <AppBar to="/" />
      <MainContainer hasBottomFullLink={true}>
        <Review productId={productId} />
        <BottomFullLink
          title="리뷰 남기기"
          to={`/`}
          isActive={text != "" && score !== 0}
          beforeAction={() => {
            setText("");
            setScore(0);
          }}
        />
      </MainContainer>
    </>
  );
};
