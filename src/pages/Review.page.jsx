import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { Review } from "../components/review/Review.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { useAtom } from "jotai";
import { reviewScore, reviewText } from "../stores/review.atom";
import { Modal } from "../components/common/Modal.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ReviewPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useAtom(reviewText);
  const [score, setScore] = useAtom(reviewScore);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModalOpen = () => {
    navigate("/");
    setIsModalOpen(false);
  };

  return (
    <>
      <AppBar to="/" />
      <MainContainer hasBottomFullLink={true}>
        <Review productId={productId} />
        <BottomFullLink
          title="리뷰 남기기"
          isActive={text != "" && score !== 0}
          onClick={() => {
            setIsModalOpen(true);
            setText("");
            setScore(0);
          }}
        />
        <Modal.Alert
          isOpen={isModalOpen}
          onClose={closeModalOpen}
          onRequestClose={closeModalOpen}
        >
          리뷰를 작성했습니다.
        </Modal.Alert>
      </MainContainer>
    </>
  );
};
