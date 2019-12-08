import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api'

export default function MyEvents({ navigation }) {

    const [create, setCreate] = useState([])
    const [participante, setParticipante] = useState([])

    useEffect(() => {
        getData()
    }, [])

    getData = async () => {
        try {
            
            const response = await api.get('/eventos')
            const eventos = response.data
            setCreate(eventos)

        } catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.myEvents}>
                <Text style={styles.txtMyEvents}> Meus Eventos </Text>
            </View>

            <View>
                <Text style={styles.txtMyEventsSecondary}> Criados </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    {
                    create[0] != null
                    ?
                    create.map((e,i) => <TouchableOpacity key={i} style={styles.evetCard}>
                        <Text style={styles.nameEventCard}>{e.nome}</Text>
                    </TouchableOpacity>)
                    :
                    <Text style={styles.txtWarning}> Você ainda não criou nenhum evento. </Text>
                    }
                </ScrollView>
            </View>

            <View>
                <Text style={styles.txtMyEventsSecondary}> Participando </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    { 
                    participante[0] != null
                    ?
                    participante.map((e,i) => <TouchableOpacity key={i} style={styles.partCard}>
                        <Text style={styles.namePartCard}>{e.nome}</Text>
                    </TouchableOpacity>)
                    :
                    <Text style={styles.txtWarning} > Você ainda não está participando de nenhum evento. </Text>
                    }
                </ScrollView>
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
        marginTop: 15
    },
    txtMyEvents: {
        fontSize: 27,
        color: "white",
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    txtMyEventsSecondary:{
        fontSize: 20,
        color: "white",
        marginLeft: 30,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    evetCard: {
        height: 90,
        width: 150,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "skyblue",
        borderRadius: 4
    },
    partCard: {
        height: 90,
        width: 150,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "white",
        borderRadius: 4
    },
    nameEventCard: {
        marginTop: 10,
        marginLeft: 15,
        fontSize:   19,
        color: "#151C48",
        fontWeight: "bold"
    },
    namePartCard: {
        marginTop: 10,
        marginLeft: 15,
        fontSize:   19,
        color: "#151C48",
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
        marginTop: 30
    },
    btnCreateEventText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    txtWarning: {
        margin:10,
        color: "white",
        alignSelf: "center"
    }
})