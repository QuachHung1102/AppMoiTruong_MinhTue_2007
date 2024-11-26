import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CampaignScreen, CampaignNotiScreen, CampaignDetailScreen } from '../screens';

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
        <CampaignStack.Screen name="CampaignNotiScreen" component={CampaignNotiScreen} />
      </CampaignStack.Group>
    </CampaignStack.Navigator>
  );
};

export default CampaignStackNavigator;
