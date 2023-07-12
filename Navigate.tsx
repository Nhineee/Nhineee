import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './start';
import SignIn from './signIn';
import SignUp from './signUp';
import home from './home';
import Noti from './notiView';
import account from './Account';
import MainScreen from './App';



  const Stack = createNativeStackNavigator();
  
  function navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="start">
          <Stack.Screen name="start" component={Start} options={{headerShown: false,animation: 'none'}}  />
          <Stack.Screen name="signIn" component={SignIn} options={{headerShown: false, animation: 'none'}}/>
          <Stack.Screen name="signUp" component={SignUp} options={{headerShown: false, animation: 'none'}}/>
          <Stack.Screen name="home" component={home} options={{headerShown: false, animation: 'none'}}/>
          <Stack.Screen name="noti" component={Noti} options={{headerShown: false, animation: 'none'}}/>
          <Stack.Screen name="Account" component={account} options={{headerShown: false, animation: 'none'}}/>
          <Stack.Screen name="App" component={MainScreen} options={{headerShown: true, animation: 'none'}}/>
        </Stack.Navigator>
      </NavigationContainer>

      
    );
  }
 
  export default navigation ;

// ... other code from the previous section