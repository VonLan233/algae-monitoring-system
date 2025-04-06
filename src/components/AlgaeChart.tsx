import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlgaeDataPoint } from '../types';
import './AlgaeChart.css';

interface AlgaeChartProps {
  data: AlgaeDataPoint[];
}

const AlgaeChart: React.FC<AlgaeChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">藻类含量实际值与预测值对比</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="actualContent" 
              stroke="#3366cc" 
              activeDot={{ r: 8 }} 
              name="实际藻类含量" 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="predictedContent" 
              stroke="#33cc66" 
              name="预测藻类含量" 
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AlgaeChart;