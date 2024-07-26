import { useFavoriteStore } from '@/store/favoriteStore';
import * as S from './style';
import { useCartStore } from "@/store/cartStore";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ProductItemProps {
    id: number;
    image: string;
    title: string;
    price: number;
    amount: number;
  }
  

const ProductItem: React.FC<ProductItemProps> = (product) => {
  const {cart, addToCart, removeFromCart} = useCartStore((state) => state);
  const {favorites, addToFavorites, removeFromFavorites} = useFavoriteStore((state) => state);
  const inCart = cart.some((item) => item.id === product.id);
  const inFavorite = favorites.some((item) => item.id === product.id);
  return (
    <S.Container>
      <S.ProductImage source={{ uri: product.image }} />
      <S.FavoriteButton onPress={() => {inFavorite ? removeFromFavorites(product) : addToFavorites(product)} }>
        <Ionicons
          name={inFavorite ? "heart-sharp" : "heart-outline"}
          size={25}
          color={inFavorite ? "#ff6347" : "#FFF"}
        />
      </S.FavoriteButton>
      <S.Title>{product.title}</S.Title>
      <S.Title>{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</S.Title>
      <S.AddButton inCart={inCart} onPress={()=> inCart ? removeFromCart(product) : addToCart(product)}>
        <S.ButtonText>{inCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}</S.ButtonText>
      </S.AddButton>
    </S.Container>
  );
};

export default ProductItem;
