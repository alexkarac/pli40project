import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripPlanScreenView = props => {
    return (
        <View style={styles.screen}>
            <Text> Trip Planning Page !!  </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TripPlanScreenView;