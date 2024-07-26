import React from 'react';
import { FlatList } from 'react-native';
import * as S from './style';
import { useCartStore } from '@/store/cartStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart: React.FC = () => {
  const {cart, removeFromCart, attAmount, total} = useCartStore((state) => state);

  return (
    <S.Container>
      {cart.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyText>O carrinho está vazio.</S.EmptyText>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.TotalProducts>{`${cart.length} produtos adicionados: `}</S.TotalProducts>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <S.CartItemContainer>
                <S.ProductImage  source={{ uri: item.image }} />
                <S.Title>{item.title}</S.Title>
                <S.AmountContainer>
                  <S.AmountButton testID='decrement-button' onPress={()=>attAmount({
                    ...item,
                    amount:item.amount-1
                  })}>
                    <S.AmountButtonText>-</S.AmountButtonText>
                  </S.AmountButton>

                  <S.AmountText>{item.amount}</S.AmountText>

                  <S.AmountButton testID='increment-button' onPress={()=>attAmount({
                    ...item,
                    amount:item.amount+1
                  })}>
                    <S.AmountButtonText>+</S.AmountButtonText>
                  </S.AmountButton>
                </S.AmountContainer>
                <S.Price>{`R$ ${(item.price*item.amount).toFixed(2).replace('.', ',')}`}</S.Price>
                <S.RemoveButton onPress={()=>removeFromCart(item)} testID='remove-button'>
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color="#FFF"
                  />
                </S.RemoveButton>
                  
              </S.CartItemContainer>
            )}
          />
          <S.TotalContainer>
            <S.TotalText>Total:</S.TotalText>
            <S.TotalPriceText>{`R$ ${total.toFixed(2).replace('.', ',')}`}</S.TotalPriceText>
          </S.TotalContainer>
        </S.Container>
      )}
    </S.Container>
  );
};

export default Cart;