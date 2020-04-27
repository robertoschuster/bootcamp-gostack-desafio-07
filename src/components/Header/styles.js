import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  background: blue;
`;
