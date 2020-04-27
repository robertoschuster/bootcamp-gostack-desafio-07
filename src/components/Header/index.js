import React from 'react';
// import { Text } from 'react-native';

// import Icon from '../Icon';

import {
  Container,
  Logo,
  Cart,
  CartIcon,
  CartTextCircle,
  CartText,
} from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <Logo />

      <Cart
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <CartIcon />
        <CartTextCircle>
          <CartText>3</CartText>
        </CartTextCircle>
      </Cart>
    </Container>
  );
}

export default Header;
