import React from 'react'
import Image from 'next/image';

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
        id:3,
        title:'Cloud Computing Expertise' ,
        desc:'Gain hands-on experience in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions in the real world.',
        price:300,
        imageSrc:'/Sol3.svg'

    }
]

function solution() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 w-1061
            h-362.67 gap-x-4 ml-56
        ">
            <div>
                <h1 className='text-center mb-12'>
                Our solutions


                </h1>
                <h3 className='text-center mb-28 text-sm'>
                Create your account quickly with just your email or 
                social media login, then explore a wide range 
                </h3>
            </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
            {products.map((product) => (
              <div key={product.id} className=" bg-white p-6 rounded-lg shadow-lg">
                <div className="relative w-10 h-10">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-sm font-bold">{product.title}</h3>
                <p className="mt-2 text-sm text-black-600">{product.desc}</p>
                <p className="mt-4 text-sm font-bold text-black-500">Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default solution