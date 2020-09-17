import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Footer from "../components/FooterCom";
import { styles } from '../css/stylePeliculas';

const ProfilePage = ({ navigation }) => {
  const [nombre, setNombre] = useState('')
  const [celular, setCelular] = useState('')
  const [correo, setCorreo] = useState('')

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contect}>
          <View style={stylesForm.container} >
            <TextInput style={stylesForm.input}
              underlineColorAndroid="transparent"
              placeholder="Nombre"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              value={nombre}
              disable={true}
              onChangeText={text => setNombre(text)} />
            <TextInput style={stylesForm.input}
              underlineColorAndroid="transparent"
              placeholder="Numero"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              value={celular}
              onChangeText={text => setCelular(text)} />
            <TextInput style={stylesForm.input}
              underlineColorAndroid="transparent"
              placeholder="Correo"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              value={correo}
              onChangeText={text => setCorreo(text)} />
          </View>

        </View>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </>
  )

}

const stylesForm = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1
  },
  container: {
    paddingTop: 23
  },
});


export default connect(null)(ProfilePage);