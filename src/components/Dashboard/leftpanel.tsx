import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'Chart.js' 
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);







const leftpanel = () => {
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'], // X-axis labels
    datasets: [
      {
        label: "", // Label for the dataset
        data: [400,200,1000,500,800,2000], // Data points for each label
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color for the bars
        borderWidth: 1, // Border width of the bars
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true, // Makes the chart responsive
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales", // Title of the chart
      },
    },
  };

  
  return (
    <div className='flex w-[504px] h-[448px]'>

        <div>
           <h1>Latest Invoices</h1>
            <Bar data={data} options={options}/>
        </div> 

        
        
    </div>
  )
}

export default leftpanel


