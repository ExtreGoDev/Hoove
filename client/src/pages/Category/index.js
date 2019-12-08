import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';

import api from '../../services/api'

export default function Category ({ navigation }) {

    const element = navigation.getParam('element')
    const [eventList, setEventList] = useState([])

    useEffect(() => {
        getData()
      }, [])
    
      getData = async () => {
        try {
    
          const response = await api.get('/eventos')
          const eventos = response.data

          const filtered = eventos.filter( (e,i) => {
              if (e.categoria == element){
                  return e
              }})

          setEventList(filtered)
    
        } catch (e) {
          alert(e)
        }
      }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.txtTitle}>{ element }</Text>

            <View>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
                    {
                    eventList[0] != null
                    ?
                    eventList.map((e,i) => <TouchableOpacity 
                        key={i} 
                        style={styles.evetCard} 
                        onPress={() => { navigation.navigate('Event', {e})}}>
                        <Text style={styles.nameEventCard}>{e.nome}</Text>
                    </TouchableOpacity>)
                    :
                    <Text style={styles.txtWarning}> Não foram encontrados eventos. </Text>
                    }
                </ScrollView>
            </View>

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
        margin: 15,
        fontWeight: "bold"
    },
    evetCard: {
        height: 90,
        width: "85%",
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "skyblue",
        borderRadius: 4,
        alignSelf: "center"
    },
    nameEventCard: {
        marginTop: 30,
        fontSize:   20,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
    },
    txtWarning: {
        margin:10,
        color: "white",
        alignSelf: "center",

    }
})