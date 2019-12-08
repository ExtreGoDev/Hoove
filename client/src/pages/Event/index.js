import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Event({ navigation }) {

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

    removeData = async () => {
        try {
            alert("Evento Deletado")
            navigation.navigate("Menu")
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.mainContainer}>

            <Text style={styles.txtTitle}>Informações</Text>

            <TouchableOpacity style={styles.btn} onPress={removeData}>
                <Icon name="check" size={20} color="white" style={{ alignSelf: "center" }} />
                <Text style={styles.txtBtn}>
                    Deletar este evento
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#151C48"
    },
    txtTitle: {
        fontSize: 24,
        color: "white",
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: "bold"
    },
    txtBtn: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center"
    },
    btn: {
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "#FFA6A6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    }
})