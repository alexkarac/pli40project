import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HistoryScreenTrip from '../screens/HistoryScreenTrip';
import HistoryScreenSearch from '../screens/HistoryScreenSearch';
import Colors from '../constants/Colors';

const HistoryScreenNav = createMaterialTopTabNavigator({
    Tab1: {
        screen: HistoryScreenSearch,
        navigationOptions: {
            title: 'ΑΝΑΖΗΤΗΣΕΙΣ'
        }
    },
    Tab2: {
        screen: HistoryScreenTrip,
        navigationOptions: {
            title: 'ΤΑΞΙΔΙΑ'
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: Colors.inactiveColor,
        style: {
            backgroundColor: Colors.primaryColor
        },
        labelStyle: {
            fontSize: 16,
            fontFamily: 'open-sans'
        }
    }
}
);

HistoryScreenNav.navigationOptions = {
    headerTitle: 'Ιστορικό',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

export default HistoryScreenNav;