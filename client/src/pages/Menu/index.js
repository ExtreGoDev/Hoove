import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ navigation }) {

  const [busca, setBusca] = useState(null) // Campo da busca
  const [reloadPage, setReloadPage] = useState(1) // Campo para Reload de Página
  const [modalidades, setModalidades] = useState(["Corrida", "Caminhada", "Futebol", "Aeróbico", "Academia"])
  const [destaques, setDestaques] = useState(["Evento 1", "Evento 2", "Evento 3", "Evento 4", "Evento 5"])

  useEffect(() => {
    getData()
  }, [reloadPage])

  getData = async () => {
    try {
      // something
    } catch (e) {
      alert(e)
    }
  }

  return (
    <KeyboardAvoidingView eneabled style={styles.mainContainer}>

      <View style={styles.welcome}>
        <Text style={styles.txtWelcome}>
          Olá, Danilo!
        </Text>
        <TouchableOpacity onPress={() => { setReloadPage(reloadPage + 1) }} style={{ marginRight: 20, alignSelf: "center" }}>
          <Icon name="refresh" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        value={busca}
        onChangeText={value => setBusca(value)}
        placeholder="Busque um evento"
        editable={true}
      />


      {/* EVENTOS POR CATEGORIA */}

      <View style={styles.categContainer}>
        <Text style={styles.txtSecondary}> Eventos por categoria </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {modalidades.map((element, index) => {
            return (
              <TouchableOpacity key={index} style={styles.categTag}
                onPress={() => { navigation.navigate('Category', { element }) }}>
                <Text style={styles.categText}> {element} </Text>
              </TouchableOpacity>)
          })}
        </ScrollView>

      </View>


      {/* CONFIRA OS PRÓXIMOS EVENTOS */}

      <View style={styles.eventContainer}>
        <Text style={styles.txtSecondary}> Confira os próximos eventos </Text>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
          {destaques[0] != null ?
            destaques.map((e, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.eventCard}
                  onPress={() => { navigation.navigate('Event', { /**/ }) }}>
                  <View style={{ flexDirection: "row" }}>
                    <Image style={styles.eventIsOnIndicator} />
                    <View style={{ marginTop: 8 }}>
                      <Text style={styles.eventText}> {e} </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.eventTextSecondary}>Data: 10/10/2010 </Text>
                        <Text style={styles.eventTextSecondary}>Local: Maiobão </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>)
            })
            : <Text style={styles.txtNoEvents}> Sem eventos Recentes :( </Text>}
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
  welcome: {
    height: 50,
    width: screenWidth,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txtWelcome: {
    fontSize: 28,
    color: "white",
    marginLeft: 20,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 48,
    width: "85%",
    borderRadius: 4,
    marginTop: 6,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  txtSecondary: {
    fontSize: 22,
    color: "white",
    marginLeft: 12,
    marginBottom: 5,
    fontWeight: "bold"
  },
  categContainer: {
    height: 90,
    width: "100%",
    marginTop: 20
  },
  categText: {
    fontSize: 16,
    color: "white",
  },
  categTag: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    height: 45,
    width: 100,
    borderRadius: 4,
    backgroundColor: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  eventContainer: {
    height: 300,
    width: "100%",
    marginTop: 15
  },
  eventCard: {
    height: 75,
    borderRadius: 4,
    width: "85%",
    backgroundColor: "#f2f2f8",
    justifyContent: "center",
    alignSelf: "center",
    margin: 12
  },
  eventIsOnIndicator: { 
    backgroundColor: "skyblue", 
    height: 50, 
    width: 50, 
    marginLeft: 15, 
    borderRadius: 50,
    alignSelf: "center"
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
    marginLeft: 15
  },
  btn: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  txtNoEvents: {
    fontSize: 14,
    color: "#f2f2f8",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 25
  }
})