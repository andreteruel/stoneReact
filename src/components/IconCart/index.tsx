
import { useCartStore } from '@/store/cartStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as S from './style'
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const IconCart: React.FC = () => {
    const cart = useCartStore((state) => state.cart);
    const router = useRouter(); 

    return (
        <TouchableOpacity onPress={() => router.push('/cart')} testID="cart-icon-button">
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




