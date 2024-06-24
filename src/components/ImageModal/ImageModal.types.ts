import { Image } from "../App/App.types";
export type ImageModalProps = {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
};
