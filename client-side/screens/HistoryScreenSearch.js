import React from 'react';
import {FlatList } from 'react-native';

import HistoryScreenView from '../components/screens/HistoryScreenView';
import {SEARCH} from '../data/dummy-data';

const HistoryScreenSearch = props => {
    const renderSearchItem = itemData => {
        return (
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
            data={SEARCH}
            renderItem = {renderSearchItem}
        />
    );
};

export default HistoryScreenSearch;