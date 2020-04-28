import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

import Icon from '../Icon';

/**
 * Logo
 */

export const Container = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

/**
 * Carrinho
 */

export const Cart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const CartIcon = styled(Icon).attrs({
  name: 'shopping-basket',
  color: '#FFF',
  size: 25,
})``;

export const CartTextCircle = styled.View`
  background: #7159c1;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -8px;
  left: -10px;
`;

export const CartText = styled.Text`
  color: #fff;
`;
