import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import Depositos from '../data/depositos'


const Home = ({ navigation }) => {

  const [temp] = useState(false)
  const [text, onChangeText] = React.useState("");

  const fitlro = []
  const DATA = Depositos;

  const Item = ({ title, image, subtitle, id, cep, aberto, telefone, bairro, cidade, estado }) => (


    <TouchableOpacity style={styles.item} onPress={() => {
      navigateDetail({ id, image, title, subtitle, cep, aberto, telefone, bairro, cidade, estado })
    }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

    </TouchableOpacity >
  );

  depositoFilter = () => {
    if (text == '') {
      return filtro = DATA.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    } else {
      const dadosFiltrados = DATA.filter(deposito => deposito.subtitle.toLowerCase().includes(text.toLowerCase()))
      return filtro = dadosFiltrados.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    }
  }


  const navigateDetail = (item) => {
    // console.log(item)
    navigation.navigate('Detalhes', { item: item })
  }


  const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} aberto={item.aberto} image={item.image} cep={item.cep} telefone={item.telefone} cidade={item.cidade} bairro={item.bairro} estado={item.estado} />;


  return (
    <Fragment>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={text} placeholder="Digite um bairro ou cidade" />
      </SafeAreaView>
      <FlatList data={depositoFilter()} renderItem={renderItem} keyExtractor={item => item.id} />
    </Fragment>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  item: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  subtitle: {
    fontSize: 18,
  }
});


export default Home