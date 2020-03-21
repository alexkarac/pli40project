import React from 'react';
import {FlatList} from 'react-native';

import HistoryScreenView from '../components/screens/HistoryScreenView';
import {TRIP} from '../data/dummy-data';

const HistoryScreenTrip = props => {
    const renderTripItem = itemData => {
        return(
            <HistoryScreenView
                onPressShowRecord={()=>{}}
                onPressDeleteRecord={()=>{}}
                name={itemData.item.name}
                date={itemData.item.date}
            />
        );
    }
    
    return (
        <FlatList
            keyExtractor = {(item, index) => item.id.toString()}
            data={TRIP}
            renderItem = {renderTripItem}
        />
    );
};

export default HistoryScreenTrip;