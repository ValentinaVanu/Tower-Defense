import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: 'areaspline',
    zoomType: 'x',
  },
  title: {
    text: "My chart",
  },
  xAxis: {
    categories: [2, 3, 4, 5],
    crosshair: true,
  },
  yAxis: {
    min: 0,
  },
  // series: [
  //   {
  //     type: 'area',
  //     data: [1, 2, 3],
  //   },
  // ],
  series: [
    {
      name: 'Total',
      data: [0, 1, 4, 6, 4, 5, 6, 7, 8],
    },
    {
      name: 'Success',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      color: '#43a047',
    },
    {
      name: 'Fail',
      data: [0, 1, 4, 6, 2, 1, 0],
      color: '#ef5350',
    },
  ],
};

export const ProfileChart = ({ win = 12, loss = 4 }) => {
  const data = [win, loss]
  return (
    <div>
      Profile Chart {data}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
