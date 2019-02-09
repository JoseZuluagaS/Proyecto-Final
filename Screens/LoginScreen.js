import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native'

import * as firebase from 'firebase'

class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email : '',
      password : '',
      response : ''
    }
  }

  async Login(){
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'ha iniciado sesion'
      })
      setTimeout(() => {
        this.props.navigation.navigate('MapScreen')
      }, 1500)
    }catch(error){
      this.setState({
        response: error.toString()
      })
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.containerInputs}> 
          <TextInput
            placeholderTextColor="grey"
            placeholder="Email"
            style={styles.inputText}
            onChangeText = {(email) => this.setState({email})}
          />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Password"
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText = {(password) => this.setState({password})}
          />
        </View>
        <TouchableHighlight
          onPress = {this.Login.bind(this)}
          style = {[styles.loginButton, styles.button]}
        >
          <Text
            style = {styles.textButton}
          >Iniciar Sesion</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress = {() => {this.props.navigation.navigate('SignupScreen')}}
          style = {[styles.SignupButton, styles.button]}
        >
          <Text
            style = {styles.textButton}
          >Registrarse</Text>
        </TouchableHighlight>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20
  },
  inputText:{
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop:10,
    color: 'black'
  },
  button:{
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  textButton:{
    textAlign: 'center'    
  },
  containerInputs:{
    marginBottom: 20
  }
});
export default LoginScreen;
