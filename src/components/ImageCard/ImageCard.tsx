import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";
import { ImageCardProps } from "./ImageCard.types";
const ImageCard: React.FC<ImageCardProps> = ({ image, onOpen }) => {
  return (
    <div className={css.image_Card}>
      <img
        className={css.card_Image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpen(image)}
      />
    </div>
  );
};

export default ImageCard;
