import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from '../generalComponents/Input';
import Colors from '../../constants/Colors';
import MainButton from '../generalComponents/MainButton';
import Card from '../generalComponents/Card';
import TheDate from '../generalComponents/TheDate';
import FilterSwitch from '../generalComponents/FilterSwitch';

const RouteSearchScreen = props => {


    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.text}>Από :</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="characters"
                    onFocus={props.onFocusStartPoint}
                    onChangeText={props.onChangeTextStartPoint}
                    value={props.startPointValue}
                />
                <Text style={styles.text}>Προς :</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="characters"
                    onFocus={props.onFocusEndPoint}
                    onChangeText={props.onChangeTextEndPoint}
                    value={props.endPointValue}
                />
            </Card>
            <Card style={styles.card}>
                <View style={styles.filterSwitchContainer}>
                    <Text style={styles.text}>Απ' ευθείας : </Text>
                    <View style={styles.switchContainer}>
                        <FilterSwitch
                            trackColor={{ true: Colors.primaryColor }}
                            state={props.state}
                            onChange={props.onChangeSwitch}
                        />
                    </View>
                </View>
                <Text style={styles.text}>Ημερομηνία : </Text>
                <TheDate
                    onPressDate={props.onPressDate}
                    showDate={props.showDate}
                    selectedDate={props.selectedDate}
                    onChangeDate={props.onChangeDate}
                    dateValue={props.dateValue}

                    onPressTime={props.onPressTime}
                    showTime={props.showTime}
                    selectedTime={props.selectedTime}
                    onChangeTime={props.onChangeTime}
                    timeValue={props.timeValue}
                    
                />
            </Card>
            <MainButton
                style={styles.button}
                onPress={props.onPressSearch}
            >
                Αναζήτηση
            </MainButton>
        </View>
    );
};

RouteSearchScreen.navigationOptions = {
    headerTitle: 'Αναζήτηση',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: 300,
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        color: Colors.inputTextColor
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: Colors.primaryColor
    },
    card: {
        width: '90%',
        justifyContent: 'flex-start',
        marginTop: 30,
        backgroundColor: '#dcdcdc',
        elevation: 4
    },
    button: {
        marginTop: 40
    },
    filterSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    switchContainer: {
        justifyContent: 'center',
        marginHorizontal: 50
    }
});

export default RouteSearchScreen;