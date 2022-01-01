import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import routes from './routes';
import AuthStack from './AuthStack';
import NewActivity from '../pages/NewActivity';
import MainTab from './MainTab';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setHasSession);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!hasSession ? (
          <>
            <Stack.Screen name={routes.MAIN_TAB} component={MainTab} options={{headerShown: false}}/>
            <Stack.Screen
              name={routes.NEW_ACTIVITY_PAGE}
              component={NewActivity}
            />
          </>
        ) : (
          <>
            <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} options={{headerShown: false}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
