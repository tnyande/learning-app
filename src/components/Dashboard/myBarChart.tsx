"use client"
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

export const InvoiceSum = [
  {firstname:"John", Lastname:"Doe", id:1,title:"Java", amount:400,month:"Jan"},
  {firstname:"Sara", Lastname:"Peters", id:2,title:"HTML", amount:200, month:"Feb"},
  {firstname:"Steven", Lastname:"Ntim", id: 3,title:"Python", amount:400, month:"Mar"},
  {firstname:"Gershon", Lastname:"Asante",id: 4, title:"React", amount:600,month:"Apr"},
  {firstname:"Irene", Lastname:"Gyamfi", id: 5,title:"CSS", amount:250, month:"May"},
  {firstname:"Gershon", Lastname:"Asante",id: 6, title:"React", amount:1000,month:"Jun"},
  {firstname:"Gershon", Lastname:"Asante", id: 7,title:"React", amount:850,month:"Jul"},
  {firstname:"Gershon", Lastname:"Asante", id: 8,title:"React", amount:900,month:"Aug"},
  {firstname:"Gershon", Lastname:"Asante", id: 9,title:"React", amount:2000,month:"Sep"},
  {firstname:"Gershon", Lastname:"Asante", id: 10,title:"React", amount:1500,month:"Oct"},
  {firstname:"Gershon", Lastname:"Asante", id: 11,title:"React", amount:2500,month:"Nov"},
  {firstname:"Gershon", Lastname:"Asante", id: 12,title:"React", amount:4000,month:"Dec"}
]

const months = InvoiceSum.map(invoice => invoice.month)
const amounts = InvoiceSum.map(invoice => invoice.amount)



const MyBarChart = () => {
  const labels = months;
  const datasets = amounts
  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "My Bar Chart",
        data: datasets,
        backgroundColor: [
          "rgb(1,88,154)",
          
        ],
        borderColor: [
          "rgb(1,88,154)",
          
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
      // insert similar in dataset object for making multi bar chart
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Lable",
        },
        display: true,
        beginAtZero: true,
        max: 5000,
      },
      x: {
        title: {
          display: true,
          text: "x-axis Lable",
        },
        display: true,
      },
    },
    maintainAspectRatio: false
  };
  return (
    <div className="flex flex-row w-[1032px] h-[448px] gap-3 pl-7 ">

        
        <div  className="border-2 w-[504px] h-[448px]">
          <Bar  data={data} options={options} className="w-[504px] h-[448px]"/>
        </div>

        <div className="flex w-[504px] h-[448] flex-col border-2 ">
        
          <h4>Latest Invoices</h4>
          {InvoiceSum.slice(0, 5).map((item) => 
        
            <div key={item.id} className="flext flex-col"> 
                <ol>
                    <li>
                      <div className="flex inline">
                        <h6>{item.firstname} {item.Lastname} </h6>
                        
                      </div>

                      <div className="flex flex-row">
                          <p className="flex ">{item.title}</p>
                          <div className="ml-36 flex absolute justify-end w-[300px]">
                            <p >{item.amount}</p> 
                          </div>
                      </div>
                    </li>
                </ol>
            </div>
        
        
         )}
        
        </div>

    </div>
  );
};

export default MyBarChart;