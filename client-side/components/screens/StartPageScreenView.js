import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MainButton from '../generalComponents/MainButton';
import MainButtonSmall from '../generalComponents/MainButtonSmall';
import Colors from '../../constants/Colors';

const StartPageScreenView = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <View style={styles.welcomeMessage}>
                    <Text style={styles.welcomeText}>Καλώς Ήρθες!</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.firstRowButton}>
                    <MainButton onPress={props.onPressMainPage}>
                        Επισκέπτης
                    </MainButton>
                </View>
                <View style={styles.secondRowButton}>
                    <MainButtonSmall onPress={props.onPressConnection}>
                        Σύνδεση
                    </MainButtonSmall>
                    <View style={{ paddingHorizontal: 20 }} />
                    <MainButtonSmall onPress={props.onPressSignUp}>
                        Εγγραφή
                    </MainButtonSmall>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/Logo.png')}
                />
            </View>
        </View>
    );
};
/*
StartPageScreen.navigationOptions = {
    headerTitle: 'Project pli40',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};
*/
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textContainer: {
        flex: 1
    },
    welcomeMessage: {
        paddingVertical: 30
    },
    welcomeText: {
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold',
        fontSize: 22
    },
    buttonContainer: {
        flex: 2,
        alignItems: 'center'
    },
    firstRowButton: {
        paddingVertical: 10
    },
    secondRowButton: {
        paddingVertical: 10,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 5
    }
});

export default StartPageScreenView;