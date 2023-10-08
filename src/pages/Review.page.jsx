import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { Review } from "../components/review/Review.component";

export const ReviewPage = () => {
  const { productId } = useParams();

  return (
    <>
      <AppBar to="/" />
      <MainContainer>
        <Review productId={productId} />
      </MainContainer>
    </>
  );
};
