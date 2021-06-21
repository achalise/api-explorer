import React from 'react';
import { Line } from 'react-chartjs-2';
import { CovidDataTableInput, CovidRecord } from '../CovidExplorer/CovidExplorer';


const LineChart = ({covidRecords}: CovidGraphInput) => {
    console.log(covidRecords);
    const data: any = prepareDataForGraph(covidRecords);
    return (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} type={'Line'} options={data.options} />
  </>);
};

export default LineChart;
export interface CovidGraphInput {
    covidRecords: Array<CovidRecord>
}

function prepareDataForGraph(covidRecords: CovidRecord[]): any {
    const label: Array<string> = [];
    const recoveredCases: Array<number> = [];
    const activeCases: Array<number> = [];
    const confirmedCases: Array<number> = [];
    const deaths: Array<number> = [];

    covidRecords.map( record => {
        label.push(record.Date);
        recoveredCases.push(record.Recovered);
        activeCases.push(record.Active);
        confirmedCases.push(record.Confirmed)
        deaths.push(record.Deaths);

    });
    const data = populateData(label, recoveredCases, activeCases, confirmedCases, deaths);
    data.options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      return data;
}

function populateData(label: Array<string>, recoveredCases: Array<number>, activeCases:Array<number>, confirmedCases:Array<number>, deaths: Array<number> ): any {
    const data = {} as any;
    data.labels = label;
    data.type = 'Line';
    data.datasets = [
        {
            label: '# of active cases',
            data: [...activeCases],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(99, 99, 90, 0.2)',
            },
            {
                label: '# of recovered cases',
                data: [...recoveredCases],
                fill: false,
                backgroundColor: 'rgb(11, 99, 99)',
                borderColor: 'rgba(290, 59, 132, 0.2)',
            },
            {
                label: '# of confirmed cases',
                data: [...confirmedCases],
                fill: false,
                backgroundColor: 'rgb(91, 99, 99)',
                borderColor: 'rgba(290, 59, 132, 0.2)',
            },
            {
                label: '# of deaths',
                data: [...deaths],
                fill: false,
                backgroundColor: 'rgb(61, 99, 99)',
                borderColor: 'rgba(290, 59, 132, 0.2)',
            },
    ]
    return data;

}