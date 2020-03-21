import React, { useState } from 'react';

import Colors from '../constants/Colors';
import RouteSearchScreenView from '../components/screens/RouteSearchScreenView';
import moment from 'moment';


const RouteSearchScreen = props => {
    const [startPoint, setStartPoint] = useState('Αφετηρία');
    const [endPoint, setEndPoint] = useState('Προορισμός');
    const [isDirect, setIsDirect] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);

    const startPointInputHandler = (startPointText) => {
        setStartPoint(startPointText);
    };
    const focusStartText = () => {
        if (startPoint === 'Αφετηρία') {
            setStartPoint('');
        };
    };
    const endPointInputHandler = (endPointText) => {
        setEndPoint(endPointText);
    };
    const focusEndText = () => {
        if (endPoint === 'Προορισμός') {
            setEndPoint('');
        };
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false);
        setDate(currentDate);
    };
    const showDatepicker = () => {
        setShowDate(true);
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTime(false);
        setTime(currentTime);
    };
    const showTimepicker = () => {
        setShowTime(true);
    };

    console.log('------------------');
    console.log(startPoint);
    console.log(endPoint);
    console.log(isDirect.toString());
    console.log(moment(date).utcOffset(2).format("DD-MM-YYYY"));
    console.log('------------------');

    return (
        <RouteSearchScreenView
            onFocusStartPoint={focusStartText}
            onChangeTextStartPoint={startPointInputHandler}
            startPointValue={startPoint}
            onFocusEndPoint={focusEndText}
            onChangeTextEndPoint={endPointInputHandler}
            endPointValue={endPoint}
            state={isDirect}
            onChangeSwitch={newValue => setIsDirect(newValue)}
            //Μέθοδοι σχετικά με την ημερομηνία
            onPressDate={showDatepicker}
            showDate={showDate}
            selectedDate={date}
            dateValue={moment(date).format("DD-MM-YYYY")}
            onChangeDate={onChangeDate}
            //Μέθοδοι σχετικά με την ώρα
            onPressTime={showTimepicker}
            showTime={showTime}
            selectedTime={time}
            timeValue={moment(time).format('HH:mm')}
            onChangeTime={onChangeTime}
            
            onPressSearch={() => {
                props.navigation.navigate({
                    routeName:'ResultPage',
                    params: {
                        selectedDate : date,
                        selectedTime: time,
                        startingPoint: startPoint,
                        endingPoint: endPoint,
                        isDirect: isDirect
                    }});
            }
            }
        />

    );
};


RouteSearchScreen.navigationOptions = {
    headerTitle: 'Αναζήτηση',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

export default RouteSearchScreen;