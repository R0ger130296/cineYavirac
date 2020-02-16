import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { Link } from "react-router-native";
import { Card } from 'react-native-elements';
import axios from 'axios';

const API = "http://192.168.0.7:5000/film/pelicula";


export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({ peliculas: response.data.datos })
            })
            .catch(error => {
                console.log(error)
            })
    }

    asyncstorageSave = async (idpelicula) => {
        try {
          await AsyncStorage.setItem('idpelicula', idpelicula.toString())
        } catch (err) {
          alert(err)
        }
    }

    render() {
        const { peliculas } = this.state
        return ( 
            <ImageBackground style = { styles.container } source = { require('../../assets/bg.jpg') } >
                <View style = { styles.overlayContainer } >
                    <View style = { styles.top } >
                        <Text style = { styles.header } > Estrenos</Text>   
                    </View >

                    <ScrollView vertical = { true } > 
                    {
                        peliculas.map(element =>
                            <View style = { styles.card } >
                            <Link to = "/movie_detail" key = { element.id } onPress={ () => this.asyncstorageSave(element.id) }>
                                <Card title = { element.titulo } image = { require('../../assets/icon.png') } />  
                            </Link >
                            </View>
                        )
                    } 
                    </ScrollView>  
                </View > 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 20,
        width: '99%',
        height: '99%',
    },
    overlayContainer: {
        flex: 20,
        height: '70%',
        backgroundColor: 'rgba(47,163,218,.4)',
    },
    top: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'black',
        fontSize: 25,
        borderColor: 'green',
        borderWidth: 5,
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(255,255,255,.6)',
    },
    menuContainer: {
        height: '10%'
    },
    card:{
        paddingLeft: 20,
        paddingRight: 20,
        flex: 20,
    }
})