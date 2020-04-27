import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Cart({ navigation }) {
  const str = navigation.getParam('value');

  return (
    <Container>
      <Text color="#FFF">{str}</Text>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Carrinho',
};
