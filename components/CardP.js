import React from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid} from 'react-native';
import { agregarFavorito, guardarFoto } from '../actions/peliculasAction';
import RNFetchBlob from 'rn-fetch-blob'

 
const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE],
            {
                title: "Permisos",
                message:
                    "Se requieren permisos para descargar la imagen",
            }
        )
        if (granted['android.permission.READ_EXTERNAL_STORAGE'] == PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};


const CardP = ({ item, agregarFavorito, index, guardarFoto }) => {

    const saveFoto = (link, idPeli,backdrop_path) => {

        const android = RNFetchBlob.android
        const dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob.config({
            fileCache: true,
            path: dirs.DownloadDir + "/"+backdrop_path,      
        })
            .fetch('GET', link)
            .then((res) => {
                RNFetchBlob.fs.scanFile([{ path: res.path(), mime: 'image/jpg' }])
                guardarFoto(res.path(), idPeli)                
            })
            .catch((err) => {
                console.log('eeeeeeeeeeeeeeee', err)
            })

    }
    console.log(item.isFavorite)
    return (
        <>
            <View style={styles.containerCard}>
                <Image
                    key={item.id}
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://image.tmdb.org/t/p/original/' + item.backdrop_path,
                    }}
                />
                <Text style={styles.tittle}>{item.title}</Text>
                <Text style={styles.discription}>{item.overview}</Text>
                <View style={styles.opcion}>
                    {(item.isFavorite == true) ?
                        <View
                            style={styles.opcionDetails}
                        >
                            <Text>Es un Favorito !!</Text>
                        </View>
                        :
                        <TouchableOpacity
                            style={styles.opcionDetails}
                            onPress={
                                () => {
                                    agregarFavorito(item.id, index)
                                }
                            }
                        >
                            <Text>Agregar a Favoritos</Text>
                        </TouchableOpacity>

                    }
                    <TouchableOpacity
                        style={styles.opcionDetails}
                        onPress={() => {
                            requestCameraPermission()
                            saveFoto('https://image.tmdb.org/t/p/original/' + item.backdrop_path, item.id,item.backdrop_path)
                        }
                        }
                    >
                        <Text>Descargar</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(null, { agregarFavorito, guardarFoto })(CardP);
