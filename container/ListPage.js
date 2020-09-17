import React, { useEffect,useState } from 'react';
import { connect } from "react-redux";
import { View, Text,FlatList,PermissionsAndroid,Button, TextInput} from 'react-native';
import Footer from "../components/FooterCom";
import { styles } from '../css/stylePeliculas';
import { cargarPeliculas } from '../actions/peliculasAction';
import CardP from '../components/CardP';


const ListPage = ({ navigation, peliculas, isLoading, cargarPeliculas }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextInput placeholder="Buscar" onChangeText={(text)=>setBusqueda(text)} style={styles.search}/>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    cargarPeliculas()
  }, [])  

  const [busqueda, setBusqueda] = useState('')


  const renderItem = ({ item,index }) => (
    <CardP item={item} index={index}/>
  )

  if (isLoading)
    return ( 
      <>
        <View>
          <Text>Cargando</Text>
        </View>
      </>
    )
  else
    return (
      <>
        <View style={styles.container}>
          <View style={styles.contect}>
            <FlatList
              data={peliculas.filter(item=>item.title.toUpperCase().includes(busqueda.toUpperCase()))}
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
    isLoading: state.peliculas.isLoading
  }
}

export default connect(mapStateToProp, { cargarPeliculas })(ListPage);


