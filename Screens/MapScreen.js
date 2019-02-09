import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import MapView from 'react-native-maps'
import * as firebase from 'firebase'


class MapScreen extends React.Component{

  async CerrarSesion(){
    try{
      await firebase.auth().signOut()
      this.props.navigation.navigate('LoginScreen')
    }catch(error){
      console.log(error)
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <MapView style = {styles.map} 
        region={{

            latitude:10.9878,
            longitude:-74.7889,
            latitudeDelta:0.1,
            longitudeDelta:0.1

        }}>            
        </MapView>
        <Button 
          title = "cerrar sesion"
          onPress = {this.CerrarSesion.bind(this)}
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    
  },

  map:{
      position: 'absolute',
      top:0,
      left:0,
      bottom:0,
      right:0
  }
});

export default MapScreen;