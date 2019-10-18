import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

import logo from '../../assets/logo.png';

export default function Menu({ navigation }) {

  const [username, setUsername] = useState('')

  function handleUser(novoNome) {
    setUsername(novoNome)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#151C48" />

      <View style={styles.mainContainer}>

        <Image source={logo} resizeMode="contain" style={{ marginLeft: 10, height: 100, width: 290, marginBottom: 30, marginTop: 50 }} />

        <View style={styles.input}>
          <TextInput style={{ color: "#242424", marginLeft: 20 }} 
                    placeholder="Usuário ou Email"
                    onChangeText={handleUser} />
        </View>
        
        <View style={styles.input}>
          <TextInput style={{ color: "#242424", marginLeft: 20 }} placeholder="Senha"  />
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu', {username})}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}> Entrar </Text>
        </TouchableOpacity>

        <View style={{flexDirection: "row", marginTop: 15}}>
          
          <Text style={{ fontSize: 14, color: "white" }}> 
            Ainda não tem uma conta?
          </Text>

          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: "skyblue", marginLeft: 5 }}> 
              Cadastre-se aqui.
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151C48"
  },
  input: {
    height: 48,
    width: "85%",
    borderRadius: 4,
    marginTop: 6,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    height: 50,
    width: "85%",
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})