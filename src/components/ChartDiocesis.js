import React, { useEffect } from "react";
import Chart from "chart.js";

export const ChartDiocesis = (props) => {
  useEffect(() => {
    crearGrafica(props);
  }, [props]);

  const crearGrafica = (props) => {
    const { datos = [], diocesis = [], etiqueta } = props;

    diocesis.map((dioce) => {
      return datos[dioce.nombre]
        ? (dioce.cantidad = datos[dioce.nombre])
        : (dioce.cantidad = 0);
    });

    // types.
    // horizontalBar
    // bar
    // doughnut

    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: diocesis.map((dioce) => dioce.nombre),
        datasets: [
          {
            label: etiqueta,
            data: diocesis.map((dioce) => dioce.cantidad),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
        title: {
          display: true,
          text: etiqueta,
        },
      },
    });
  };
  return <canvas id="myChart"></canvas>;
};
