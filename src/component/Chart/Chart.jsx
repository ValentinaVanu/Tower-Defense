import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

const getChartOptions = (data, title) => {
  return {
    chart: {
      type: "areaspline",
      zoomType: "x",
      backgroundColor: "rgba(0,0,0,0)",
    },
    legend: {
      itemStyle: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    title: {
      text: title,
      style: {
        color: "rgb(255,255,255)",
      },
    },
    xAxis: {
      categories: [2, 3, 4, 5],
      crosshair: true,
      labels: {
        style: {
          color: "rgb(255,255,255)",
        },
      },
    },
    yAxis: {
      min: 0,
      labels: {
        style: {
          color: "rgb(255,255,255)",
        },
      },
    },
    series: [
      {
        name: "Total",
        data: [0, 1, 4, 6, 4, 5, 6, 7, 8],
        // marker: { fillColor: '#BF0B23', radius: 10 },
        style: {
          color: "rgb(255,255,255)",
        },
      },
      {
        name: "Win",
        data: data.win,
        color: "#717e99",
        style: {
          color: "rgb(255,255,255)",
        },
      },
      {
        name: "Loss",
        data: data.loss,
        color: "#a08080",
        style: {
          color: "rgb(255,255,255)",
        },
      },
    ],
  };
};

export const DashboardChart = ({ data, title }) => {
  return (
    <div>
      <HighchartsReact
        fillOpacity
        highcharts={Highcharts}
        options={getChartOptions(data, title)}
      />
    </div>
  );
};

DashboardChart.defaultProps = {
  title: "Title",
  data: { win: [0, 1, 2, 3, 4, 5, 6, 7, 8], loss: [0, 1, 4, 6, 2, 1, 0] },
};

DashboardChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};
