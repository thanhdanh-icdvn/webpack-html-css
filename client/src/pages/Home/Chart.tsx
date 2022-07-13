import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  Filler,
  ArcElement
} from 'chart.js'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { RefObject, useCallback, useRef } from 'react'
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types'

export const ChartComponent: React.FC<unknown> = (): JSX.Element => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
  )
  enum postion {
    'top' = 'top',
    'left' = 'left',
    'right' = 'right',
    'bottom' = 'right'
  }
  const options = (title: string, position: keyof typeof postion) => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: (`${position}` as const) || ('top' as const)
        },
        title: {
          display: true,
          text: title
        }
      }
    }
  }

  const labels = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        fill: true
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -300, max: 1000 })),
        borderColor: 'rgb(251, 0, 21)',
        backgroundColor: 'rgba(247, 96, 96, 0.5)'
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(251, 0, 146)',
        backgroundColor: 'rgb(207, 107, 165)'
      }
    ]
  }
  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(75,192,192,1)'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(251, 0, 21)'
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(251, 0, 146)'
      }
    ]
  }

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const lineRef = useRef<ChartJSOrUndefined<'line', number[], string>>(null)
  const barRef = useRef<ChartJSOrUndefined<'bar', number[], string>>(null)
  const doughnutRef = useRef<ChartJSOrUndefined<'doughnut', number[], string>>(null)
  const pieRef = useRef<ChartJSOrUndefined<'pie', number[], string>>(null)
  const downloadImage = useCallback(
    (
      ref: RefObject<
        ChartJSOrUndefined<
          'doughnut' | 'pie' | 'line' | 'bar' | 'bubble' | 'polarArea' | 'radar' | 'scatter',
          number[],
          string
        >
      >,
      chartTitle = 'chart'
    ) => {
      const link = document.createElement('a')
      link.download = chartTitle + '.png'
      link.href = ref?.current?.toBase64Image() as string
      link.click()
    },
    []
  )
  return (
    <div className='row'>
      <div className='col-md-6'>
        <Line options={options('Line chart', 'bottom')} data={data} ref={lineRef} />
        <button
          type='button'
          id='btn-download-line'
          onClick={() => downloadImage(lineRef, 'LineChart')}
          className='btn btn-sm btn-outline-primary'
        >
          Download Line
        </button>
      </div>
      <div className='col-md-6'>
        <Bar options={options('Bar chart', 'bottom')} data={barData} ref={barRef} />
        <button
          type='button'
          id='btn-download-line'
          onClick={() => downloadImage(barRef, 'BarChart')}
          className='btn btn-sm btn-outline-primary'
        >
          Download Bar
        </button>
      </div>
      <div className='col-md-4'>
        <Pie options={options('Pie chart', 'bottom')} data={pieData} ref={pieRef} />
        <button
          type='button'
          id='btn-download-pie'
          onClick={() => downloadImage(pieRef, 'PieChart')}
          className='btn btn-sm btn-outline-primary'
        >
          Download Pie
        </button>
      </div>
      <div className='col-md-4'>
        <Doughnut options={options('Doughnut chart', 'bottom')} data={pieData} ref={doughnutRef} />
        <button
          type='button'
          id='btn-download-doughnut'
          onClick={() => downloadImage(doughnutRef, 'DoughnutChart')}
          className='btn btn-sm btn-outline-primary'
        >
          Download Doughnut
        </button>
      </div>
    </div>
  )
}
