import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const About1 = () => {
    const values = useLoaderData()
    console.log(values);

    return (
        <div className='p-10 mx-20 rounded-2xl w-[1280px] grid grid-cols-4 gap-10'>
            {
                values.map(vel => <div className='border border-4 border-black pb-5'>
                    <img className='h-[200px] w-[300px]' src={vel.flags.png} alt="" />
                    <div className=' text-center'>
                        <Link to={`/about/${vel.cca3}`}>
                            <button className="btn btn-primary mt-5  ">View Details</button>
                    </Link>
                    </div>
                
           </div>)
}
        </div >
    );
};

export default About1;