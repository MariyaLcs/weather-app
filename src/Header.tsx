import React from 'react';
import AddCityForm from './AddCityForm.tsx';


interface HeaderProps
{
    onAddCity: (cityName: string) => void;
}

const Header = ({ onAddCity }: HeaderProps) =>
{
    return (
        <header className="header">
            <h2 className="header__title">MyWeather</h2>
            <AddCityForm onAddCity={ onAddCity } />
        </header>
    );
};

export default Header;
