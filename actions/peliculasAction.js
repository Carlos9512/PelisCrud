import {MOSTRAR_PELICULAS,ERROR,LOADING,GUARDAR_FAVORITO,ELIMINAR_FAVORITO,LOADINGFAV,GUARDAR_FOTO} from "./types"

export const cargarPeliculas = () => async dispatch=> {  
    dispatch({
        type: LOADING       
    })
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&sort_by=popularity.desc'
      );
      const json = await response.json();
      dispatch({
        type: MOSTRAR_PELICULAS,
        payload: json.results
    })      
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        })
    }
  }


  export const agregarFavorito = (id,index) => async dispatch=> {
    const data = {idPeli:id, indesPelicula:index} 
    dispatch({
      type: GUARDAR_FAVORITO,
      payload: data
    })    
  }

  export const eliminarFavorito = (id,index) => async dispatch=> {
    dispatch({
      type: LOADINGFAV       
  })
    const data = {idPeli:id, indesPelicula:index} 
    dispatch({
      type: ELIMINAR_FAVORITO,
      payload: data
  })    
  }

  export const guardarFoto = (link,idPeli) => async dispatch=> {
    const data = {idPeli:idPeli, link:link}
    dispatch({
      type: GUARDAR_FOTO,
      payload: data
  })    
  }
