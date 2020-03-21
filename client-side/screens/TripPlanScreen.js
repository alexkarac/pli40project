import React from 'react';

import Colors from '../constants/Colors';
import TripPlanScreenView from '../components/screens/TripPlanScreenView';

const TripPlanScreen = props => {
    return (
        <TripPlanScreenView/>
    );
};

TripPlanScreen.navigationOptions = {
    headerTitle: 'Ξεκίνα να σχεδιάζεις',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

export default TripPlanScreen;