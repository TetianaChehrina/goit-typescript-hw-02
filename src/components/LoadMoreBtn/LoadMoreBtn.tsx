import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onChange }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onChange}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
