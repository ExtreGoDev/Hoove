import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { white } from 'ansi-colors';

import api from '../../services/api'

export default function Event({ navigation }) {

    const eventData = navigation.getParam('e')
    const eventViewer = navigation.getParam('eventViewer')

    const [eventStatus, setEventStatus] = useState(eventData.status)
    const [eventViewerIsOn, setEventViewerIsOn] = useState(false)
    const [participantesLista, setParticipantesLista] = useState(eventData.participantesEvento)

    const dataHora = eventData.dataHoraInicio

    useEffect(() => {
        verifyEventParticipating()
    }, [participantesLista])

    startEvent = async () => {
        try {

            await api.post(`/eventos/${eventData.id}/participate`, {
                "id": eventViewer.id
            })

            const response = await api.get(`/eventos/${eventData.id}/`)
            const novosParticipantes = response.data.participantesEvento
            setParticipantesLista(novosParticipantes)

            alert("Você está participando deste evento!")

        }
        catch (e) {
            alert(e)
        }
    }

    verifyEventParticipating = async () => {
        try {
            var listaAux =[]
            participantesLista.filter( (e) => {return listaAux.push(e.id)})      

            listaAux.includes(eventViewer.id)
                ?
                setEventViewerIsOn(true)
                :
                setEventViewerIsOn(false)
        }
        catch (e) {

        }
    }

    

    endEvent = async () => {
        try {

            await api.delete(`eventos/${eventData.id}/quit?asp_id=${eventViewer.id}`)
            alert("Você saiu deste evento.")
            navigation.navigate('Menu')

        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.mainContainer}>


            {/* TITULO DA PÁGINA */}
            <View style={{ flexDirection: "row" }}>
                <Text numberOfLines={1} style={styles.txtTitle}>{eventData.nome}</Text>
                <Text style={styles.txtSubTitle}>3 dias p/ inciar</Text>
            </View>


            {/* DADOS DO EVENTO */}
            <View style={styles.eventDataBox}>
                <View>
                    <View style={styles.eventIndicator}></View>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.eventDataText}> Local: {eventData.lugar}</Text>
                    <Text style={styles.eventDataText}> Data: {dataHora.slice(8, 10)} / {dataHora.slice(5, 7)} / {dataHora.slice(0, 4)} </Text>
                    <Text style={styles.eventDataText}> Hora de Início: {dataHora.slice(11, 16)}</Text>
                    <Text style={styles.eventDataText}> Categoria: {eventData.categoria}</Text>
                </View>
            </View>


            {/* OPÇÕES E ASPIRANTES NO EVENTO */}
            <View style={{ flexDirection: "row" }}>
                <View style={styles.optionsBox}>
                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.txtSmallButton}> Descrição </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.txtSmallButton}> Detalhes </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOption}>
                        <Text style={styles.txtSmallButton}> Denunciar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.participationBox}>
                    <Text style={styles.participationTitle}> Participantes </Text>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                        {participantesLista[0] != null ? participantesLista.map((e, i) => {
                            return (<View style={styles.participantCard} key={i}>
                                <View style={styles.participantPhoto} />
                                <Text style={styles.participantName}> {e.nome} </Text>
                            </View>)
                        }) : <View style={{ marginLeft: 30 }}><Text style={styles.participantName}> Sem participantes </Text></View>}
                    </ScrollView>
                </View>

            </View>

            {/* BOTÃO DE ENTRAR/SAIR DO EVENTO */}
            {
                eventStatus
                    ?
                    eventViewerIsOn 
                    ?
                    <TouchableOpacity style={styles.btnEnd} onPress={endEvent}>
                        <Icon name="close" size={20} color="white" style={{ alignSelf: "center" }} />
                        <Text style={styles.txtBtn}>
                            Sair
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.btnStart} onPress={startEvent}>
                        <Icon name="check" size={20} color="white" style={{ alignSelf: "center" }} />
                        <Text style={styles.txtBtn}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    :
                    <Text style={styles.txtBtn}> O evento está desativado. </Text>
            }

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
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 15,
        fontWeight: "bold",
        width: "60%"
    },
    txtSubTitle: {
        fontSize: 13,
        color: "skyblue",
        marginTop: 25,
        marginLeft: 10
    },
    eventDataBox: {
        height: 150,
        width: "85%",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 8,
        flexDirection: "row"
    },
    eventIndicator: {
        backgroundColor: "skyblue",
        height: 120,
        width: 120,
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 8
    },
    eventDataText: {
        fontSize: 16,
        color: "#151C48",
        marginLeft: 15,
        marginTop: 12,
        width: 170
    },
    optionsBox: {
        marginTop: 35,
        backgroundColor: "white",
        height: 230,
        width: "45%",
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8
    },
    buttonOption: {
        height: 45,
        width: 120,
        borderRadius: 8,
        backgroundColor: "skyblue",
        marginTop: 23,
        alignSelf: "center"
    },
    participationBox: {
        height: 270,
        width: "55%",
    },
    participationTitle: {
        fontSize: 18,
        color: "white",
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    participantCard: {
        marginLeft: 25,
        flexDirection: "row",
        alignSelf: "center",
        height: 55,
        width: "85%",
    },
    participantPhoto: {
        height: 35,
        width: 35,
        backgroundColor: "white",
        borderRadius: 50,
        margin: 15
    },
    participantName: {
        fontSize: 16,
        color: "white",
        marginTop: 20
    },
    txtBtn: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        margin: 10
    },
    btnStart: {
        margin: 20,
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "skyblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    },
    btnEnd: {
        margin: 20,
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "#FFA6A6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    },
    txtSmallButton: {
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 13
    }
})