import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../pages/Dashboard';
import Leaderboard from '../../pages/Leaderboard';
import PastActivities from '../../pages/PastActivities';
import routes from '../routes';

export default function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.DASHBOARD_PAGE}
        component={Dashboard}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="view-dashboard" {...rest} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={routes.PAST_ACTIVITIES_PAGE}
        component={PastActivities}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="wrap" {...rest} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={routes.LEADERBOARD_PAGE}
        component={Leaderboard}
        options={{
          tabBarIcon: ({...rest}) => <Icon name="trophy-outline" {...rest} />,
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}
