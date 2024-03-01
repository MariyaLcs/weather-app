import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AddCityForm from './AddCityForm.tsx';

interface HeaderProps
{
    onAddCity: (cityName: string) => void;
}

const Header = ({ onAddCity }: HeaderProps) =>
{
    const location = useLocation();

    const showAddCityForm = !location.pathname.startsWith('/city/');
    const isDetailPage = location.pathname.startsWith('/city/');

    return (
        <header className="header">
            <h2 className="header__title">MyWeather</h2>
            { isDetailPage &&

                <Link to="/" className="btn btn-dark" >Back</Link> }

            { showAddCityForm && <AddCityForm onAddCity={ onAddCity } /> }
        </header>
    );
};

export default Header;
