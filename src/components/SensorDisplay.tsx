import React from 'react';
import { SensorDataMap } from '../types';
import './SensorDisplay.css';

interface SensorDisplayProps {
  sensorData: SensorDataMap;
}

const SensorDisplay: React.FC<SensorDisplayProps> = ({ sensorData }) => {
  // Function to get the translated name of the sensor
  const getSensorName = (key: string): string => {
    switch(key) {
      case 'totalNitrogen': return '总氮';
      case 'totalPhosphorus': return '总磷';
      case 'totalAlkalinity': return '总碱度';
      case 'dissolvedOxygen': return '溶解氧';
      case 'totalDissolvedSolids': return '总溶解固体';
      case 'chlorophyllA': return '叶绿素a';
      case 'conductivity': return '电导率';
      case 'co2': return '二氧化碳浓度';
      case 'hardness': return '总硬度';
      case 'ph': return 'pH值';
      case 'waterTemperature': return '水温';
      case 'bod': return '生化需氧量';
      case 'cod': return '化学需氧量';
      case 'turbidity': return '浊度';
      case 'illumination': return '光照强度';
      default: return key;
    }
  };

  // Function to get status CSS class
  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'excellent': return 'status-excellent';
      case 'good': return 'status-good';
      case 'fair': return 'status-fair';
      case 'poor': return 'status-poor';
      default: return 'status-unknown';
    }
  };

  // Function to get translated status
  const getTranslatedStatus = (status: string): string => {
    switch(status) {
      case 'excellent': return '优秀';
      case 'good': return '良好';
      case 'fair': return '一般';
      case 'poor': return '较差';
      default: return status;
    }
  };

  return (
    <div className="sensor-container">
      <h2 className="sensor-title">传感器实时监控数据 (v3.9)</h2>
      
      <div className="sensor-grid">
        {Object.entries(sensorData).map(([key, data]) => (
          <div key={key} className="sensor-item">
            <div className="sensor-name">
              {getSensorName(key)}
            </div>
            <div className="sensor-value">
              {data.value}{data.unit}
            </div>
            <div className={`sensor-status ${getStatusClass(data.status)}`}>
              {getTranslatedStatus(data.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorDisplay;