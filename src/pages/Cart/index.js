import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Container } from './styles';

export default function Cart({ navigation }) {
  const str = navigation.getParam('value');

  return (
    <Container>
      <Text color="#FFF">{str}</Text>
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
