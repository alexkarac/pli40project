import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainButton from '../generalComponents/MainButton';
import SecondaryButton from '../generalComponents/SecondaryButton';
import Colors from '../../constants/Colors';

const MainScreenView = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeText}>Καλώς Ήρθες!</Text>
            </View>

            <View style={styles.buttonContainer} >
                <MainButton
                    style={styles.mainButton}
                    onPress={props.onPressTripPlan}
                >
                    Σχεδίαση Ταξιδιού
                </MainButton>
            </View>

            <View style={styles.buttonContainer}>
                <SecondaryButton
                    style={styles.mainButton}
                    onPress={props.onPressRouteSearch}
                    >
                    Αναζήτηση Διαδρομής
                </SecondaryButton>
            </View>

            <View style={styles.buttonContainer} >
                <SecondaryButton
                    style={styles.mainButton}
                    onPress={props.onPressHistory} 
                    >
                    Ιστορικό
                </SecondaryButton>
            </View>

            <View style={styles.buttonContainer} >
                <SecondaryButton
                    style={styles.mainButton}
                    onPress={props.onPressProfile} 
                    >
                    Προφίλ
                </SecondaryButton>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonContainer: {
        paddingVertical: 20
    },
    welcomeMessage: {
        paddingTop: 80,
        paddingBottom: 100
    },
    welcomeText: {
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
});

export default MainScreenView;