import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";
import { ImageModalProps } from "./ImageModal.types";
import { boolean } from "yup";
const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      onRequestClose={onClose}
    >
      <div className={css.container}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
