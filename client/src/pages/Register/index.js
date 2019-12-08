import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import logoGoHealthy from '../../assets/logo.png';

import api from '../../services/api'

export default function Menu({ navigation }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  setData = async () => {
    try {

      await api.post('/aspirantes', {
        "nome": username,
        "email": email,
        "numero": "99883135861",
        "senha": password,
        "idade": 99
      })
      alert(`Olá, ${username}!`)
      navigation.navigate('Menu')

    } catch (e) {

      alert("Ocorreu algum erro na criação do seu perfil. :o")

    }
  }

  return (
    <View style={styles.mainContainer}>

      <Image source={logoGoHealthy} resizeMode="contain" style={styles.logo} />

      <Text style={styles.txtInfo}> Dados Pessoais</Text>
      <View style={styles.stripeSeparator}></View>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Digite seu nome"
        value={username}
        onChangeText={value => setUsername(value)}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Digite seu email"
        value={email}
        onChangeText={value => setEmail(value)}
      />

      <Text style={styles.txtInfo}> Senha </Text>
      <View style={styles.stripeSeparator}></View>

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

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Repita a senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
      />

      <View style={styles.contractTerms}>
        <CheckBox/>
        <Text style={styles.contractTermsText}>Eu aceito os termos de uso</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={setData}>
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
    backgroundColor: "#151C48"
  },
  logo: {
    marginLeft: 10,
    height: 55,
    marginBottom: 25,
    alignSelf: "center"
  },
  input: {
    height: 48,
    width: "85%",
    borderRadius: 4,
    marginTop: 6,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 15,
    alignSelf: "center"
  },
  btn: {
    height: 50,
    width: "85%",
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
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
  txtInfo: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  stripeSeparator: {
    height:2,
    width: "85%",
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 2,
    marginTop: 4
  },
  contractTerms: {
    flexDirection: "row", 
    alignSelf: "center",
    marginTop: 10
  },
  contractTermsText: {
    marginTop: 6,
    color: "white"
  }
})