import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Leaderboard from '../../pages/Leaderboard';
import PastActivities from '../../pages/PastActivities';
import routes from '../routes';

export default function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.DASHBOARD_PAGE} component={Dashboard} />
      <Tab.Screen
        name={routes.PAST_ACTIVITIES_PAGE}
        component={PastActivities}
      />
      <Tab.Screen name={routes.LEADERBOARD_PAGE} component={Leaderboard} />
    </Tab.Navigator>
  );
}
