import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from '../../components/Icon';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const ProductList = styled(FlatList).attrs({
  // showsVerticalScrollIndicator: false,
  // showsHorizontalScrollIndicator: false,
})`
  /* background: lightcoral; */
`;

/**
 * Product
 */
export const Product = styled.View`
  padding: 6px 0;
`;

/**
 * Product Info
 */

export const ProductInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  background: #999;
  border-radius: 4px;
`;

export const ProductText = styled.View`
  /* background: lightsalmon; */
  flex: 1;
  /* display: flex;
  flex-direction: column; */
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  color: #191920;
`;

export const ProductPrice = styled.Text`
  color: #191920;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductRemove = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductRemoveIcon = styled(Icon).attrs({
  name: 'delete-forever',
  color: '#7159c1',
  size: 24,
})``;

/**
 * Product COntrols
 */

export const ProductControls = styled.View`
  background: #eee;
  padding: 6px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductSub = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductSubIcon = styled(Icon).attrs({
  name: 'remove-circle-outline',
  color: '#7159c1',
  size: 24,
})``;

export const ProductAdd = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductAddIcon = styled(Icon).attrs({
  name: 'add-circle-outline',
  color: '#7159c1',
  size: 24,
})``;

export const ProductInput = styled.Text`
  color: #191920;
  background: #fff;
  border-radius: 4px;
  padding: 6px;
  border: 1px solid #ddd;
  width: 60px;
`;

export const ProductSubtotal = styled.Text`
  color: #191920;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  padding: 6px;
`;

/**
 * Total
 */

export const Total = styled.View`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  /* background: lightseagreen; */
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalAmount = styled.Text`
  color: #191920;
  font-weight: bold;
  font-size: 30px;
`;

/**
 * Botão Finalizar
 */

export const CheckoutButton = styled.TouchableOpacity`
  margin-top: 10px;
  background: #7159c1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const CheckoutIcon = styled(Icon).attrs({
  name: 'done',
  color: '#fff',
  size: 24,
})``;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  padding: 12px;
`;
