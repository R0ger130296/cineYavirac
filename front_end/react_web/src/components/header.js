/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Header = () => (
        <div className="flex-grow flex mr-2 ml-64">
            <div className="flex-grow flex">
                {/* <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Ayuda
                </a> */}
            </div>
            <div>
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Salir
                    </button>
                </Link>
            </div>   
            <div><br></br>
                <Link to="/home">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Inicio
                    </button>
                </Link>
            </div>          
        </div>
)

export default Header;