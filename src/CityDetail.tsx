import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import WeatherIcon from './WeatherIcon.tsx';

function CityDetail ()
{
    const { id }: { id?: string } = useParams();
    console.log(useParams());

    const location = useLocation();
    const { cityName, currentTemp, weatherIcon } = location.state;

    if (!id)
    {
        return <div>No city ID found!</div>;
    }

    return (
        <div>

            <h2 className="card-title font-bold text-white">{ cityName }</h2>
            <p>Temperature: { currentTemp }</p>
            <WeatherIcon weatherIcon={ weatherIcon } size={ 4 } />

        </div>
    );
}

export default CityDetail;
