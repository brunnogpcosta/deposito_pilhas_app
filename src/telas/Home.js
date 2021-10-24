import React, { Fragment, useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Image } from 'react-native';


const Home = () => {

  const [temp] = useState(false)
  const [text, onChangeText] = React.useState('');

  const fitlro = []
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: require('../../assets/pilha_logo.png'),
      title: 'Prezunic',
      subtitle: 'Estr. dos Bandeirantes, 105 - Taquara'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: require('../../assets/pilha_logo.png'),
      title: 'Carrefour Hipermercado',
      subtitle: 'Av. Marechal Fontenele, 3555 - Jardim Sulacap'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: require('../../assets/pilha_logo.png'),
      title: 'Casa & Vídeo',
      subtitle: 'Av. das Américas, 15500 - Recreio dos Bandeirantes'
    },
  ];

  const Item = ({ title, image, subtitle }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image style={styles.image} source={image} />

    </View>
  );

  depositoFilter = () => {
    if (text == '') {
      return filtro = DATA
    } else {
      const dadosFiltrados = DATA.filter(deposito => deposito.subtitle.toLowerCase().includes(text.toLowerCase()))
      return filtro = dadosFiltrados
    }
  }

  const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} />;


  return (
    <Fragment>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={text} placeholder="Digite um bairro ou cidade" />
        <Text style={styles.termo}>Termo Procurado: {text}</Text>
      </SafeAreaView>
      <FlatList data={this.depositoFilter()} renderItem={renderItem} keyExtractor={item => item.id} />
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
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  tipografia: {
    fontFamily: 'Roboto',
    color: '#425501'
  },
  input: {
    height: 40,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
  },
  termo: {
    marginBottom: 12,
    marginLeft: 12,
  },
  item: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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