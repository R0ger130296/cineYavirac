import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                <span className="font-semibold text-xl tracking-tight text-black">Cine Adventure</span>
            </div>
            <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                    </li>
                    <li className="items-center">
                        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-book-open mr-2 text-sm"></i>
                            Películas
                        </p>
                        <ul>
                            <Link to="/movies">
                                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                                    <i className="fas fa-arrow-circle-right">Catálogo</i>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li className="items-center">
                        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
                            <i className="far fa-plus-square mr-2 text-m"> Crear y Asignar</i>
                        </p>
                        <ul>
                            <Link to="/add_movie">
                                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Crear Película
                                </li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/rooms">
                                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                                    <i className="fas fa-arrow-circle-right">Crear Salas</i>
                                </li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/schedules">
                                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                                    <i className="fas fa-arrow-circle-right">Crear Horarios</i>
                                </li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/films_room">
                                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                                    <i className="fas fa-arrow-circle-right">Asignar Peliculas</i>
                                </li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Sidebar;