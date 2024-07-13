import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  padding: 10px;
`;

export const CartItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ProductImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  width: 200px;
  font-size: 16px;
`;

export const RemoveButton = styled(TouchableOpacity)`
  background-color: #ff6347;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
`;


export const EmptyContainer = styled.View`
  flex: 1;
  justifyContent: 'center';
  alignItems: 'center';
`;

export const EmptyText = styled.Text`
  fontSize: 18,
`;