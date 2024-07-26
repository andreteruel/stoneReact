export interface ApiProps{
    url: string;
    params?: object;
}
  
export interface returnProps<T>{
    data: {
        results: T
    }
}
  
type ComicsUrlsProps = {
    type: string;
    url: string;
}
  
type ComicsCharactersProps = {
    available: number;
    collectionURI: string;
    items: CharactersProps[];
    returned: number;
}
  
type CharactersProps = {
    name: string;
    resourceURI: string;
}

type PricesProps = {
    price: number, 
    type: string
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
    prices: PricesProps[]
}