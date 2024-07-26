import React from 'react';
import { FlatList } from 'react-native';
import * as S from './style';
import { useFavoriteStore } from '@/store/favoriteStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Favorite: React.FC = () => {
  const {favorites, removeFromFavorites} = useFavoriteStore((state) => state);

  return (
    <S.Container>
      {favorites.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyText>Nenhum produto adicionado como favorito.</S.EmptyText>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.Title>{`${favorites.length} produtos adicionados: `}</S.Title>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <S.CartItemContainer>
                <S.ProductImage  source={{ uri: item.image }} />
                <S.Title>{item.title}</S.Title>
                <S.RemoveButton testID='remove-button' onPress={() => removeFromFavorites(item)}>
                  <Ionicons
                    name="heart-sharp"
                    size={25}
                    color="#ff6347"
                  />
                </S.RemoveButton>
              </S.CartItemContainer>
            )}
          />
        </S.Container>
      )}
    </S.Container>
  );
};

export default Favorite;