import React from 'react'

function rightpanel() {
  return (
    <div>

<div>

<h1>Latest Invoices</h1>
{InvoiceSum.map((item) => 

    <div> 

      <h4>{item.firstname} {item.Lastname} </h4>
      <p>{item.title}</p>

      <p>{item.amount}</p>
    
    </div>


 )}

</div>


    </div>
  )
}

export default rightpanel


-----

export const InvoiceSum = [
  {firstname:"John", Lastname:"Doe", title:"Java", amount:400,month:"Jan"},
  {firstname:"Sara", Lastname:"Peters", title:"HTML", amount:200, month:"Feb"},
  {firstname:"Steven", Lastname:"Ntim", title:"Python", amount:400, month:"Mar"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:600,month:"Apr"},
  {firstname:"Irene", Lastname:"Gyamfi", title:"CSS", amount:250, month:"May"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:1000,month:"Jun"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:850,month:"Jul"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:900,month:"Aug"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:2000,month:"Sep"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:1500,month:"Oct"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:2500,month:"Nov"},
  {firstname:"Gershon", Lastname:"Asante", title:"React", amount:4000,month:"Dec"}
]

const months = InvoiceSum.map(invoice => invoice.month)
const amounts = InvoiceSum.map(invoice => invoice.amount)