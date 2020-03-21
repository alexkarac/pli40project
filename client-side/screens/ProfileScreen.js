import React from 'react';

import { USER } from '../data/dummy-data';
import Colors from '../constants/Colors';
import ProfileScreenView from '../components/screens/ProfileScreenView';

const ProfileScreen = props => {

    const userId = 1;

    const selectedUser = USER.find(user => user.id === userId);

    return (
        <ProfileScreenView 
            photo = {selectedUser.photoRoute}
            password = {selectedUser.password}
            email = {selectedUser.email}
            name = {selectedUser.name}
            surname = {selectedUser.surname}
        />
    );
}

ProfileScreen.navigationOptions = {
    headerTitle: 'Προφίλ',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

export default ProfileScreen;