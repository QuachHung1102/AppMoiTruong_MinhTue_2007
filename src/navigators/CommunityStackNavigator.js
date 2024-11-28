import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { UserCampaignScreen, CommunityScreen } from '../screens';

const CommunityStack = createStackNavigator();

const CommunityStackNavigator = () => {
  return (
    <CommunityStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
        cardShadowEnabled: false,
        headerShown: false,
      }}
      initialRouteName="CommunityScreen"
    >
      <CommunityStack.Screen
        options={{ headerShown: true }}
        name="CommunityScreen"
        component={CommunityScreen}
      />
      <CommunityStack.Screen
        options={{ headerShown: true }}
        name="UserCampaignScreen"
        component={UserCampaignScreen}
      />
    </CommunityStack.Navigator>
  )
};

export default CommunityStackNavigator;
