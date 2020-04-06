import React from 'react';
import Colors from '../constants/Colors';
import MainScreenView from '../components/screens/MainScreenView';

const MainScreen = props => {
    return (
        <MainScreenView
            onPressTripPlan={() => {
                    props.navigation.navigate('TripPlanPage');
                }
            }
            onPressRouteSearch={() => {
                    props.navigation.navigate('RouteSearchPage');
                }
            }
            onPressHistory={() => {
                    props.navigation.navigate('HistoryPage');
                }
            }
            onPressProfile={() => {
                    props.navigation.navigate('ProfilePage');
                }
            }
        />
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'Project pli40',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};


export default MainScreen;