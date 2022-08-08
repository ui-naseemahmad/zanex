import ReactApexChart from 'react-apexcharts';
import React from 'react';
import Heading from '../../Heading';

const Stroked = () => {
  const Series = [67]

  const Options =
  {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Median Ratio'],
  }

  return (
    <>
     <Heading title="Recent Orders"/>
      <ReactApexChart options={Options} series={Series} type="radialBar" height={350} />
    </>
  )
}

export default Stroked;
