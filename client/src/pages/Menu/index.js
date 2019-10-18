import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView
} from 'react-native';

export default function Menu({ navigation }) {

  const username = navigation.getParam('username')

  const [busca, setBusca] = useState(null)
  const [modalidades, setModalidades] = useState(["Corrida", "Caminhada", "Futebol", "Aeróbico", "Academia"])
  const [destaques, setSestaques] = useState(["Passei no parque", "Corrida pela saúde", "Idosos na ativa", "Pernas pra que te quero", "Pelada dos Primos do Maiobão", "Caminhada da Primeira Idade"])

  function handleText(novaBusca) {
    setBusca(novaBusca)
  }

  return (
      <KeyboardAvoidingView eneabled style={styles.mainContainer}>

        <StatusBar barStyle="light-content" backgroundColor="#151C48" />

        <TouchableOpacity onPress={() => {navigation.navigate('Profile', {username})}} style={{height: 40, width: screenWidth, marginTop: 10}}>
          <Text style={styles.txtName}>Olá, { username != '' ? username : 'Visitante'}!</Text>
        </TouchableOpacity>

        <View style={styles.input}>
          <TextInput style={{ color: "#242424", marginLeft: 20 }}
            onChangeText={handleText}
            placeholder="Busque um evento" />
        </View>

        {/* EVENTOS POR CATEGORIA */}

        <View style={{ height: 90, width: "100%", marginTop: 20 }}>

          <Text style={styles.txt}> Eventos por categoria </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {
              modalidades.map((element, index) => {

                return (
                  <TouchableOpacity key={index} 
                                    style={styles.imgBkg}
                                    onPress={() => {navigation.navigate('Category', { element })}}>

                    <Text style={styles.txtCat}> {element} </Text>

                  </TouchableOpacity>)

              })
            }

          </ScrollView>

        </View>

        {/* EVENTOS PRÓXIMOS */}

        <View style={{ height: 400, width: "100%", marginTop: 5 }}>

          <Text style={styles.txt}> Confira os próximos eventos </Text>

          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>

            {
              destaques.map((element, index) => {
                return (

                  <TouchableOpacity key={index} 
                                    style={styles.rowEvents}
                                    onPress={() => {navigation.navigate('Event', { element })}}>

                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{ backgroundColor:"skyblue", height: 75, width: 75, marginLeft: 0, borderRadius: 4 }}
                      />

                      <View style={{ marginTop: 8 }}>

                        <Text style={styles.txtEvt}> {element} </Text>

                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.txtEvtDet}>Data: 25/25/2025 </Text>
                          <Text style={styles.txtEvtDet}>Local: Centro </Text>
                        </View>

                      </View>
                    </View>

                  </TouchableOpacity>

                )
              })
            }

          </ScrollView>

        </View>
      </KeyboardAvoidingView>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight,
    alignItems: "center",
    backgroundColor: "#151C48"
  },
  input: {
    height: 48,
    width: "95%",
    borderRadius: 4,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    marginTop: 10
  },
  btn: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgBkg: {
    margin: 8,
    height: 45,
    width: 100,
    borderRadius: 4,
    backgroundColor: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rowEvents: {
    margin: 10,
    height: 75,
    borderRadius: 4,
    width: "95%",
    backgroundColor: "#f2f2f8",
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  txtCat: {
    fontSize: 16,
    color: "white",
  },
  txtEvt: {
    fontSize: 20,
    color: "#151C48",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
  },
  txtEvtDet: {
    fontSize: 12,
    color: "#00A1D7",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 17
  },
  txtName: {
    fontSize: 24,
    color: "white",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold"
  }
})