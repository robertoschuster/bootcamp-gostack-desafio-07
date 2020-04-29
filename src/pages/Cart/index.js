import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import {
  Container,
  Product,
  ProductInfo,
  ProductImage,
  ProductText,
  ProductTitle,
  ProductPrice,
  ProductRemove,
  ProductRemoveIcon,
  ProductControls,
  ProductSub,
  ProductAdd,
  ProductSubIcon,
  ProductAddIcon,
  ProductInput,
  ProductSubtotal,
  Total,
  TotalText,
  TotalAmount,
  CheckoutButton,
  CheckoutIcon,
  CheckoutButtonText,
} from './styles';
import { formatPrice } from '../../utils/formatt';

export default function Cart({ navigation }) {
  // const str = navigation.getParam('value');

  const products = [
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    // {
    //   id: 3,
    //   title: 'Tênis VR Couro Feminino',
    //   price: 159.9,
    //   image:
    //     'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    // },
    // {
    //   id: 4,
    //   title: 'Tênis VR Couro Feminino',
    //   price: 159.9,
    //   image:
    //     'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    // },
    // {
    //   id: 5,
    //   title: 'Tênis VR Couro Feminino',
    //   price: 159.9,
    //   image:
    //     'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    // },
  ];

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id}>
          <ProductInfo>
            <ProductImage source={{ uri: product.image }} />
            <ProductText>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            </ProductText>
            <ProductRemove>
              <ProductRemoveIcon />
            </ProductRemove>
          </ProductInfo>

          <ProductControls>
            <ProductSub>
              <ProductSubIcon />
            </ProductSub>
            <ProductInput>10</ProductInput>
            <ProductAdd>
              <ProductAddIcon />
            </ProductAdd>
            <ProductSubtotal>R$ 0,00</ProductSubtotal>
          </ProductControls>
        </Product>
      ))}

      <Total>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$ 999,00</TotalAmount>
      </Total>
      <CheckoutButton>
        <CheckoutIcon />
        <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

Cart.navigationOptions = {
  title: 'Carrinho',
};
