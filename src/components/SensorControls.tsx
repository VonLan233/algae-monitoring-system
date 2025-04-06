import React from 'react';
import './SensorControls.css';

const SensorControls: React.FC = () => {
  return (
    <div className="controls-container">
      <h2 className="controls-title">传感器类型选择</h2>
      
      <div className="controls-grid">
        <div className="controls-panel">
          <h3 className="panel-title">传感器类型选择</h3>
          <div className="sensor-options">
            <div className="sensor-option">
              <input type="radio" id="sensor1" name="sensorType" className="radio-input" defaultChecked />
              <label htmlFor="sensor1">无其他传感器</label>
            </div>
            <div className="sensor-option">
              <input type="radio" id="sensor2" name="sensorType" className="radio-input" />
              <label htmlFor="sensor2">气体浓度传感器</label>
            </div>
            <div className="sensor-option">
              <input type="radio" id="sensor3" name="sensorType" className="radio-input" />
              <label htmlFor="sensor3">甲醛量变送模块</label>
            </div>
            <div className="sensor-option">
              <input type="radio" id="sensor4" name="sensorType" className="radio-input" />
              <label htmlFor="sensor4">大气压力</label>
            </div>
            <div className="sensor-option">
              <input type="radio" id="sensor5" name="sensorType" className="radio-input" />
              <label htmlFor="sensor5">光照度（20W）</label>
            </div>
          </div>
        </div>
        
        <div className="controls-panel">
          <h3 className="panel-title">参数设置</h3>
          <div className="param-grid">
            <div className="param-column">
              <div className="param-row">
                <label className="param-label">报警上线1:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">报警上线2:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">修正值1:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">回弹值1:</label>
                <input type="text" className="param-input" />
              </div>
            </div>
            <div className="param-column">
              <div className="param-row">
                <label className="param-label">报警下线1:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">报警下线2:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">修正值2:</label>
                <input type="text" className="param-input" />
              </div>
              <div className="param-row">
                <label className="param-label">回弹值2:</label>
                <input type="text" className="param-input" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="controls-panel">
          <h3 className="panel-title">参数设置</h3>
          <div className="device-options">
            <div className="device-row">
              <label className="device-label">串口号:</label>
              <select className="device-select">
                <option>COM1</option>
                <option>COM2</option>
                <option>COM3</option>
              </select>
            </div>
            <div className="device-row">
              <label className="device-label">波特率:</label>
              <select className="device-select">
                <option>9600</option>
                <option>19200</option>
                <option>38400</option>
              </select>
            </div>
            <div className="device-row">
              <label className="device-label">设备地址:</label>
              <input type="text" className="device-input" />
            </div>
            <div className="device-button-container">
              <button className="connect-button">连接设备</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorControls;