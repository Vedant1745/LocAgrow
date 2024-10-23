import React, { useState } from 'react';  // Import useState
import './Soil.css';

const soilTypeData = {
  clay: { pH: 6.5, nitrogen: 40, phosphorus: 30, potassium: 350 },
  silt: { pH: 6.8, nitrogen: 30, phosphorus: 25, potassium: 300 },
  sand: { pH: 7.2, nitrogen: 15, phosphorus: 20, potassium: 200 },
  loam: { pH: 7.0, nitrogen: 35, phosphorus: 35, potassium: 325 },
};

/*export default function Soil() {
  const [samples, setSamples] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const soilType = formData.get('type');
    const soilData = soilTypeData[soilType];

    if (!soilData) {
      alert('Invalid soil type selected');
      return;
    }

    const newSample = {
      id: samples.length + 1,
      location: formData.get('location'),
      depth: formData.get('depth'),
      type: soilType,
      pH: soilData.pH,
      nitrogen: soilData.nitrogen,
      phosphorus: soilData.phosphorus,
      potassium: soilData.potassium,
    };
    
    setSamples([...samples, newSample]);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1 className="title">Soil Testing Lab</h1>

      <div className="grid">
        <div className="card">
          <h2 className="card-title">Submit Soil Sample</h2>
          <p className="card-description">Enter the details of your soil sample for testing.</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="location">Sample Location</label>
              <input type="text" id="location" name="location" required />
            </div>
            <div className="form-group">
              <label htmlFor="depth">Sample Depth</label>
              <select id="depth" name="depth" required>
                <option value="0-15cm">0-15 cm</option>
                <option value="15-30cm">15-30 cm</option>
                <option value="30-60cm">30-60 cm</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Soil Type</label>
              <select id="type" name="type" required>
                <option value="clay">Clay</option>
                <option value="silt">Silt</option>
                <option value="sand">Sand</option>
                <option value="loam">Loam</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Submit Sample</button>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title">About Soil Testing</h2>
          <p className="card-description">Understanding the importance of soil analysis.</p>
          <p>
            Soil testing is crucial for maintaining healthy crops and maximizing yield. Regular testing allows for informed
            decisions on fertilization and soil management.
          </p>
          <ul>
            <li>Determines soil pH and nutrient levels</li>
            <li>Guides fertilizer application</li>
            <li>Helps diagnose plant growth problems</li>
            <li>Promotes environmental stewardship</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Soil Test Results</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Depth</th>
              <th>Type</th>
              <th>pH</th>
              <th>Nitrogen</th>
              <th>Phosphorus</th>
              <th>Potassium</th>
            </tr>
          </thead>
          <tbody>
            {samples.map((sample) => (
              <tr key={sample.id}>
                <td>{sample.id}</td>
                <td>{sample.location}</td>
                <td>{sample.depth}</td>
                <td>{sample.type}</td>
                <td>{sample.pH}</td>
                <td>{sample.nitrogen}</td>
                <td>{sample.phosphorus}</td>
                <td>{sample.potassium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
*/

export default function Soil() {
    const [samples, setSamples] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const soilType = formData.get('type');
      const soilData = soilTypeData[soilType];
  
      if (!soilData) {
        alert('Invalid soil type selected');
        return;
      }
  
      const newSample = {
        id: samples.length + 1,
        location: formData.get('location'),
        depth: formData.get('depth'),
        type: soilType,
        pH: soilData.pH,
        nitrogen: soilData.nitrogen,
        phosphorus: soilData.phosphorus,
        potassium: soilData.potassium,
      };
      
      setSamples([...samples, newSample]);
      event.target.reset();
    };
  
    return (
      <div className="soil-container">
        <h1 className="soil-title">Soil Testing Lab</h1>
  
        <div className="soil-grid">
          {/* Submit Soil Sample Form */}
          <div className="soil-card">
            <h2 className="soil-card-title">Submit Soil Sample</h2>
            <p className="soil-card-description">Enter the details of your soil sample for testing.</p>
            <form onSubmit={handleSubmit} className="soil-form">
              <div className="soil-form-group">
                <label htmlFor="location" className="soil-label">Sample Location</label>
                <input type="text" id="location" name="location" className="soil-input" required />
              </div>
              <div className="soil-form-group">
                <label htmlFor="depth" className="soil-label">Sample Depth</label>
                <select id="depth" name="depth" className="soil-select" required>
                  <option value="0-15cm">0-15 cm</option>
                  <option value="15-30cm">15-30 cm</option>
                  <option value="30-60cm">30-60 cm</option>
                </select>
              </div>
              <div className="soil-form-group">
                <label htmlFor="type" className="soil-label">Soil Type</label>
                <select id="type" name="type" className="soil-select" required>
                  <option value="clay">Clay</option>
                  <option value="silt">Silt</option>
                  <option value="sand">Sand</option>
                  <option value="loam">Loam</option>
                </select>
              </div>
              <button type="submit" className="soil-submit-button">Submit Sample</button>
            </form>
          </div>
  
          {/* About Soil Testing */}
          <div className="soil-card">
            <h2 className="soil-card-title">About Soil Testing</h2>
            <p className="soil-card-description">Understanding the importance of soil analysis.</p>
            <p>
              Soil testing is crucial for maintaining healthy crops and maximizing yield. Regular testing allows for informed
              decisions on fertilization and soil management.
            </p>
            <ul>
              <li>Determines soil pH and nutrient levels</li>
              <li>Guides fertilizer application</li>
              <li>Helps diagnose plant growth problems</li>
              <li>Promotes environmental stewardship</li>
            </ul>
          </div>
        </div>
  
        {/* Soil Test Results */}
        <div className="soil-card">
          <h2 className="soil-card-title">Soil Test Results</h2>
          <table className="soil-table">
            <thead>
              <tr>
                <th className="soil-th">ID</th>
                <th className="soil-th">Location</th>
                <th className="soil-th">Depth</th>
                <th className="soil-th">Type</th>
                <th className="soil-th">pH</th>
                <th className="soil-th">Nitrogen</th>
                <th className="soil-th">Phosphorus</th>
                <th className="soil-th">Potassium</th>
              </tr>
            </thead>
            <tbody>
              {samples.map((sample) => (
                <tr key={sample.id}>
                  <td className="soil-td">{sample.id}</td>
                  <td className="soil-td">{sample.location}</td>
                  <td className="soil-td">{sample.depth}</td>
                  <td className="soil-td">{sample.type}</td>
                  <td className="soil-td">{sample.pH}</td>
                  <td className="soil-td">{sample.nitrogen}</td>
                  <td className="soil-td">{sample.phosphorus}</td>
                  <td className="soil-td">{sample.potassium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  