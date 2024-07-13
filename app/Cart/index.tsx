import React from 'react';
import { FlatList } from 'react-native';
import * as S from './style';
import { useCartStore } from '@/src/store/cartStore';

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <S.Container>
      {cart.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyText>Carrinho está vazio.</S.EmptyText>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.Title>{`${cart.length} produtos adicionados: `}</S.Title>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <S.CartItemContainer>
                <S.ProductImage  source={{ uri: item.image }} />
                <S.Title>{item.title}</S.Title>
                <S.RemoveButton onPress={() => removeFromCart(item.id)}>
                  <S.ButtonText>Remover</S.ButtonText>
                </S.RemoveButton>
              </S.CartItemContainer>
            )}
          />
        </S.Container>
      )}
    </S.Container>
  );
};

export default Cart;