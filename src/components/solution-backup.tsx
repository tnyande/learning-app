import React from 'react'

export const products = [
    {
        id:1,
        title:'Software Development' ,
        desc:'Unlock your potential with comprehensive training in modern software development, from coding fundamentals to building complex applications.',
        price:350,
        imageSrc:'/FrameSol1.svg'

    },
    {
        id:2,
        title:'Data Science Mastery' ,
        desc:'Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert in machine learning, AI, and data-driven decision-making.',
        price:300,
        imageSrc:'/sol2.svg'

    },
    {
        id:2,
        title:'Cloud Computing Expertise' ,
        desc:'Gain hands-on experience in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions in the real world.',
        price:300,
        imageSrc:'/Sol3.svg'

    }
]

function Solutionbackup() {
  return (
    <div className="bg-white">
      
        

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ml-40 w-325 h-352.67">
              <img
                alt={product.title}
                src={product.imageSrc}
                className="w-10 h-10 aspect-square  rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto "
              />
               <h2 className="font-20 tracking-tight text-gray-20">{product.title}</h2>
              <div className="mt-4 flex justify-between">
                
                  <h3 className="text-sm text-black-500">
                    {product.desc}
                  </h3>
                
                
                <h3 className="text-sm font-medium text-red-900">Price: ${product.price}</h3>
              </div>
            </div>
          ))}
        </div>
    </div>
    
        
    
  )
}

export default solutionbackup