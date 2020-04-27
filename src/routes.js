import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        // headerTitleAlign: 'center',
        // headerStyle: {
        //   backgroundColor: '#7159c1',
        // },
        // header: () => <Header />,
        // headerTintColor: '#fff',
        // headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: '#191920',
        },
      },
    }
  )
);

export default Routes;
