import React, { Component } from 'react';
import axios from 'axios';

const API_LOGIN = "http://localhost:5000/film/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_LOGIN, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          window.location.assign("http://localhost:3000/movies");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    return (
      <div class="container mx-auto">
        <div class="flex justify-center px-12 my-12">
          <div class="w-full xl:w-3/4 xl:w-11/12 flex">
          <img class="h-700 mx:w-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://lh6.googleusercontent.com/proxy/sDIljM0HaR_2OAQtVOYD2P5jl0Enq0QdtMekJ5-Q-jwSJgHXn0dxU2khnYfsM43rs-lGolADSC-hqbCV4tpVg3rrACqvJV_0gmKliCSqHtTyWWcYCexd9f69Q-Kyp2t5Em7PxM14fUYORatP" alt="Sunset in the mountains"/>
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Bienvenido de vuelta!</h3>
              <form onSubmit={this.loginAccess} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                    Username
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="correo"
                    value={ correo }
                    onChange={ this.changeHandler } 
                  />
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    name="clave"
                    value={ clave }
                    onChange={ this.changeHandler } 
                  />
                  <p class="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div class="mb-6 text-center">
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Ingresar
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                <a href="http://localhost:3000/register" className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Registrarse
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;