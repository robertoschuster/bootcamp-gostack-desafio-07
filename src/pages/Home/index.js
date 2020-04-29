import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ListWrapper,
  List,
  Product,
  Title,
  Price,
  Image,
  Button,
  ButtonAddText,
  ButtonAmount,
  ButtonAmountText,
  ButtonIcon,
} from './styles';

import { formatPrice } from '../../utils/formatt';

export default class Home extends Component {
  state = {
    loading: false,
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve e muito Confortável Confortável',
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
      {
        id: 3,
        title: 'Tênis VR Couro Feminino',
        price: 159.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
    ],
  };

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  refreshList = () => {};

  handleLoadMore = () => {};

  render() {
    const { products, loading } = this.state;
    return (
      <Container>
        <ListWrapper>
          <List
            horizontal
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={this.handleLoadMore} // Função que carrega mais itens
            // ListFooterComponent={this.renderFooter}
            onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
            refreshing={loading}
            data={products}
            keyExtractor={(prod) => String(prod.id)}
            renderItem={({ item }) => {
              return (
                <Product key={item.id}>
                  <Image source={{ uri: item.image }} />
                  <Title>{item.title}</Title>
                  <Price>{formatPrice(item.price)}</Price>
                  <Button onPress={this.handleNavigate}>
                    <ButtonAmount>
                      <ButtonIcon />
                      <ButtonAmountText>3</ButtonAmountText>
                    </ButtonAmount>
                    <ButtonAddText>ADICIONAR</ButtonAddText>
                  </Button>
                </Product>
              );
            }}
          />
        </ListWrapper>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Home.navigationOptions = {
  title: 'Loja',
};
