import React, { useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import uuid from 'react-native-uuid';
import Depositos from '../data/depositos'

import config from '../../config'


const Cadastro = ({ navigation }) => {

  const [destination, setDestination] = useState(null)
  const [dados, setDados] = useState(null)
  const { control, handleSubmit, formState: { errors }, reset } = useForm();



  const coordenadas = {
    latitude: -22.999305245094607,
    longitude: -43.37907536068602,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  }

  const onSubmit = (data) => {
    Depositos.push(
      {
        id: uuid.v4(),
        image: dados.thumb,
        title: data.nomeEstabelecimento,
        subtitle: dados.subtitle,
        cidade: dados.cidade,
        estado: dados.estado,
        aberto: data.funcionamento,
        telefone: data.telefone,
        latitude: destination.latitude,
        longitude: destination.longitude
      }
    )

    console.log({
      id: uuid.v4(),
      image: dados.thumb,
      title: data.nomeEstabelecimento,
      subtitle: dados.subtitle,
      cidade: dados.cidade,
      estado: dados.estado,
      aberto: data.funcionamento,
      telefone: data.telefone,
      latitude: destination.latitude,
      longitude: destination.longitude
    })
    reset({ nomeEstabelecimento: "", funcionamento: "", telefone: "" })
    navigation.goBack()
  }

  return (
    <>

      <MapView style={styles.map}
        initialRegion={destination == null ? coordenadas : destination}
        region={destination == null ? coordenadas : destination}>
        <Marker coordinate={destination == null ? coordenadas : destination} />

      </MapView>


      < ScrollView style={styles.separador} keyboardShouldPersistTaps='always'>
        <GooglePlacesAutocomplete
          styles={{
            textInputContainer: {
              backgroundColor: '#59910A',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 5

            },
            textInput: {
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,

            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          placeholder='Digite o Endereço do Depósito...'
          onPress={(data, details = null) => {

            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
            })
            setDados({
              thumb: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + details.photos[0].photo_reference + "&sensor=false&key=",
              subtitle: data.terms[1].value + ", " + details.address_components[0].long_name + " - " + details.address_components[2].long_name,
              cidade: details.address_components[3].long_name,
              estado: details.address_components[5].short_name,
            })
            // console.log(destination)
            //console.log(details.photos[0].photo_reference)
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          fetchDetails={true}

        />



        <SafeAreaView >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nome do Estabelecimento"
              />
            )}
            name="nomeEstabelecimento"
            defaultValue=""

          />
          {errors.nomeEstabelecimento && <Text style={styles.spam}>This is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Horário de Funcionamento"
              />
            )}
            name="funcionamento"
            defaultValue=""
          />
          {errors.funcionamento && <Text style={styles.spam}>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="(XX) XXXX-XXXX"
                keyboardType="numeric"
              />
            )}
            name="telefone"
            defaultValue=""
          />
          {errors.telefone && <Text style={styles.spam}>This is required.</Text>}


        </SafeAreaView>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit(onSubmit)} >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </  ScrollView >
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
  viewEndereco: {
    backgroundColor: '#59910A',
    marginBottom: 40
  },
  inputEndereco: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF'
  },
  input: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
  },
  separador: {

  },
  spam: {
    marginLeft: 10,
    color: '#FF6347'
  },
  botaoMapa: {
    fontFamily: 'Roboto',
    color: '#FFF',
    backgroundColor: '#48A3A7',
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: 150,
  },
  botao: {
    fontFamily: 'Roboto',
    color: '#425501',
    backgroundColor: '#D3D3D3',
    padding: 10,
    margin: 10,
    alignItems: 'center'
  }
});

export default Cadastro