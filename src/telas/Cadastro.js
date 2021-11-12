import React, { useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


import uuid from 'react-native-uuid';
import Depositos from '../data/depositos'


const Cadastro = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();



  const onSubmit = (data) => {
    Depositos.push(
      {
        id: uuid.v4(),
        image: require('../../assets/prezunic_taquara.png'),
        title: data.nomeEstabelecimento,
        subtitle: data.logradouro,
        cidade: data.cidade,
        estado: data.estado,
        aberto: data.funcionamento,
        telefone: data.telefone
      }
    )

    reset({ nomeEstabelecimento: "", logradouro: "", cidade: "", estado: "", funcionamento: "", telefone: "" })
    navigation.goBack()
  }




  return (
    < ScrollView >
      <SafeAreaView>
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
              placeholder="Logradouro, Nº - Bairro"
            />
          )}
          name="logradouro"
          defaultValue=""
        />
        {errors.logradouro && <Text style={styles.spam}>This is required.</Text>}

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
              placeholder="Cidade"
            />
          )}
          name="cidade"
          defaultValue=""
        />
        {errors.cidade && <Text style={styles.spam}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="UF"
            />
          )}
          name="estado"
          defaultValue=""
        />
        {errors.estado && <Text style={styles.spam}>This is required.</Text>}

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
            maxLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="XXXXXXXX"
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
  },
  spam: {
    marginLeft: 10,
    color: '#FF6347'
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