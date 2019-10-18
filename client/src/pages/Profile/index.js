import React, { useState } from 'react';
import {
    CheckBox, Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView
} from 'react-native';
import logo from '../../assets/logo.png';

export default function Menu({ navigation }) {

    const username = navigation.getParam('username')

    return (
        <View style={styles.container}>

            <Image source={{uri: 'https://avatars3.githubusercontent.com/u/31120411?s=460&v=4'}} style={styles.img}></Image>

            <Text style={styles.txtName}>Danilo Caldas</Text>
            <Text style={styles.txtClass}>ASPIRANTE</Text>            

            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.txtBack}> Sair </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#151C48",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        backgroundColor: "white",
        height: 175,
        width: 175,
        borderRadius: 175,
        borderWidth: 8,
        borderColor: "skyblue",
        marginBottom: 30
    },
    txtName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5
    },
    txtClass: {
        fontSize: 20,
        color: "skyblue",
        fontWeight: "bold"
    },
    txtBack: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    btnBack: {
        height: 50,
        width: "85%",
        borderRadius: 4,
        marginTop: 15,
        backgroundColor: "#EB4949",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    }
});