import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Cart, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo />

      {/* <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>

        <MdShoppingBasket size={36} color="#FFF" />
      </Cart> */}
    </Container>
  );
}

export default Header;
