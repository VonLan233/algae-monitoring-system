type ParameterKey = string;

export const determineStatus = (parameter: ParameterKey, value: number): 'excellent' | 'good' | 'fair' | 'poor' => {
  switch (parameter) {
    case 'totalNitrogen':
      if (value < 0.10) return 'excellent';
      if (value >= 0.10 && value <= 0.34) return 'good';
      if (value > 0.34 && value <= 0.67) return 'fair';
      return 'poor';
    
    case 'totalPhosphorus':
      if (value < 0.03) return 'excellent';
      if (value >= 0.03 && value <= 0.04) return 'good';
      if (value > 0.04 && value <= 0.06) return 'fair';
      return 'poor';
    
    case 'dissolvedOxygen':
      if (value >= 7 && value <= 11) return 'excellent';
      if (value >= 5 && value < 7) return 'good';
      if (value >= 4 && value < 5) return 'fair';
      return 'poor';
    
    case 'totalDissolvedSolids':
      if (value >= 100 && value <= 400) return 'excellent';
      if (value < 100) return 'good';
      if (value > 400 && value <= 500) return 'fair';
      return 'poor';
    
    case 'chlorophyllA':
      if (value < 3) return 'excellent';
      if (value >= 3 && value <= 11) return 'good';
      if (value > 11 && value <= 78) return 'fair';
      return 'poor';
    
    case 'conductivity':
      if (value < 250) return 'excellent';
      if (value >= 250 && value <= 500) return 'good';
      if (value > 500 && value <= 1000) return 'fair';
      return 'poor';
    
    case 'co2':
      if (value >= 400 && value <= 800) return 'excellent';
      if (value > 800 && value <= 1000) return 'good';
      if (value < 400) return 'fair';
      return 'poor';
    
    case 'hardness':
      if (value >= 0 && value <= 350) return 'excellent';
      if (value > 350 && value <= 600) return 'good';
      if (value > 600 && value <= 850) return 'fair';
      return 'poor';
    
    case 'ph':
      if (value >= 7 && value <= 8.5) return 'excellent';
      if (value > 8.5 && value <= 9) return 'good';
      if (value > 9 && value <= 10) return 'fair';
      return 'poor';
    
    case 'waterTemperature':
      if (value >= 20 && value <= 30) return 'excellent';
      if (value >= 15 && value < 20) return 'good';
      if ((value >= 10 && value < 15) || (value > 30 && value <= 35)) return 'fair';
      return 'poor';
    
    case 'bod':
      if (value < 2) return 'excellent';
      if (value >= 2 && value <= 4) return 'good';
      if (value > 4 && value <= 6) return 'fair';
      return 'poor';
    
    case 'cod':
      if (value < 50) return 'excellent';
      if (value >= 50 && value <= 100) return 'good';
      if (value > 100 && value <= 200) return 'fair';
      return 'poor';
    
    case 'turbidity':
      if (value < 5) return 'excellent';
      if (value >= 5 && value <= 25) return 'good';
      if (value > 25 && value <= 50) return 'fair';
      return 'poor';
    
    case 'illumination':
      if (value >= 100 && value <= 200) return 'excellent';
      if ((value >= 50 && value < 100) || (value > 200 && value <= 300)) return 'good';
      if ((value >= 30 && value < 50) || (value > 300 && value <= 350)) return 'fair';
      return 'poor';
    
    default:
      return 'good';
  }
};
