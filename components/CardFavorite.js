import React, { useState } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { eliminarFavorito } from '../actions/peliculasAction';

const CardFavorite = ({ item, eliminarFavorito,index }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <View style={styles.containerCard}>
                <TouchableOpacity
                    onPress={
                        () => { setShowModal(!showModal) }
                    }>
                    <Image
                        key={item.id}
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://image.tmdb.org/t/p/original/' + item.backdrop_path,
                        }}
                    />
                </TouchableOpacity>

                {showModal ? <View>
                    <Text style={styles.tittle}>{item.title}</Text>
                    <Text style={styles.discription}>{item.overview}</Text>
                    <View style={styles.opcion}>
                        <TouchableOpacity
                            style={styles.opcionDetails}
                            onPress={
                                () => { eliminarFavorito(item.id,index) }
                            }
                        >
                            <Text>Eliminar de Favoritos</Text>
                        </TouchableOpacity>
                    </View>
                </View> : <View></View>
                }

            </View>
        </>
    )

}

const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        alignContent: 'flex-start',
        marginBottom: 20
    },
    tinyLogo: {
        width: 400,
        height: 200,
    },
    opcion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    opcionDetails: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }

});


export default connect(null, { eliminarFavorito })(CardFavorite);
