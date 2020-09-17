import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image,FlatList,Platform } from 'react-native';
import Footer from "../components/FooterCom";
import { styles } from '../css/stylePeliculas';

const DownloadPage = ({ navigation, descargas }) => {
  console.log(descargas)
  const renderItem = ({ item,index }) => (
    <Image
      key={index}
      source={{ uri : Platform.OS === 'android' ? 'file://'+item : item }} 
      style={styless.tinyLogo}      
      
    />
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contect}>
          <FlatList
            data={Object.values(descargas)}
            renderItem={renderItem}
            keyExtractor={index => index}
          />
        </View>
        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </>
  )

}

const styless = StyleSheet.create({

  tinyLogo: {
    width: 400,
    height: 200,
  }

});


const mapStateToProp = (state) => {
  return {
    descargas: state.peliculas.descargas,
  }
}

export default connect(mapStateToProp)(DownloadPage);