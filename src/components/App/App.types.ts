import { string } from "yup";

export type ModalImage = string | null;
export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};
