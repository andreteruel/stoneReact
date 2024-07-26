import { Get } from "./api";
import { ComicsPros } from "./types";

export const getMarvelComics = async (limit: number = 10, offset: number = 0) => {
    const params = {
        limit: limit,
        offset: offset,
    }
    try {
      const response = await Get<ComicsPros[]>({url:'/comics', params});
  
      return response;
    } catch (error) {
      console.error('Error fetching Marvel comics:', error);
      throw error; 
    }
  };