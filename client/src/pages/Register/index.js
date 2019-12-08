import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import logoGoHealthy from '../../assets/logo3.png';

export default function Menu({ navigation }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  return (
    <View style={styles.mainContainer}>

      <Image source={logoGoHealthy} resizeMode="contain" style={styles.logo} />   

      <Text style={styles.txtWarn}> Criar Novo Usuário </Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Digite um nome de usuário"
        value={username}
        onChangeText={value => setUsername(value)}
      />

    <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Digite seu melhor email"
        value={email}
        onChangeText={value => setEmail(value)}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Escolha uma senha"
        secureTextEntry={true}
        value={password}
        onChangeText={value => setPassword(value)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.txtBtn}> Vamos Lá! </Text>
      </TouchableOpacity>

    </View>
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
  logo: {
    marginLeft: 10,
    height: 55,
    marginBottom: 45,
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
  btn: {
    height: 50,
    width: "85%",
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  txtBtn: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  createAccountLabel: {
    flexDirection: "row",
    marginTop: 15
  },
  createAccountText: {
    fontSize: 14,
    color: "white"
  },
  createAccountButton: {
    fontSize: 14,
    color: "skyblue"
  },
  txtWarn: {
    marginBottom: 20,
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
})