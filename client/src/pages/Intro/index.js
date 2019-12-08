import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Intro({ navigation }) {

    const dots = [1, 2, 3]
    scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, screenWidth)

    return (
        <>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                scrollEventThrottle={16}>

                <StatusBar barStyle="light-content" backgroundColor="#151C48" />

                <View style={styles.screen}>
                    <View resizeMode="contain" style={styles.img}>
                        <Icon name="running" size={150} color="#00A1D7" />
                    </View>
                    <Text style={styles.txtScreen}> Busque por atividades físicas </Text>
                </View>

                <View style={styles.screen}>
                    <View resizeMode="contain" style={styles.img}>
                        <Icon name="user-friends" size={125} color="#00A1D7" />
                    </View>
                    <Text style={styles.txtScreen}> Encontre incentivo todos os dias </Text>
                </View>

                <View style={styles.screen}>
                    <View resizeMode="contain" style={styles.img}>
                        <Icon style={{ marginTop: 15 }} name="heartbeat" size={150} color="#00A1D7" />
                    </View>
                    <Text style={styles.txtScreen}> Melhore sua saúde </Text>
                </View>

            </ScrollView>

            <View style={styles.dotsCounter}>
                <View style={{ flexDirection: 'row' }}>
                    {dots.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });

                        return (
                            <Animated.View key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: '#f2f2f8',
                                    margin: 8,
                                    borderRadius: 5
                                }}
                            />
                        );
                    })}
                </View>
            </View>

            <TouchableOpacity
                style={styles.bottomButton}
                onPress={() => { navigation.navigate('Main') }}>
                <Text style={styles.txtBtn}>Vamos começar</Text>
            </TouchableOpacity>

        </>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    img: {
        backgroundColor: "white",
        height: 250,
        width: 250,
        borderRadius: 150,
        marginBottom: 50,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    screen: {
        height: screenHeight - 100,
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#151C48"
    },
    txtBtn: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    txtScreen: {
        fontSize: 22,
        color: "white"
    },
    btnInvisible: {
        height: 50,
        width: 270,
        borderRadius: 8,
        marginTop: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    dotsCounter: {
        backgroundColor: "#151C48",
        height: 70,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButton: {
        height: 60,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00A1D7"
    }
})