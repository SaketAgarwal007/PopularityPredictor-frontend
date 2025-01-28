import React from 'react';
import './PredictionGraph.css';

const data = [
  { year: 2023, value: 5 },
  { year: 2024, value: 8 },
  { year: 2025, value: 15 },
  { year: 2026, value: 10 },
  { year: 2027, value: 12 },
  { year: 2028, value: 18 },
  { year: 2029, value: 15 },
  { year: 2030, value: 8 },
];

export function PredictionGraph() {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="prediction-graph-container">
      <h2>Popularity Prediction</h2>
      <div className="graph">
        {data.map((item, index) => (
          <div key={item.year} className="bar-container">
            <div 
              className="bar" 
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            >
              <span className="value">{item.value}</span>
            </div>
            <span className="year">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}