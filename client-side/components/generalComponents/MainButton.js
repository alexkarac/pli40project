import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

import Colors from '../../constants/Colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={{...props.style, ...styles.buttonContainer}}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor
    },
    button: {
        paddingVertical: 15,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 20
    }
});

export default MainButton;