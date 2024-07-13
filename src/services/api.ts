import axios from 'axios';
import md5 from 'md5';


const PUBLIC_KEY = 'b8f96b37b9ecbfe1e06aadc99f8a7455'; // Substitua com sua chave pública da Marvel
const PRIVATE_KEY = 'dd89acea1b5001d882c7522e81032f2cf9c7d470'; // Substitua com sua chave privada da Marvel
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const api = axios.create({
  baseURL: BASE_URL,
});

interface ComicsUrlsProps{
  type: string;
  url: string;
}

interface ComicsCharactersProps{
  available: number;
  collectionURI: string;
  items: CharactersProps[];
  returned: number;
}

interface CharactersProps{
  name: string;
  resourceURI: string;
}

export interface ComicsPros{
  id: number;
  title: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: string;
  resourceURI?: string;
  urls?: ComicsUrlsProps[];
  thumbnail:  {
    extension: string;
    path: string;
  };
  characters?: ComicsCharactersProps;
}

interface returnProps{
  data: {
    results: ComicsPros[]
  }
}


const getParams = (limit: number = 10, offset: number = 0) =>{
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    return {
        ts: timestamp,
        apikey: PUBLIC_KEY,
        hash: hash,
        limit: limit,
        offset: offset,
      }
}

const getMarvelComics = async (limit: number = 10, offset: number = 0) => {
    try {
      const response = await api.get<returnProps>('/comics', {
        params: getParams(limit, offset),
      });
  
      return response.data.data.results;
    } catch (error) {
      console.error('Error fetching Marvel comics:', error);
      throw error; 
    }
  };
  
  export { getMarvelComics };