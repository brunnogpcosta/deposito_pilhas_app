import React, { Fragment } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Image } from 'react-native';


export default function Home() {


  const [text, onChangeText] = React.useState(null);
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


  const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} />;

  return (
    <Fragment>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Digite um bairro ou cidade" />

      </SafeAreaView>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
