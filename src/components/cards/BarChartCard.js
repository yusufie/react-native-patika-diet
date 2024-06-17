import React from 'react';
import {BarChart} from 'react-native-chart-kit';

const BarChartComponent = ({data}) => {
  const chartConfig = {
    backgroundGradientFrom: '#008037',
    backgroundGradientTo: '#363636',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  const chartStyle = {
    marginVertical: 8,
    borderRadius: 10,
    margin: 10,
  };

  return (
    <BarChart
      data={data}
      width={350}
      height={200}
      chartConfig={chartConfig}
      style={chartStyle}
    />
  );
};

export default BarChartComponent;
