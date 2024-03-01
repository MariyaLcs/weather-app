import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetail ()
{
    const { id }: { id?: string } = useParams();
    console.log(useParams());

    if (!id)
    {
        return <div>No city ID found!</div>;
    }

    return (
        <div>
            <h2>City Details</h2>
            <p>City ID: { id }</p>
            {/* Add more detailed information about the city here */ }
        </div>
    );
}

export default CityDetail;
