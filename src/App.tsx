import React, { useState, useEffect } from 'react';
import AlgaeChart from './components/AlgaeChart';
import SensorDisplay from './components/SensorDisplay';
import SensorControls from './components/SensorControls';
import { initialAlgaeData, initialSensorData } from './data/initialData';
import { determineStatus } from './utils/statusCalculator';
import { SensorDataMap } from './types';
import './App.css';

const App: React.FC = () => {
  const [algaeData, setAlgaeData] = useState(initialAlgaeData);
  const [sensorData, setSensorData] = useState<SensorDataMap>(initialSensorData);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Make a copy of the current state
      const newData: SensorDataMap = { ...sensorData };
      
      // Randomly update some sensor values for simulation
      Object.keys(newData).forEach(key => {
        if (Math.random() > 0.7) {
          const currentValue = newData[key].value;
          const randomFactor = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
          const newValue = parseFloat((currentValue * randomFactor).toFixed(2));
          
          // Update value and status
          newData[key] = {
            ...newData[key],
            value: newValue,
            status: determineStatus(key, newValue)
          };
        }
      });
      
      setSensorData(newData);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [sensorData]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">藻类监测与预测系统</h1>
          <p className="app-subtitle">基于15项关键指标的水质健康评分</p>
        </div>
      </header>

      <main className="app-main container">
        <AlgaeChart data={algaeData} />
        <SensorDisplay sensorData={sensorData} />
        <SensorControls />
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>© 2025 藻类监测与预测系统 - 基于15项指标的水质健康评分</p>
        </div>
      </footer>
    </div>
  );
};

export default App;