import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  justify-content: space-between;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin: 10px 0;
`;

interface ActionButtonProps {
  inCart: boolean;
}

export const AddButton = styled(TouchableOpacity)<ActionButtonProps>`
  background-color: ${(props) => (props.inCart ? '#ff6347' : '#00CC2C')};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
`;

