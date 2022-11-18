// In App.js in a new project

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      setLoading(false);
      if (value !== null) {
        // value previously stored
        setUserData(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userData ? (
          <>
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Screen3" component={Screen3} />
          </>
        ) : (
          <>
            <Stack.Screen name="Screen1" component={Screen1} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
