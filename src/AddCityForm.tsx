import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddCityForm ({ onAddCity })
{
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    onAddCity(cityName);
    setCityName('');
  };

  return (
    <div className="d-flex justify-content-end ">
      <div className="card mb-3" style={ { width: '300px' } }>
        <div className="card-body add-city">
          <form onSubmit={ handleSubmit } className="row g-3 align-items-center">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                value={ cityName }
                onChange={ (e) => setCityName(e.target.value) }
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={ faPlus } />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCityForm;

