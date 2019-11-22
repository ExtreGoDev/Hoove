import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MyEvents({ navigation }) {


    return (
        <View style={styles.mainContainer}>

            <Text style={styles.txt}> Meus eventos</Text>

            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('CreateEvent')}}>                    
                    <Icon name="add-circle" size={20} color="white" style={{marginRight: 5}}/>
                    <Text style={styles.txtBtn}>
                        Criar Evento
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.txtSecond}> Eventos Criados</Text>

            <Text style={styles.txtSecond}> Participando</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#151C48"
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 24,
        color: "white",
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    txtBtn: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    btn: {
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
    txtSecond: {
        fontSize: 18,
        color: "white",
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold"
    }
})