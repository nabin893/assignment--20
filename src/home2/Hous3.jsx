import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Hous3 = () => {
    const photos=useLoaderData()
    return (
        <div>
            {
                photos.map(data=><div>
                     <img className='' src={data.picture.large} alt="" />
                </div> )
            }
            
        </div>
    );
};

export default Hous3;