import { LucideDelete, LucidePencil } from 'lucide-react'
import React from 'react'


export const InvoiceTrans = [
    {firstname:"John", Lastname:"Doe", id:1,title:"Java", amount:400,month:"Jan", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "paid"},
    {firstname:"Sara", Lastname:"Peters", id:2,title:"HTML", amount:200, month:"Feb" , email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Steven", Lastname:"Ntim", id: 3,title:"Python", amount:400, month:"Mar" , email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante",id: 4, title:"React", amount:600,month:"Apr", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Irene", Lastname:"Gyamfi", id: 5,title:"CSS", amount:250, month:"May", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante",id: 6, title:"React", amount:1000,month:"Jun", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 7,title:"React", amount:850,month:"Jul", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 8,title:"React", amount:900,month:"Aug", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 9,title:"React", amount:2000,month:"Sep", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 10,title:"React", amount:1500,month:"Oct", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 11,title:"React", amount:2500,month:"Nov", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"},
    {firstname:"Gershon", Lastname:"Asante", id: 12,title:"React", amount:4000,month:"Dec", email:"tnyande@gmail.com", Date: "Apr 7, 2025", Status: "pending"}
  ]

{/*
async function Invoices() {
    
    const res = await fetch("https://tmp-se-project.azurewebsites.net//api/invoices") ;
     const   allInvoices = res.json();

     */}


const Invoices = () => {  

  return (
    <div>
        <h4>Latest Invoices</h4>
        <div>
            <form>
                <input type='text' name='search' placeholder='Search Invoices' />
            </form>
        </div>
    

      <div className="flex w-full bg-gray-200 h-[574px] flex-col border-2 ">
            
              
              
            
                <div className="flex"> 
                    {/*
                    <ol>
                        <li>
                          <div className="flex inline">
                            <h6>{item.firstname} {item.Lastname} </h6>
                            <h6 className='ml-6'>{item.email} </h6>
                            <h6 className='ml-6' >{item.amount}</h6>
                            <h6 className='ml-6' > {item.Date}</h6>
                            <h6 className='ml-6' >{item.Status}</h6>
                          </div>

                            
                          <div className="flex flex-row">
                              <p className="flex ">{item.email}</p>
                              <div className="flex">
                                <p >{item.amount}</p>
                              </div>
                          </div>
                          

                          
                        </li>
                    </ol>
                      */}          
                    <table>

                        <thead>
                            <tr> 
                                
                                <th > Learner </th>
                                <th className='px-10'> Email </th>
                                
                                <th> Amount </th>
                                <th className='px-10'> Date </th>
                                <th className='px-4'> Status </th>
                                <th>  </th>
                                <th>  </th>
                            </tr>
                            </thead>
                        
                        {InvoiceTrans.slice(0, 10).map((item) => 
                        <div key={item.id}>
                            <tbody key={item.id}>
                            <tr key={item.id}>
                                <td className='px-4 '>{item.firstname} {item.Lastname} </td>
                                <td className='px-4'>{item.email} </td>
                                <td className='px-4 py-2'>{item.amount} </td>
                                <td className='px-4'>{item.Date} </td>
                                <td className='px-4'>{item.Status} </td>
                                <td className='px-4'><LucidePencil/> </td>
                                <td> <LucideDelete /> </td>
                            </tr>
                            </tbody>
                            </div>
                       
                    )}
                    </table>
               
                    
                </div>
              

        </div>
    </div>      
             
  )
}

export default Invoices