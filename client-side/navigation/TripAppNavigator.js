import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartPageScreen from '../screens/StartPageScreen';
import MainScreen from '../screens/MainScreen';
import TripPlanScreen from '../screens/TripPlanScreen';
import RouteSearchScreen from '../screens/RouteSearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
import HistoryNavigator from '../navigation/HistoryNavigator';

const TripAppNavigator = createStackNavigator({
    StartPage: StartPageScreen,
    MainPage: MainScreen,
    TripPlanPage: {
      screen: TripPlanScreen
    },
    RouteSearchPage: RouteSearchScreen,
    ResultPage: ResultScreen,
    HistoryPage: HistoryNavigator,
    ProfilePage: ProfileScreen

});

export default createAppContainer(TripAppNavigator);