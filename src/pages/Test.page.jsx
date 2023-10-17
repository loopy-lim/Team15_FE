import { useState } from "react";
import { Button } from "../components/common/Button.component";
import { Icon } from "../components/common/Icon.component";
import { Txt } from "../components/common/Txt.component";
import { Modal } from "../components/common/Modal.component";

export const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
  const [isModalTodayOpen, setIsModalTodayOpen] = useState(false);

  const hardRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex gap-4 flex-col">
      <Txt typography="h1">hello world</Txt>
      <Button onClick={() => setIsModalOpen((prev) => !prev)}>
        그냥 모달 열기
      </Button>
      <Button onClick={() => setIsModalAlertOpen((prev) => !prev)}>
        Alert 모달 열기
      </Button>
      <Button onClick={() => setIsModalTodayOpen((prev) => !prev)}>
        Today 모달 열기
      </Button>
      <Button onClick={hardRefresh}>강제 리프레시</Button>
      <Icon type="back" />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        안녕하세요 그냥 모달입니다.
      </Modal>
      <Modal.Alert
        isOpen={isModalAlertOpen}
        onClose={() => {
          setIsModalAlertOpen(false);
        }}
        onRequestClose={() => setIsModalAlertOpen(false)}
      >
        안녕하세요 Alert 모달입니다.
      </Modal.Alert>
      <Modal.ToDay
        isOpen={isModalTodayOpen}
        onClose={() => setIsModalTodayOpen(false)}
        onRequestClose={() => setIsModalTodayOpen(false)}
      >
        <img src="https://placehold.co/600x400" alt="placeholder" />
      </Modal.ToDay>
    </div>
  );
};
