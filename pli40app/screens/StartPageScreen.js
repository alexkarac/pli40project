import React from 'react';

import Colors from '../constants/Colors';
import StartPageScreenView from '../components/screens/StartPageScreenView';

const StartPageScreen = props => {
    return (
        <StartPageScreenView
            onPressMainPage={()=> {
                props.navigation.navigate('MainPage');
            }}
            onPressConnection={()=>{}}
            onPressSignUp={()=>{}}
        />
    );
};

StartPageScreen.navigationOptions = {
    headerTitle: 'Project pli40',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

export default StartPageScreen;