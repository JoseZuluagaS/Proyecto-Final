import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

class HomeScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>Bienvenido hp</Text>
        <Button
        title='Inicia Sesion o Registrate'
        onPress={
          () => this.props.navigation.navigate('LoginScreen')
        }   
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
