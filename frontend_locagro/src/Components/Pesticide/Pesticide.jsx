import React, { useState } from 'react';
import './Pesticide.css';

const Pesticide = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Logic to handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleFilter = () => {
    // Logic to handle filter functionality
    console.log('Filtering options');
  };

  return (
    <div className="pesticide-center">
      <div className="header">
        <h1>Pesticide Information Center</h1>
        <p>Learn about safe and effective pest management solutions</p>
      </div>
      <div className="search-section">
        <h2>Search Pesticides</h2>
        <p>Find information about specific pesticides or filter by type</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search pesticides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          <button onClick={handleFilter} className="filter-button">
            Filter
          </button>
        </div>
      </div>

      <div className="tabs">
        <button className="tab-button active">Pesticide List</button>
        <button className="tab-button">General Information</button>
      </div>

      <div className="pesticide-list">
        <h3>Available Pesticides</h3>
        <p>Comprehensive list of pesticides with key information</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Toxicity</th>
              <th>Target Pests</th>
              <th>Active Ingredient</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EcoGuard Plus</td>
              <td>Organic</td>
              <td>Low</td>
              <td>Aphids, Whiteflies</td>
              <td>Neem Oil</td>
            </tr>
            <tr>
              <td>CropShield Pro</td>
              <td>Synthetic</td>
              <td>Moderate</td>
              <td>Beetles, Caterpillars</td>
              <td>Permethrin</td>
            </tr>
            <tr>
              <td>BioDefend</td>
              <td>Organic</td>
              <td>Very Low</td>
              <td>Fungal Diseases</td>
              <td>Bacillus subtilis</td>
            </tr>
            <tr>
              <td>RapidClear X</td>
              <td>Synthetic</td>
              <td>High</td>
              <td>Wide Spectrum</td>
              <td>Chlorpyrifos</td>
            </tr>
            <tr>
              <td>NaturalGuard</td>
              <td>Organic</td>
              <td>Low</td>
              <td>Mites, Thrips</td>
              <td>Pyrethrin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pesticide;
