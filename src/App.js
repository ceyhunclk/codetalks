import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import SignIn from './pages/SignIn';
import FlashMessage from 'react-native-flash-message';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from './utils/color';
import Messages from './pages/Messages';
const Stack = createNativeStackNavigator();
const App = () => {
  [isSignIn, setisSignIn] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(() => {
      setisSignIn(!!auth().currentUser);
    });
  }, []);

  const logOut = () => {
    auth().signOut();
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isSignIn ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
            <Stack.Screen
              name="Rooms"
              component={Rooms}
              options={{
                headerTitle: 'Odalar',
                headerTitleStyle: {
                  color: color.basebackgroundColor,
                  fontSize: 28,
                },
                headerRight: () => (
                  <Icon name="logout" size={32} onPress={logOut} />
                ),
              }}
            />
            <Stack.Screen
            name="Messages"
            component={Messages}
            options={{
              headerTitle: 'Mesajlar',
              headerTitleStyle: {
                color: color.basebackgroundColor,
                fontSize: 28,
              },
              headerRight: () => (
                <Icon name="logout" size={32} onPress={logOut} />
              ),
            }}
          />
            </>
            
          )}


        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};
export default App;
