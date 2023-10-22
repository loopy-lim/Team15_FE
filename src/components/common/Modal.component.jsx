import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { Button } from "./Button.component.jsx";
import { Icon } from "./Icon.component.jsx";

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onRequestClose: () => void
 *  className: string,
 * }}
 */
const BaseModal = ({ children, isOpen, onRequestClose, className }) => {
  const overlay = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    position: "absolute",
    inset: "0",
    width: isMobile ? "w-full" : "480px",
    zIndex: "100",
  };

  const modalElement = document.getElementById("modal");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay }}
      appElement={modalElement}
      className={classnames(
        "py-4 px-8 rounded-md border bg-[#F8F8F8] relative text-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
    >
      {children}
    </ReactModal>
  );
};

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onClose: () => void,
 *  onRequestClose: () => void}}
 */
const AlertModal = ({ children, isOpen, onRequestClose, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <div className="text-center my-2 transition-all">{children}</div>
    <Button size="small" className="w-36 text-sm" onClick={onClose}>
      확인
    </Button>
  </Modal>
);

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onClose: () => void,
 *  onRequestClose: () => void}}
 */
const ToDayModal = ({ children, isOpen, onRequestClose, onClose }) => {
  return (
    <Modal className="!p-0" isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="text-center transition-all">{children}</div>
      <div className="flex justify-between items-center">
        <button className="p-2" onClick={onClose}>
          오늘은 그만보기
        </button>
        <button className="p-2" onClick={onClose}>
          <Icon type="close" />
        </button>
      </div>
    </Modal>
  );
};

export const Modal = Object.assign(BaseModal, {
  Alert: AlertModal,
  ToDay: ToDayModal,
});
