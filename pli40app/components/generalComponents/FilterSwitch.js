import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

import Colors from '../../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {

    }
});

export default FilterSwitch;