import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import config from '../../config'

const Detalhes = (props) => {

  const coordenadas = {
    latitude: parseFloat(props.route.params.item.latitude),
    longitude: parseFloat(props.route.params.item.longitude),
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  }
  const montaUrlImage = props.route.params.item.image + config.googleApi


  return (


    <Fragment>
      <MapView style={styles.map}
        initialRegion={coordenadas}>
        <Marker coordinate={coordenadas}>
          <Image source={montaUrlImage} style={styles.picker} />
        </Marker>
      </MapView>

      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.item.title}  </Text>
        <Text style={styles.textoSimples}>{props.route.params.item.subtitle}</Text>
        <Text style={styles.textoSimples}>{props.route.params.item.cidade} - {props.route.params.item.estado} </Text>
        <Text style={styles.textoSimples}>Aberto: {props.route.params.item.aberto}</Text>
        <Text style={styles.textoSimples}>Contato: {props.route.params.item.telefone}</Text>
      </View>
    </Fragment>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10

  },
  imagem: {
    width: '100%',
    height: 200
  },
  tipografia: {
    fontFamily: 'Roboto',
    color: '#425501'
  },
  termo: {
    marginBottom: 12,
    marginLeft: 12,
  },
  map: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10
  },
  textoSimples: {
    fontSize: 18,
    paddingBottom: 5,
    color: '#575757'
  },
  picker: {
    width: 50,
    height: 50,
    borderWidth: 3,

    borderColor: "#913",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,


  }
});


export default Detalhes