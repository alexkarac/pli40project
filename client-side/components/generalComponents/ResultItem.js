import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Card from '../generalComponents/Card';

const ResultItem = props => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={props.onSelect}>
            <Card style={styles.card}>
                <View style={{ borderBottomWidth: 1, flexDirection: 'row' }}>
                    <View style={{ paddingBottom: 15, paddingRight: 20 }}>
                        <Text style={styles.mainText}>Από : </Text>
                        <Text style={styles.mainText}>Προς : </Text>
                    </View>
                    <View>
                        <Text style={styles.placeText}>{props.fromCity}</Text>
                        <Text style={styles.placeText}>{props.toCity}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={{ width: '50%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.infoText}>Στάσεις : </Text>
                            <Text style={styles.infoText}>{props.stops}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.infoText}>Διάρκεια : </Text>
                            <Text style={styles.infoText}>{props.duration}</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.infoText}>Μετ.Μέσα : </Text>
                            <Text style={styles.infoText}>{props.transports}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.infoText}>Κόστος : </Text>
                            <Text style={styles.infoText}>{props.cost}</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 15,
        borderRadius: 10,
        elevation: 10
    },
    card: {
        width: '100%',
        height: 180
    },
    mainText: {
        fontFamily: 'open-sans',
        fontSize: 18
    },
    placeText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    infoText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        paddingTop: 15
    },
    infoContainer: {
        flexDirection: 'row'
    }
});

export default ResultItem;