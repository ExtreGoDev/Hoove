import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';

import api from '../../../services/api'
import { Image } from 'react-native-animatable';

export default function MyEvents({ navigation }) {

    const [nomeEvento, setNomeEvento] = useState()
    const [localEvento, setLocalEvento] = useState()
    const [tipoEvento, setTipoEvento] = useState("Corrida")
    const [dataEvento, setDataEvento] = useState()
    const [horaEvento, setHoraEvento] = useState()
    const [foto, setFoto] = useState(null)
    
    storeData = async () => {
        try {

            await api.post('/eventos', {
                "nome": nomeEvento,
                "lugar": localEvento,
                "dataHoraInicio": `${dataEvento.slice(8,10)}/${dataEvento.slice(5,7)}/${dataEvento.slice(0,4)} ${horaEvento.slice(0,2)}:${horaEvento.slice(3,5)}`,
                "duracao": "24",
                "categoria": tipoEvento,
                "status": true
              })

            alert(`O evento, ${ nomeEvento } foi criado!`)
            navigation.navigate("MyEvents")

        } catch (e) {
        alert(e)
        }
    }

    var options = {
        noData: true
     };

    handlePhoto = () => {        
         ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
                const source = response.uri
                setFoto(source)
            }
         });          
    }

    // Date Time Picker
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
    showDateTimePicker = () => setIsDateTimePickerVisible(true)
    hideDateTimePicker = () => setIsDateTimePickerVisible(false)
    handleDatePicked = dateTime => {
        date = JSON.stringify(dateTime).slice(1,11)
        time = JSON.stringify(dateTime).slice(12,20)
        setDataEvento(date)
        setHoraEvento(time)
        hideDateTimePicker();
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.boxTxt}>
                <Text style={styles.txtSecond}> 
                    Detalhes do Evento
                </Text>
            </View>

            <TextInput             
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Nome do evento"
                style={styles.input}
                value={nomeEvento}
                onChangeText={(value)=>{setNomeEvento(value)}}/>

            <TextInput             
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Local"
                style={styles.input}
                value={localEvento}
                onChangeText={(value)=>{setLocalEvento(value)}}/>

            <View style={styles.pickerBg}>
                <Picker
                    style={styles.picker}
                    selectedValue={tipoEvento}  
                    onValueChange={(newValue, itemIndex) => setTipoEvento(newValue)}>

                    <Picker.Item label="Corrida" value="Corrida" key="0"/>
                    <Picker.Item label="Futebol" value="Futebol" key="1"/>
                    <Picker.Item label="Academia" value="Academia" key="2"/>
                    <Picker.Item label="Aeróbico" value="Aeróbico" key="3"/>
                    <Picker.Item label="Caminhada" value="Caminhada" key="4"/>
                </Picker>
            </View>               
            
            <TouchableOpacity style={styles.uploadPhoto} onPress={handlePhoto}>
                <Text> Escolha uma foto </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerBg} onPress={showDateTimePicker}>
                {dataEvento != null? <Text>Data: {dataEvento} // Hora: {horaEvento}</Text>:<Text>Aperte aqui para selecionar uma data e horário</Text>}
            </TouchableOpacity>

            <DateTimePicker
                mode="datetime"
                is24Hour={true}
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                datePickerModeAndroid="spinner"
            />

            <TouchableOpacity style={styles.btn} onPress={storeData}>                    
                <Icon name="check" size={20} color="white" style={{marginRight: 5}}/>
                <Text style={styles.txtBtn}>
                    Criar
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#151C48",
        alignItems: "center",
    },
    input: {
        height: 46,
        width: "85%",
        color: "black",
        borderRadius: 4,
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor: "white"
    },
    boxTxt: {
        height: 46,
        width: "88%",
        marginBottom: 15,
    },
    picker: {
        height: 50, 
        width: "85%"
    },
    pickerBg: {
        height: 50,
        width: "85%",
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    uploadPhoto: {
        height: 50,
        width: "85%",
        backgroundColor: "#A6A6FF",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    txt: {
        fontSize: 24,
        color: "white",
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    txtSecond: {
        fontSize: 28,
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
        marginTop: 30
    }
})