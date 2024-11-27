import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { UserCampaignScreen } from '../screens';

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
      initialRouteName="UserCampaignScreen"
    >
      <CommunityStack.Screen
        options={{ headerShown: true }}
        name="UserCampaignScreen"
        component={UserCampaignScreen}
      />
      {/* <CommunityStack.Screen
        options={{ headerShown: false }}
        name="Question"
        component={QuestionScreen}
      /> */}

    </CommunityStack.Navigator>
  )
};

export default CommunityStackNavigator;
