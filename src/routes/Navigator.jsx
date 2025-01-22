import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {
  accountNavigations,
  authNavigations,
  dashboardNavigations,
} from './routes';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {authNavigations.map((item, index) => (
        <AuthStack.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </AuthStack.Navigator>
  );
};

const DashBoardStack = createStackNavigator();
const DashBoardStackNavigator = () => {
  return (
    <DashBoardStack.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {dashboardNavigations.map((item, index) => (
        <DashBoardStack.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </DashBoardStack.Navigator>
  );
};

const AccountStack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="AccountMain"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {accountNavigations.map((item, index) => (
        <AccountStack.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </AccountStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        initialRouteName="DashBoardStack"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <MainStack.Screen name="AuthStack" component={AuthStackNavigator} />
        <MainStack.Screen
          name="DashBoardStack"
          component={DashBoardStackNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
