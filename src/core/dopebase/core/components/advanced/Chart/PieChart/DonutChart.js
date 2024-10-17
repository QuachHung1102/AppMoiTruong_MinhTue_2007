import React, {memo} from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {View} from '../../../base/View';
import {Text} from '../../../base/Text';
import dynamicStyles from './styles';
import {useTheme} from '../../../../theming';

export const DonutChart = memo(props => {
  const {theme, appearance} = useTheme();
  const styles = dynamicStyles(theme, appearance);
  const {colorSet} = theme.colors[appearance];
  const pieData = [
    {
      value: 47,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];

  const renderDot = color => {
    return <View style={[styles.dotStyle, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.lengendContaier}>
          <View style={styles.legendText}>
            {renderDot('#006DFF')}
            <Text style={{color: 'white'}}>Excellent: 47%</Text>
          </View>
          <View style={styles.legendTextRight}>
            {renderDot('#8F80F3')}
            <Text style={{color: 'white'}}>Okay: 16%</Text>
          </View>
        </View>
        <View style={[styles.lengendContaier, {marginBottom: 0}]}>
          <View style={styles.legendText}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'white'}}>Good: 40%</Text>
          </View>
          <View style={styles.legendTextRight}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'white'}}>Poor: 3%</Text>
          </View>
        </View>
      </>
    );
  };

  const renderCenterLabel = () => {
    return (
      <View style={styles.containerDatainfo}>
        <Text style={styles.dataInfoText1}>47%</Text>
        <Text style={styles.dataInfoText2}>Excellent</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.headerText}>Performance</Text>
        <View style={styles.containerPieChart}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={renderCenterLabel}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
});
