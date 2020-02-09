import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      resumen: '',
      categoria: '',
      valorBoleto: '',
      imagen: '',
      estado: true
    }
  }
onChange=(e)=>{
  this.setState({ [e.target.name]: e.target.value })
const files=e.target.files
const reader=new FileReader();
reader.readAsDataURL(files[0]);
reader.onload=(e)=>{
  console.warn(e.target.result)
  const formData ={file: e.target.result}
  return axios.post(API,formData)
  .then(res=>{
    console.log(res)
  })
}
}
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveData = e => {
    e.preventDefault()
    this.post = {
      datos: {
        titulo: this.state.titulo,
        resumen: this.state.resumen,
        categoria: this.state.categoria,
        valorBoleto: this.state.valorBoleto,
        estado: this.state.estado,
      }
    }

    if (this.post.datos.titulo === "" ||
      this.post.datos.resumen === "" ||
      this.post.datos.categoria === "" ||
      this.post.datos.valorBoleto === "" 
    ) {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente")
            window.location.assign("http://localhost:3000/add_movie");
          }
        })
        .catch(error => {
          alert(error)
        })
    }
  };


  render() {
    const {
      titulo,
      resumen,
      categoria,
      valorBoleto,
      imagen,
    } = this.state
    return (
      <div>
        <Sidebar />,
                <Header />,
                <div className="ml-64">
          <hr />
          <main className="my-20">
            <p className="text-center my-5 text-2xl">Agregar una nueva película.</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8" onSubmit={this.saveData}>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded">
                    Título
                                    </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                    type="text"
                    placeholder="Ej: El Viaje al Centro de la Tierra"
                    name="titulo"
                    value={titulo}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6 ">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Resumen
                                    </label>
                  <textarea className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                    type="text"
                    placeholder="Sinopsis de la película"
                    name="resumen"
                    value={resumen}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Categoria
                                    </label>
                  <select
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                    id="grid-state"
                    name="categoria"
                    value={categoria}
                    onChange={this.changeHandler}
                  >
                    <option className="text-sm text-gray-600 text-grey-darker text-xs font-bold mb-2">Seleccione Categoría</option>
                    <option>Romántica</option>
                    <option>Terror</option>
                    <option>Comedia</option>
                    <option>Drama</option>
                    <option>Animadas</option>
                    <option>Anime</option>
                    <option>Documental</option>
                    <option>Acción</option>
                    <option>Infantiles y familiares</option>
                    <option>Independientes</option>
                    <option>Música y musicales</option>
                    <option>Ciencia Ficción y Fantasía</option>
                  </select>
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block text-sm text-gray-600">
                    Precio
                                    </label>
                  <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    type="number"
                    min="0"
                    placeholder="Ej: 3,50"
                    name="valorBoleto"
                    value={valorBoleto}
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6 ">
                <div onSubmit={this.onForm} className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label className=" block text-sm text-gray-600">
                    Imagen
                </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    value={imagen}
                    name="imagen"
                    onChange={(e)=>this.onChange(e)}
                    type="file"
                    required={true}
                    aria-label="Email"
                  />
                </div>
              </div>
              <p className="text-red text-xs italic">Por favor complete todos los campos.</p>
              <div className="mt-4">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

export default AddMovie;