import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About2 = () => {
    const photos =useLoaderData()
    return (
        <div>
            {
                photos.map(data=> console.log(data)
                
            )
            }
            
            
        </div>
    );
};

export default About2;