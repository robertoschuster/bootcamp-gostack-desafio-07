import React from 'react';
// import { Text } from 'react-native';

// import Icon from '../Icon';

import PropTypes from 'prop-types';

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

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

// Header.defaultProps = {
//   prop1: { foobar: 'foobar' },
// };

export default Header;
