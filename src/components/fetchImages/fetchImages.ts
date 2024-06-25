import axios from "axios";
import { Image } from "../App/App.types";
axios.defaults.baseURL = "https://api.unsplash.com";

interface ApiResponse {
  results: Image[];
}
const fetchImages = async (
  searchTerm: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "tEgtofoAx8QSIQt_CDWkpCX8nYPOxNtQoMYrKcvuucY",
      query: searchTerm,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};

export default fetchImages;
