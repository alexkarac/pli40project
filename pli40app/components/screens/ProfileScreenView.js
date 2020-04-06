import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Card from '../generalComponents/Card';
import MainButton from '../generalComponents/MainButton';

const ProfileScreenView = props => {
    return (
        <View>
            <Card style={styles.card}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/user-img.png')}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.mainText}>Όνομα</Text>
                        <Text style={styles.mainText}>Επώνυμο</Text>
                        <Text style={styles.mainText}>e-mail</Text>
                        <Text style={styles.mainText}>Κωδικός</Text>
                    </View>
                    <View>
                        <Text style={styles.infoText}>{props.name}</Text>
                        <Text style={styles.infoText}>{props.surname}</Text>
                        <Text style={styles.infoText}>{props.email}</Text>
                        <Text style={styles.infoText}>{props.password}</Text>
                    </View>
                </View>
            </Card>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <MainButton onPress={() => {}}>
                        Επεξεργασία
                    </MainButton>
                </View>
                <View style={styles.button}>
                    <MainButton onPress={() => {}} >
                        Διαγραφή Προφίλ
                    </MainButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        height: 400,
        elevation: 2,

    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        paddingBottom: 10,
        fontSize: 18
    },
    infoText: {
        fontFamily: 'open-sans',
        paddingBottom: 10,
        fontSize: 18
    },
    image: {
        width: 200,
        height: 200,
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        paddingTop: 20
    }
});

export default ProfileScreenView;