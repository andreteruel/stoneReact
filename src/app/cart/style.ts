import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  justify-content: space-between;
`;

export const CartItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
`;

export const TotalProducts = styled.Text`
  width: 250px;
  font-size: 20px;
  padding-left: 10px;
  margin: 5px;
`;


export const ProductImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  width: 150px;
  font-size: 16px;
  padding-left: 5px
`;

export const Price = styled.Text`
  width: 50px;
  font-size: 16px;
`;

export const AmountContainer = styled.View`
  width: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const AmountButton = styled(TouchableOpacity)`
  padding: 5px 8px 5px 8px;
  border-radius: 30px;
  border: 1px solid;
  margin: 5px;
`;

export const AmountButtonText = styled.Text`
    font-size: 10px;
`;

export const AmountText = styled.Text`
  font-size: 14px;
  border-radius: 10px;
  margin-left:2px;
  margin-right:2px;
`;

export const RemoveButton = styled(TouchableOpacity)`
  background-color: #ff6347;
  padding: 10px;
  border-radius: 5px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justifyContent: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  fontSize: 18px;
  width: 200px;
`;

export const TotalContainer = styled.View`
  background-color: #00CC2C;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const TotalPriceText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;