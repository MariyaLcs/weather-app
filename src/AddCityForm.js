import React, { useState } from 'react';

function AddCityForm({ onAddCity }) {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity(cityName);
    setCityName(''); 
  };

  return (
    <div className="mb-4"> 
      <form onSubmit={handleSubmit} className="row g-3"> 
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success mb-3">Add City</button>
        </div>
      </form>
    </div>
  );
}

export default AddCityForm;
