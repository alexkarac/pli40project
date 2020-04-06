import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ResultItem from '../generalComponents/ResultItem';
import { ROUTE } from '../../data/dummy-data';

const ResultScreenView = props => {

    const renderResultItem = itemData => {
        return (
            <ResultItem
                fromCity={itemData.item.startPoint}
                toCity={itemData.item.endPoint}
                stops={''}
                duration={itemData.item.duration}
                cost={itemData.item.cost}
                transports={itemData.item.transport}
            />
        );
    }
    
    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={ROUTE}
                renderItem={renderResultItem}
            />
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

export default ResultScreenView;