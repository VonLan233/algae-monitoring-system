import { AlgaeDataPoint, SensorDataMap } from '../types';

export const initialAlgaeData: AlgaeDataPoint[] = [
  { name: '1月', actualContent: 65, predictedContent: 75 },
  { name: '2月', actualContent: 70, predictedContent: 68 },
  { name: '3月', actualContent: 90, predictedContent: 85 },
  { name: '4月', actualContent: 81, predictedContent: 87 },
  { name: '5月', actualContent: 95, predictedContent: 90 },
  { name: '6月', actualContent: 110, predictedContent: 105 },
  { name: '7月', actualContent: 120, predictedContent: 115 },
  { name: '8月', actualContent: 130, predictedContent: 125 },
  { name: '9月', actualContent: 100, predictedContent: 110 },
  { name: '10月', actualContent: 90, predictedContent: 95 },
  { name: '11月', actualContent: 85, predictedContent: 80 },
  { name: '12月', actualContent: 80, predictedContent: 75 }
];

export const initialSensorData: SensorDataMap = {
  totalNitrogen: { value: 0.25, unit: 'mg/L', status: 'good' },
  totalPhosphorus: { value: 0.035, unit: 'mg/L', status: 'good' },
  totalAlkalinity: { value: 12.5, unit: 'mg/L', status: 'good' },
  dissolvedOxygen: { value: 6.5, unit: 'mg/L', status: 'excellent' },
  totalDissolvedSolids: { value: 200, unit: 'ppm', status: 'excellent' },
  chlorophyllA: { value: 5.0, unit: 'μg/L', status: 'good' },
  conductivity: { value: 320, unit: 'uS/cm', status: 'good' },
  co2: { value: 550, unit: 'ppm', status: 'excellent' },
  hardness: { value: 250, unit: 'mg/L', status: 'excellent' },
  ph: { value: 7.8, unit: '', status: 'good' },
  waterTemperature: { value: 24.5, unit: '°C', status: 'excellent' },
  bod: { value: 3.0, unit: 'mg/L', status: 'good' },
  cod: { value: 65, unit: 'mg/L', status: 'good' },
  turbidity: { value: 12, unit: 'NTU', status: 'good' },
  illumination: { value: 125, unit: 'μE/m²/s', status: 'excellent' }
};