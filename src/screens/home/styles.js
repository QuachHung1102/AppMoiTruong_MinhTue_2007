import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../../core/dopebase';

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance];
  const {width, height} = Dimensions.get('window');

  return StyleSheet.create({
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: colorSet.primaryBackground,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colorSet.primaryText,
      marginTop: 16,
      fontSize: 18,
    },
    image: {
      height: 128,
      width: 128,
      borderRadius: 64,
      marginTop: -320,
    },
    // Phần này không thuộc template
    nunitoBold: {
      fontFamily: 'Nunito-Bold',
      textAlign: 'center',
      fontSize: 'normal',
    },
    userInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colorSet.thirBackground,
    },
    userName: {
      fontFamily: 'Nunito-Bold',
      color: colorSet.thirText,
      letterSpacing: 1,
      fontWeight: 'normal',
    },
    box1: {
      backgroundColor: colorSet.thirBackground,
      width: width * 0.55,
      height: width * 0.31,
      borderWidth: 2,
      borderColor: colorSet.thirBackground,
    },
    box2: {
      backgroundColor: colorSet.primaryBackground,
      width: width * 0.55,
      height: width * 0.27,
      borderWidth: 2,
      borderColor: colorSet.thirBackground,
    },
    box3: {
      backgroundColor: colorSet.forthBackground,
      width: width * 0.55,
      height: width * 0.2,
      borderWidth: 2,
      borderColor: colorSet.forthBackground,
      justifyContent: 'space-around',
    },
    box4: {
      backgroundColor: colorSet.fifthBackground,
      width: width * 0.31,
      height: width * 0.51,
      borderWidth: 2,
      borderColor: colorSet.fifthBackground,
      justifyContent: 'space-between',
    },
    box5: {
      backgroundColor: colorSet.thirBackground,
      width: width * 0.31,
      height: width * 0.31,
      borderWidth: 2,
      borderColor: colorSet.thirBackground,
      justifyContent: 'center',
    },
    iconCover: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    notiContainer: {
      backgroundColor: colorSet.thirBackground,
      borderRadius: 15,
    },
    notiContent: {
      backgroundColor: colorSet.componentBackground2,
    },
    notiContainerText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    consumWaterText: {
      color: colorSet.primaryText,
    },
    updateAppearanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorSet.primaryForeground,
      gap: width * 0.07,
    },
    tienTrinh: {
      width: '100%',
      height: 10,
      borderRadius: 10,
    },
  });
};

export default dynamicStyles;