import { FlatList, ListRenderItem } from 'react-native';
import * as S from './style';
import Product from "@/components/Product";
import { getMarvelComics } from "@/services/comics";
import { ComicsPros } from '@/services/types';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Index() {
  const [comics, setComics ] = useState([] as ComicsPros[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const findComics = async (page: number) =>{
    try {
      setLoading(true);
      const newComics = await getMarvelComics(10, (page*10));
      setComics([...comics, ...newComics]);
    } catch (error) {
      alert('Erro na busca por comics, por favor tente de novo mais tarde.');
      throw error; 
    }finally{
      setLoading(false);
    }
  }

  const handleLoadPage = () => {
    if(!loading){
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    findComics(currentPage);
  }, [currentPage]);

  const renderFooter = () => {
    if (!loading) return null;
    return <Loading />;
  };

  const renderItem: ListRenderItem<ComicsPros> = ({item}) => (
    <Product
      id={item.id}
      image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
      title={item.title}
      amount={1}
      price={item.prices[0].price == 0 ? 5.9 : item.prices[0].price}
    />
  );

  return (
    <S.Container>
      <FlatList
        testID="flatlist"
        data={comics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        onEndReached={handleLoadPage}
        onEndReachedThreshold={0.5} 
        ListFooterComponent={renderFooter}
      />
    </S.Container>
  );
}
