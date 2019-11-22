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
    ScrollView,
    Picker
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MyEvents({ navigation }) {

    const [nomeEvento, setNomeEvento] = useState()
    const [localEvento, setLocalEvento] = useState()
    const [publicoEvento, setPublicoEvento] = useState()
    const [dataEvento, setDataEvento] = useState()
    const [horaEvento, setHoraEvento] = useState()


    // Date Time Picker
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)

    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true)
    }

    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false)
    }

    const handleDatePicked = dateTime => {
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
                    Detalhes do evento
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
                    <Picker.Item label="Adolescentes (entre 13 e 17 anos)" value="adolesc" key="1"/>
                    <Picker.Item label="Adultos (entre 18 até 49 anos)" value="adulto" key="2"/>
                    <Picker.Item label="Idosos (de 50 anos ou mais) " value="idoso" key="3"/>
                </Picker>
            </View>               
            
            <TouchableOpacity style={styles.pickerBg} onPress={showDateTimePicker}>
                <Text>Aperte aqui para selecionar uma data e horário</Text>
            </TouchableOpacity>

            <DateTimePicker
                mode="datetime"
                is24Hour={true}
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                datePickerModeAndroid="spinner"
            />

            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('MyEvents',{
                nome: nomeEvento,
                local: localEvento,
                publico: publicoEvento,
                data: dataEvento,
                hora: horaEvento
            })}}>                    
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
    },

    // Seletor de Público
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

    // Textos
    txt: {
        fontSize: 24,
        color: "white",
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    txtSecond: {
        fontSize: 18,
        color: "white",
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold"
    },

    // Botão
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