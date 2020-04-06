import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const HistoryScreenSearchView = props => {

    return (
        <View style={styles.dataContainer}>
            <TouchableOpacity onPress={props.onPressShowRecord} >
                <View>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>{props.date}</Text>
            </View>
            <TouchableOpacity onPress={props.onPressDeleteRecord} >
                <View>
                    <Text style={styles.text}>Διαγραφή</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    dataContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 16
    }
});

export default HistoryScreenSearchView;