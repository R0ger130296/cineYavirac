/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        }
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

    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/movies");
    }

    render() {
        const { peliculas } = this.state
        const image_categorie = require('../assets/category.png');

        return(
            <div>
            <Sidebar />,
            <Header />,
            <div className="ml-64">
                <hr />
                <main className="my-8">
                    <p className="text-center my-5 text-2xl">Cartelera</p>
                    <div className="flex flex-wrap items-center justify-center">
                    { peliculas.map(element => 
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden" key={ element.id }>
                            <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={ element.imagen }/>
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="sm:flex sm:items-center px-6 py-4">
                                    <img className="w-10 h-10 rounded-full mr-4" src={ image_categorie } alt="image_categorie" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">{ element.categoria }</p>
                                        <p className="text-grey-dark">Valor: $ { element.valorBoleto }</p>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">Título: { element.titulo }</div>
                                    <p className="text-grey-darker text-base">Resumen: { element.resumen }</p>
                                </div>
                                <div className="m-3">
                                </div>
                                <div className="m-3">
                                    <button className="bg-green text-gray-800 f:bg-red-500 hover:tems-center"
                                        onClick={ () => this.deleteData(element.id) }>
                                        <span className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Eliminar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) }
                    </div>
                </main>
            </div>
        </div>
    )
}
}

export default Movies;