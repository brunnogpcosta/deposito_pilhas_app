import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, RefreshControl } from 'react-native';

import Depositos from '../data/depositos'


const Home = ({ navigation }) => {

  const [text, onChangeText] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      depositoFilter(text)

    })
    return unsubscribe

  }, [filtro]);

  const Item = ({ title, image, subtitle, id, cep, aberto, telefone, bairro, cidade, estado, latitude, longitude }) => (
    <TouchableOpacity style={styles.item} onPress={() => {
      navigateDetail({ id, image, title, subtitle, cep, aberto, telefone, bairro, cidade, estado, latitude, longitude })
    }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity >
  );


  const depositoFilter = (value) => {

    if (value == '' || value == null) {
      setFiltro(Depositos.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    } else {

      const dadosFiltrados = Depositos.filter(deposito => deposito.subtitle.toLowerCase().includes(value.toLowerCase()))
      setFiltro(dadosFiltrados.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))

      if (dadosFiltrados == '' || dadosFiltrados == null) {
        const dadosFiltrados = Depositos.filter(deposito => deposito.title.toLowerCase().includes(value.toLowerCase()))
        setFiltro(dadosFiltrados.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
      }
    }


  }

  const setText = (text) => {
    onChangeText(text)
    depositoFilter(text)
  }

  const aoAtualizar = () => {
    setRefreshing(true)
    depositoFilter()
    setRefreshing(false)
  }

  const navigateDetail = (item) => {
    // console.log(item)
    navigation.navigate('Detalhes', { item: item })
  }

  const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} aberto={item.aberto} image={item.image} cep={item.cep} telefone={item.telefone} cidade={item.cidade} bairro={item.bairro} estado={item.estado} latitude={item.latitude} longitude={item.longitude} />;

  return (
    <>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} placeholder="Pesquise pelo endereço ou nome" />
      </SafeAreaView>
      <FlatList data={filtro} renderItem={renderItem} keyExtractor={item => item.id} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={aoAtualizar} />
      } />
    </>
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