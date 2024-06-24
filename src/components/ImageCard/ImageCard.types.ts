import { Image } from "../App/App.types";
export type ImageCardProps = {
  image: Image;
  onOpen: (image: Image) => void;
};
