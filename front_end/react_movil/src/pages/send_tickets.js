import React, { Component } from 'react';
import { Text, View, StyleSheet,ImageBackground,TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
import { Card } from 'react-native-elements';
import { Link } from "react-router-native";
import axios from 'axios';

const API = "http://192.168.0.7:5000/film/";

export default class SendTickets extends Component {
  constructor(props) {
      super(props);
      this.state = {
        correo: '',
        sala: '',
        pelicula: '',
        horario: '',
        boletos: ''
      };
  }

  handleCorreo = text => {
    this.setState({ correo: text });
  };

  saveData = () => {
    this.post = {
        datos: {
          correo: this.state.correo,
          sala: this.state.sala,
          pelicula: this.state.pelicula,
          horario: this.state.horario,
          boletos: this.state.boletos
        }
    }

    if (this.post.datos.correo === "") {
      alert("Complete Los Campos");
    } else {
      axios.post(API+"send_mail", this.post)
      .then(response => {
        if ( response.data.ok === true ) {
          alert("Correo Enviado!")
        }
      })
      .catch(error => {
        alert(error)
      })
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      alert(e)
    }
  }

  render() {
    return(
      <ImageBackground style={ styles.container } source={ require('../../assets/bg.jpg') }>
        <View style={ styles.overlayContainer}>
          <View style={ styles.top }>
            <Text style={ styles.header }>Enviar Boletos</Text>
          </View>

          <Card title="Correco ELectronico">
            <TextInput 
              placeholder="user@gmail.com"  
              underlineColorAndroid='transparent'  
              style={styles.TextInputStyle}  
              keyboardType={'default'}
              onChangeText={ this.handleCorreo }
            />
          </Card>

            <TouchableHighlight>
              <Link to="/" style={ styles.button } onPress={ () => this.asyncstorageClear() }>
                <Text>Cartelera</Text>
              </Link>
            </TouchableHighlight>

            <TouchableHighlight>
              <Link to="/" style={ styles.button } onPress={ () => this.saveData() }>
                <Text>Enviar Comprobante</Text>
              </Link>
            </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%', 
    height: '100%',
    justifyContent:'center',
    backgroundColor: 'red',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',
  },
  top: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
    textAlign: 'center'
  },
  button: {
    position: 'relative',
    bottom: '0%',
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})