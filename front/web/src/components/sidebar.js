/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div className="flex-grow flex mr-2 ml-64">
    <li className="items-center">
        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
            <i className="fab fa-youtube mr-2 text-sm"></i>
            Películas
        </p>
        <ul>
            <Link to="/movies">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Catálogo</i>
                </li>
            </Link>
        </ul>
        <ul>
            <Link to="/report">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Reportes</i>
                </li>
            </Link>
        </ul>
    </li>
    <li className="items-center">
        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
            <i className="far fa-plus-square mr-2 text-m"></i>
            Crear y Asignar
        </p>
        <ul>
            <Link to="/add_movie">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Crear Película</i>
                </li>
            </Link>
            <Link to="/rooms">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Crear Salas</i>
                </li>
            </Link>
            <Link to="/schedules">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Crear Horarios</i>
                </li>
            </Link>
            <Link to="/films_room">
                <li className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    <i className="fas fa-arrow-circle-right">Asignar Peliculas</i>
                </li>
            </Link>
        </ul>
    </li>
</div>
)

export default Sidebar;