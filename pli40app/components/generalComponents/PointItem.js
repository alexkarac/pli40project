import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../generalComponents/Card';
import Colors from '../../constants/Colors';

const PointItem = props => {
    return (
        <View style={styles.textContainer}>
            <View style={{ paddingRight: 20 }}>
                <Text style={{...styles.mainText, ...styles.text}}>Από : </Text>
                <Text style={{...styles.mainText, fontFamily: 'open-sans-bold'}}>Προς : </Text>
            </View>
            <View>
                <Text style={{...styles.text,...styles.mainText}}>{props.fromCity}</Text>
                <Text style={styles.mainText}>{props.toCity}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 90,
        marginTop: 10
    },
    mainText: {
        fontFamily: 'open-sans',
        fontSize: 18
    },
    textContainer: {
        padding: 20,
        paddingLeft: 38,
        borderBottomWidth: 3,
        borderBottomColor: '#dcdcdc',
        backgroundColor: Colors.accentColor,
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'open-sans-bold',
        paddingBottom:15
    }
});

export default PointItem;