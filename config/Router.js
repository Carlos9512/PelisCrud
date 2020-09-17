import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from '../container/ListPage';
import FavoritePage from '../container/FavoritePage';
import DownloadPage from '../container/DownloadPage';
import ProfilePage from '../container/ProfilePage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={ListPage}  
          options={{ title: 'Lista', headerLeft: null }}
        />    
        <Stack.Screen
          name="Favorite"
          component={FavoritePage}
          options={{ title: 'Favoritos', headerLeft: null }}          
        />     
        <Stack.Screen
          name="Download"
          component={DownloadPage}    
          options={{ title: 'Descargas', headerLeft: null }}      
        /> 
         <Stack.Screen
          name="Profile"
          component={ProfilePage}  
          options={{ title: 'Perfil', headerLeft: null }}        
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;