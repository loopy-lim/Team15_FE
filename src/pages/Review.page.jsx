import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAtom } from "jotai";
import { AppBar } from "../components/common/AppBar.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { Review } from "../components/review/Review.component.jsx";
import { BottomFullLink } from "../components/common/BottomFullLink.component.jsx";
import { reviewScore, reviewText } from "../stores/review.atom.js";
import { Modal } from "../components/common/Modal.component.jsx";
import { useCreateReview } from "../hooks/useReviewQuery.jsx";

export const ReviewPage = () => {
  const { rentalId } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useAtom(reviewText);
  const [score, setScore] = useAtom(reviewScore);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutationReview } = useCreateReview();

  const closeModalOpen = () => {
    navigate("/rental");
    setIsModalOpen(false);
  };

  const onReviewSubmit = () => {
    setIsModalOpen(true);
    mutationReview({content: text, rentalId, star: score});
    setText("");
    setScore(0);
  };

  return (
    <>
      <AppBar to="/" />
      <MainContainer hasBottomFullLink={true}>
        <Review />
        <BottomFullLink
          title="리뷰 남기기"
          isActive={text != "" && score !== 0}
          onClick={onReviewSubmit}
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
