import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import MainButtonSmall from '../generalComponents/MainButtonSmall';
import Colors from '../../constants/Colors';

const TheDate = props => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <View style={styles.dateContainer}>
                    <Text
                        onPress={props.onPressDate}
                        style={styles.textContainer}
                    >
                        {props.dateValue}
                    </Text>

                    <MainButtonSmall
                        style={styles.button}
                        onPress={props.onPressDate}
                        title="datePicker"
                    >Ημερ/νία
                        </MainButtonSmall>
                </View>
                <View style={styles.dateContainer}>
                    <Text
                        onPress={props.onPressTime}
                        style={styles.textContainer}
                    >
                        {props.timeValue}
                    </Text>
                    <MainButtonSmall
                        style={styles.button}
                        onPress={props.onPressTime}
                        title="timePicker"
                    >Ώρα
                        </MainButtonSmall>
                </View>
            </View>
            {props.showDate && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={120}
                    value={props.selectedDate}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={props.onChangeDate}
                />
            )}
            {props.showTime && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={120}
                    value={props.selectedTime}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={props.onChangeTime}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    button: {
        width: 120,
        height: 30
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textContainer: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: Colors.inputTextColor,
        padding: 10
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default TheDate;