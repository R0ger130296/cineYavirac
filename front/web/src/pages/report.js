import React, { Component } from "react";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

const API = "http://localhost:5000/film/";

// Resolves charts dependancy
charts(FusionCharts);

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        pelicula: 'Película',
        boletos: 'Número de Boletos',
        precio: 'precio unitario',
      },
      reporte: [],
      peliculas: [],
    };
  }

  componentDidMount() {
    axios.get(`${API}raw4`)
    .then(response => {
      this.setState({ reporte: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(`${API}pelicula`)
    .then(response => {
      this.setState({ peliculas: response.data.datos })
      console.log(response.data.datos)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { reporte } = this.state
    const datos = {
      chart: {
        caption: "Porcentaje de Ventas",
        subcaption: "Películas más aceptadas por los usuario",
        showpercentvalues: "1",
        defaultcenterlabel: "Peliculas",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext: "<b>$percentValue</b> recaudado por <b>$label</b>",
        centerlabel: "# Users: $value",
        legendIconScale: "2",
        theme: "fusion",
        baseFont: "Italy",
        baseFontSize: "15",
        baseFontColor: "#008080",
      },
      data: this.state.reporte
    };

    const chartConfigs = {
      type: 'doughnut2d',
      dataSource: datos,
      width: "800",
      height: "600",
    };
    // return (<ReactFusioncharts {...chartConfigs} />);
    return(
      <div>
          <Sidebar />,
          <Header />,
          <div className="ml-64">
            <hr />
            <main className="my-8">
              <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead className="border-b">
                        <tr>
                          <th className="text-left p-3 px-5">{ this.state.table_header.pelicula }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.boletos }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.precio }</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                          <td>
                              { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.label} </p>) }
                          </td>
                          <td>
                              { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.value} </p>) }
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>

              <div className=" sm:ml-6 sm:mr-6 pb-8 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                    <div>
                      <div className="text-center px-6">
                        <div className="">
                          <div className=" flex-grow flex-no-shrink ">
                            <ReactFusioncharts {...chartConfigs} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
      </div>
    )
  }
}