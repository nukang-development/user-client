import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Register, Dashboard, ListTukang, Detail, Chat, Order, Submit } from './src/screens'
import Done from './src/screens/Done'
import { Provider } from 'react-redux'
import store from './src/stores/index'
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} ></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="ListTukang" options={{headerShown: false}} component={ListTukang}></Stack.Screen>
        <Stack.Screen name="Detail" options={{headerShown: false}} component={Detail}></Stack.Screen>
        <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
        <Stack.Screen name="Order" component={Order}></Stack.Screen>
        <Stack.Screen name="Submit" options={{headerShown: false}} component={Submit}></Stack.Screen>
        <Stack.Screen name="Done" options={{headerShown: false}} component={Done}></Stack.Screen>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
