import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function MyEvents({ navigation }) {

    const [nomeEvento, setNomeEvento] = useState()
    const [localEvento, setLocalEvento] = useState()
    const [publicoEvento, setPublicoEvento] = useState()
    const [dataEvento, setDataEvento] = useState()
    const [horaEvento, setHoraEvento] = useState()
    
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

  storeData = async () => {
    try {
      alert("Evento Criado!")
      navigation.navigate("MyEvents")
    } catch (e) {
      alert(e)
    }
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
                    selectedValue={publicoEvento}  
                    onValueChange={(newValue, itemIndex) => setPublicoEvento(newValue)}>

                    <Picker.Item label="Crianças (até 12 anos)" value="crianca" key="0"/>
                    <Picker.Item label="Adolescentes (entre 13 e 17 anos)" value="adolescentes" key="1"/>
                    <Picker.Item label="Adultos (entre 18 até 49 anos)" value="adultos" key="2"/>
                    <Picker.Item label="Idosos (de 50 anos ou mais) " value="idosos" key="3"/>
                </Picker>
            </View>               
            
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
        marginTop: 10
    }
})