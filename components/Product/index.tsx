import * as S from './style';
import { useCartStore } from "@/src/store/cartStore";

interface ProductItemProps {
    id: number;
    image: string;
    title: string;
  }
  

const ProductItem: React.FC<ProductItemProps> = (product) => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const inCart = cart.some((item) => item.id === product.id);

    return (
      <S.Container>
        <S.ProductImage source={{ uri: product.image }} />
        <S.Title>{product.title}</S.Title>
        <S.AddButton inCart={inCart} onPress={()=> inCart ? removeFromCart(product.id) : addToCart(product)}>
          <S.ButtonText>{inCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}</S.ButtonText>
        </S.AddButton>
      </S.Container>
    );
  };

export default ProductItem;
