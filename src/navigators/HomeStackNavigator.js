import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslations, View, useTheme } from '../core/dopebase';
import MentalStackNavigator from './UserStackNavigator';
import { useOnboardingConfig } from '../core/onboarding/hooks/useOnboardingConfig';

import CalendarStackNavigator from './CalendarStackNavigator';
import HomeDrawer from './HomeDrawerNavigator';
import CampaignStackNavigator from './CampaignStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommunityStackNavigator from './CommunityStackNavigator';
import UserStackNavigator from './UserStackNavigator';

const MainStack = createBottomTabNavigator();
const MainStackNavigator = () => {
  const { config } = useOnboardingConfig();
  const tabIcons = config.onboardingConfig.tabIcons;
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorSet.secondaryBackground }}>
      <MainStack.Navigator
        screenOptions={({ route }) => ({
          headerBackTitleVisible: false,
          headerBackTitle: localized('Back'),
          tabBarActiveTintColor: colorSet.primaryButtonTabActive,
          tabBarInactiveTintColor: colorSet.primaryButtonTextNonActive,
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === 'TheoDoi') {
              icon = focused ? (
                <View ph2 pv2 style={style.itemActiveStyle}>
                  {tabIcons.TheoDoi.focus}
                </View>
              ) : (
                tabIcons.TheoDoi.unFocus
              );
            } else if (route.name === 'ChienDich') {
              icon = focused ? (
                <View ph2 pv2 style={style.itemActiveStyle}>
                  {tabIcons['ChienDich'].focus}
                </View>
              ) : (
                tabIcons['ChienDich'].unFocus
              );
            } else if (route.name === 'CongDong') {
              icon = focused ? (
                <View ph2 pv2 style={style.itemActiveStyle}>
                  {tabIcons['CongDong'].focus}
                </View>
              ) : (
                  tabIcons['CongDong'].unFocus
              );
            } else if (route.name === 'TaiKhoan') {
              icon = focused ? (
                <View ph2 pv2 style={style.itemActiveStyle}>
                  {tabIcons['TaiKhoan'].focus}
                </View>
              ) : (
                  tabIcons['TaiKhoan'].unFocus
              );
            } else if (route.name === 'CaNhan') {
              icon = focused ? (
                <View ph2 pv2 style={style.itemActiveStyle}>
                  {tabIcons['CaNhan'].focus}
                </View>
              ) : (
                tabIcons['CaNhan'].unFocus
              );
            }
            return icon;
          },
          tabBarStyle: {
            backgroundColor: colorSet.primaryBackground,
            height: Dimensions.get('window').height * 0.08,
            paddingTop: height * 0.01,
            paddingBottom: height * 0.01,
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            borderColor: colorSet.secondaryBackground,
            shadowColor: '#000',
            shadowOffset: {
              width: 3,
              height: 3,
            },
            shadowOpacity: 0.25,
          },
        })}
        initialRouteName="TheoDoi">
        <MainStack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen
            name="TheoDoi"
            component={HomeDrawer}
            options={{ headerShown: false, tabBarLabel: 'Theo dõi' }}
          />
          <MainStack.Screen
            name="ChienDich"
            component={CampaignStackNavigator}
            options={{ headerShown: false, tabBarLabel: 'Chiến dịch' }}
          />
          <MainStack.Screen
            name="CongDong"
            component={CommunityStackNavigator}
            options={{ headerShown: false, tabBarLabel: 'Cộng dồng' }}
          />
          <MainStack.Screen
            name="TaiKhoan"
            component={UserStackNavigator}
            options={{ headerShown: false, tabBarLabel: 'Tài khoản' }}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </SafeAreaView>
  );
};

export default MainStackNavigator;

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  itemActiveStyle: {
    // backgroundColor: '#CCE048',
    // borderRadius: 1000,
    // borderWidth: 5,
    // borderColor: '#F0FE73',
    // position: 'absolute',
    // top: -Dimensions.get('window').height * 0.03,
  },
});
