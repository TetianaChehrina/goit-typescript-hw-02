import { Image } from "../App/App.types";
export type ImageGalleryProps = {
  listImages: Image[];
  onOpen: (image: Image) => void;
};
