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

function solution() {
  return (
    <div className="bg-white">
      
        

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ml-40">
              <img
                alt={product.title}
                src={product.imageSrc}
                className="w-10 h-10 aspect-square  rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
               <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.title}</h2>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">
                    {product.desc}
                  </h3>
                
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    
        
    
  )
}

export default solution