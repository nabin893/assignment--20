import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home2 = () => {
    const {results}=useLoaderData()

    return (
        <div className=''>
             <div className='p-10 mx-20 rounded-2xl w-[1280px] grid grid-cols-4 gap-5 '>
            
            { 
             results.map(data=>
              <div className='border border-4 border-black pb-5'>
                
                 <img className='h-[300px] w-[300px]' src={data.picture.large} alt="" />
                <div className=' text-center'>
                <Link to={`/${data.phone}`}>
                <button className="btn btn-primary mt-5  ">View Details</button>
                </Link>
                </div>
             </div> )
             }
         </div>
            
        </div>
    );
};

export default Home2;