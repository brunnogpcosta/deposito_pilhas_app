import React, { Fragment, useState } from 'react'


import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


const Detalhes = (props) => {


  return (
    <Fragment>
      <SafeAreaView>
        <Image
          style={styles.imagem}
          source={props.route.params.item.image}
        />

      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.item.title}  </Text>
        <Text style={styles.textoSimples}>{props.route.params.item.subtitle}</Text>
        <Text style={styles.textoSimples}>{props.route.params.item.cidade} - {props.route.params.item.estado} </Text>
        <Text style={styles.textoSimples}>CEP: {props.route.params.item.cep}</Text>
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

  title: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  textoSimples: {
    fontSize: 18,
    paddingBottom: 5,
    color: '#575757'
  }
});


export default Detalhes