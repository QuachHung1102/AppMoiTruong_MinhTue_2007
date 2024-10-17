import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = (theme, appearance) => {
  const colorSet = theme.colors[appearance];
  return StyleSheet.create({
    container: {
      backgroundColor: colorSet.secondaryBackground,
      flex: 1,
    },
    containerContent: {
      margin: 20,
      padding: 16,
      borderRadius: 20,
      backgroundColor: '#232B5D',
    },
    headerText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    containerPieChart: {
      padding: 20,
      alignItems: 'center',
    },
    containerDatainfo: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataInfoText1: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
    },
    dataInfoText2: {
      fontSize: 14,
      color: 'white',
    },
    dotStyle: {
      height: 10,
      width: 10,
      borderRadius: 5,
      marginRight: 10,
    },
    lengendContaier: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
    legendText: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 120,
      marginRight: 20,
    },
    legendTextRight: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 120,
    },
  });
};
export default styles;
