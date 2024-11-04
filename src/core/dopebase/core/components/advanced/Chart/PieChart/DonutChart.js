import React, {memo, useMemo} from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {View} from '../../../base/View';
import {Text} from '../../../base/Text';
import dynamicStyles from './styles';
import {useTheme} from '../../../../theming';

export const DonutChart = memo(props => {
  const {theme, appearance} = useTheme();
  const styles = dynamicStyles(theme, appearance);
  const {colorSet} = theme.colors[appearance];
  const {pieData} = props;
  const totalEmissionData = useMemo(() => {
    return pieData.reduce((acc, item) => acc + item.value, 0);
  }, [pieData]);

  const renderDot = color => {
    return <View style={[styles.dotStyle, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.lengendContaier}>
          <View style={styles.legendText}>
            {renderDot('#006DFF')}
            <Text style={{color: 'white'}}>Di chuyển: 47%</Text>
          </View>
          <View style={styles.legendTextRight}>
            {renderDot('#8F80F3')}
            <Text style={{color: 'white'}}>Ăn uống: 16%</Text>
          </View>
        </View>
        <View style={[styles.lengendContaier, {marginBottom: 0}]}>
          <View style={styles.legendText}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'white'}}>Tái chế: 40%</Text>
          </View>
          <View style={styles.legendTextRight}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'white'}}>Khác: 3%</Text>
          </View>
        </View>
      </>
    );
  };

  const renderCenterLabel = () => {
    return (
      <View style={styles.containerDatainfo}>
        <Text style={styles.dataInfoText1}>{totalEmissionData}kg</Text>
        <Text style={styles.dataInfoText2}>CO2</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.headerText}>Tổng lượng khí thải</Text>
        <Text style={styles.headerText}>Từ ngày 01 tháng này đến hiện tại</Text>
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
