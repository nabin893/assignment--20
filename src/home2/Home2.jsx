import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home2 = () => {
    const {results}=useLoaderData()
    return (
        <div>
             <div className='p-10 mx-20 rounded-2xl w-[1280px] grid grid-cols-4 gap-5'>
            
            { 
             results.map(data=> <div>
                 <img className='h-[300px] w-[300px]' src={data.picture.large} alt="" />
             </div> )
             }
         </div>
            
        </div>
    );
};

export default Home2;