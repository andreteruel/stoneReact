
import { useCartStore } from '@/src/store/cartStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as S from './style'
import { TouchableOpacity } from 'react-native';

const IconCart: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const cart = useCartStore((state) => state.cart);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Cart/index')} testID="cart-icon-button">
            <S.Container>
                <Ionicons
                    name="cart-outline"
                    size={25}
                    color="#FFF"
                />
                <S.QuantityCircle>
                    <S.QuantityNumber>{cart.length}</S.QuantityNumber>
                </S.QuantityCircle>
            </S.Container>
        </TouchableOpacity>
    );
  };

export default IconCart;




