import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetail ()
{
    const { id }: { id?: string } = useParams(); // Specify id as optional

    if (!id)
    {
        return <div>No city ID found!</div>; // Handle case where id is not provided
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
