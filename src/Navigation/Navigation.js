import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Home from '../screens/Home/Home';
import Products from '../screens/Products/Products';
import ProductDet from '../screens/ProductDet/ProductDet';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}>
        {props => <Home {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Products"
        options={{
          headerShown: false,
        }}>
        {props => <Products {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="ProductDet"
        options={{
          headerShown: false,
        }}>
        {props => <ProductDet {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
