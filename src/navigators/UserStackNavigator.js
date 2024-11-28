import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { UserScreen } from '../screens';

const UserStack = createStackNavigator();

const UserStackNavigator = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
        cardShadowEnabled: false,
        headerShown: false,
      }}
      initialRouteName="UserScreen"
    >
      <UserStack.Screen
        options={{ headerShown: true }}
        name="UserScreen"
        component={UserScreen}
      />


    </UserStack.Navigator>
  )
};

export default UserStackNavigator;
