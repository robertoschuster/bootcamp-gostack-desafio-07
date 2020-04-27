import React, { Component } from 'react';

import { Container, Botao } from './styles';

export default class Home extends Component {
  handleNavigate = (str) => {
    const { navigation } = this.props;
    navigation.navigate('Cart', { value: str });
  };

  render() {
    return (
      <>
        <Container />
        <Botao title="Carrinho" onPress={() => this.handleNavigate('teste')} />
      </>
    );
  }
}

Home.navigationOptions = {
  title: 'Loja',
};
