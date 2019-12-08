import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MyEvents({ navigation }) {

    useEffect(() => {
        getData()
    }, [])

    getData = async () => {
        try {
            // something
        } catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.myEvents}>
                <Text style={styles.txtMyEvents}> Meus eventos </Text>
            </View>

            <View style={styles.btnCreateEventLabel}>
                <TouchableOpacity style={styles.btnCreateEvent} onPress={() => { navigation.navigate('CreateEvent') }}>
                    <Icon name="add-circle" size={20} color="white" style={{ marginRight: 5 }} />
                    <Text style={styles.btnCreateEventText}>
                        Criar Evento
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#151C48"
    },
    myEvents: {
        height: 50,
        width: screenWidth,
        marginTop: 10
    },
    txtMyEvents: {
        fontSize: 27,
        color: "white",
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    btnCreateEventLabel: {
        justifyContent: "center",
        alignItems: "center"
    },
    btnCreateEvent: {
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "skyblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    btnCreateEventText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
})