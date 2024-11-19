import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, DetailScreen, ScheduleScreen, TrackMeal } from '../screens';
import CustomDrawerContent from '../components/Drawer/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      // drawerContent={props => <CustomDrawerContent {...props} />}>
      drawerContent={props => { }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="TrackMeal"
        component={TrackMeal}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
