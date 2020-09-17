import { MOSTRAR_PELICULAS, LOADING, GUARDAR_FAVORITO, ELIMINAR_FAVORITO, LOADINGFAV, GUARDAR_FOTO } from "../actions/types"
import { Alert } from 'react-native';

const estadoInicial = {
    peliculas: {}, isLoading: true, favoritos: {}, isLoadingFav: false, descargas:{}
}

export default function (state = estadoInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true };
            break;
        case LOADINGFAV:
            return { ...state, isLoadingFav: true };
            break;
        case MOSTRAR_PELICULAS:
            return { ...state, peliculas: action.payload, isLoading: false };
            break;
        case GUARDAR_FAVORITO:
            if (state.favoritos[action.payload.idPeli]) {
                Alert.alert('Error', 'Ya es una pelicula favorita')
            } else {
                state.favoritos[action.payload.idPeli] = action.payload.idPeli
                Alert.alert('Correcto', 'Se guardo como favorita')
                state.peliculas[action.payload.indesPelicula]['isFavorite'] = true
            }
            return { ...state, favoritos: state.favoritos, peliculas: state.peliculas, isLoading: false };
            break;
        case ELIMINAR_FAVORITO:
            delete state.favoritos[action.payload.idPeli]
            alert('Se elimino de favoritos')
            state.peliculas[action.payload.indesPelicula]['isFavorite'] = false
            return { ...state, favoritos: state.favoritos, peliculas: state.peliculas, isLoadingFav: false };
            break;
        case GUARDAR_FOTO:
            if (state.descargas[action.payload.idPeli]) {
                Alert.alert('Error', 'Esta imagen ya se encuentra en Descargas')
            } else {
                state.descargas[action.payload.idPeli] = action.payload.link
                Alert.alert('Correcto', 'Se descargo correctamente')
            }                     
            return { ...state, descargas: state.descargas};
            break;

        default:
            return state;
            break;
    }
}   