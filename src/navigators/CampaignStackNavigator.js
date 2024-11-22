import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CampaignScreen } from '../screens';

const CampaignStack = createStackNavigator();

const CampaignStackNavigator = () => {
  return (
    <CampaignStack.Navigator
      initialRouteName="CampaignScreen"
    >
      <CampaignStack.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <CampaignStack.Screen name="CampaignScreen" component={CampaignScreen} />
      </CampaignStack.Group>
    </CampaignStack.Navigator>
  );
};

export default CampaignStackNavigator;
