import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
    const {results} = useLoaderData()
    console.log(results);
    
    return (
        <div className='p-10 mx-20 rounded-2xl w-[1280px] grid grid-cols-4 gap-5'>
            
           { 
            results.map(data=> <div className='border border-4 border-black pb-5'>
                <img className='h-[300px] w-[300px]' src={data.picture.large} alt="" />
                <div className=' text-center'>
                <button className="btn btn-primary mt-5  ">View Details</button>
                </div>
            </div> )
            }
        </div>
    );
};

export default Contact;