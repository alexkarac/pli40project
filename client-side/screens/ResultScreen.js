import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

import Colors from '../constants/Colors';
import ResultItem from '../components/generalComponents/ResultItem';
import { ROUTE } from '../data/dummy-data';

const ResultScreen = props => {
    const tripDate = props.navigation.getParam('selectedDate');
    const tripTime = props.navigation.getParam('selectedTime');
    const startPoint = props.navigation.getParam('startingPoint');
    const endPoint = props.navigation.getParam('endingPoint');
    const isDirect = props.navigation.getParam('isDirect');
    let selectedStops = 10;
    if (isDirect) {
        selectedStops = 0;
    };
    const availableRoutes = ROUTE.filter(
        route => (
            route.startPoint.match(startPoint) &&
            route.endPoint.match(endPoint)) &&
            route.stops <= selectedStops
    );
    const renderResultItem = itemData => {
        return (
            <ResultItem
                fromCity={itemData.item.startPoint}
                toCity={itemData.item.endPoint}
                stops={itemData.item.stops}
                duration={itemData.item.duration}
                cost={itemData.item.cost}
                transports={itemData.item.transport}
                onSelect={() => {
                }}
            />
        );
    };

    return (
        <View>
            <Text>{availableRoutes.length}</Text>
            <Text>{moment(tripTime).format('HH:mm')}</Text>
            <Text>{moment(tripDate).format("DD-MM-YYYY")}</Text>
            <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={availableRoutes}
                renderItem={renderResultItem}
            />
        </View>
    );
}


ResultScreen.navigationOptions = {
    headerTitle: 'Αποτέλεσμα Αναζήτησης',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ResultScreen;