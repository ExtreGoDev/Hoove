import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const EventRow = ({ props }) => {
    return (
        <TouchableOpacity
            key={/* */}
            style={styles.eventCard}
            onPress={() => { navigation.navigate('Event', { /* */ }) }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ backgroundColor: "skyblue", height: 75, width: 75, marginLeft: 0, borderRadius: 4 }} />
                <View style={{ marginTop: 8 }}>
                    <Text style={styles.eventText}> {/* */} </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.eventTextSecondary}>Data: {/* */} </Text>
                        <Text style={styles.eventTextSecondary}>Local: {/* */} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        height: 75,
        borderRadius: 4,
        width: "85%",
        backgroundColor: "#f2f2f8",
        justifyContent: "center",
        alignSelf: "center",
        margin: 12
    },
    eventText: {
        fontSize: 20,
        color: "#151C48",
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 10
    },
    eventTextSecondary: {
        fontSize: 12,
        color: "#00A1D7",
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 17
    },
    txtNoEvents: {
        fontSize: 14,
        color: "#f2f2f8",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 25
    }
})