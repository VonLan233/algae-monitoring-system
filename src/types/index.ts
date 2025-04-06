export interface SensorData {
    value: number;
    unit: string;
    status: 'excellent' | 'good' | 'fair' | 'poor';
  }
  
  export interface SensorDataMap {
    [key: string]: SensorData;
  }
  
  export interface AlgaeDataPoint {
    name: string;
    actualContent: number;
    predictedContent: number;
  }