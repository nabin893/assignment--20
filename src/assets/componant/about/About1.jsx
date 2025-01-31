import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About1 = () => {
    const values = useLoaderData()
    console.log(values);
    
    return (
        <div className='p-10 mx-20 rounded-2xl w-[1280px] grid grid-cols-4 gap-10'>
          {
           values.map( vel=> <div>
            <img className='h-[200px] w-[300px]' src={vel.flags.png} alt="" />
           </div> )
           }
        </div>
    );
};

export default About1;