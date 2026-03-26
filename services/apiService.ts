import axios from "axios";

export const apiService = {
  getCard: async (userId: string) => {
    try {
      const url = "https://api-libros-y1wv.onrender.com/libros/listar";
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error: ", error);
    }
  },
};
