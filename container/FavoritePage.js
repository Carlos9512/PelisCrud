import React, { useState } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Footer from "../components/FooterCom";
import { styles } from '../css/stylePeliculas';
import CardFavorite from '../components/CardFavorite';

const FavoritePage = ({ navigation,isLoadingFav, peliculas, favoritos }) => {

  const renderItem = ({ item, index }) => (
    <CardFavorite item={item} index={index}></CardFavorite>
  )
 
  const FavoritoMostrar = []

  Object.values(favoritos).forEach((favorito) => {
    peliculas.forEach(peli => {
      if (peli.id == favorito)
        FavoritoMostrar.push(peli)
    });
  })
  if (isLoadingFav) {
    console.log('recarga')
    return (
      <>
        <View>
          <Text>Cargando</Text>
        </View>
      </>
    )
  }
  else
    return (
      <>
        <View style={styles.container}>
          <View style={styles.contect}>
            <FlatList
              data={FavoritoMostrar}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.footer}>
            <Footer navigation={navigation} />
          </View>
        </View>
      </>
    )


}

const mapStateToProp = (state) => {
  return {
    peliculas: state.peliculas.peliculas,
    favoritos: state.peliculas.favoritos,
    isLoadingFav: state.peliculas.isLoadingFav
  }
}

export default connect(mapStateToProp)(FavoritePage);