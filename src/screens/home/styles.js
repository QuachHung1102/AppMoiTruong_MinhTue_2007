import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '../../core/dopebase';

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance];
  const fontSizeSet = theme.fontSizes;
  const { width, height } = Dimensions.get('window');

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
      fontSize: fontSizeSet.m,
    },
    image: {
      height: 122,
      width: 122,
    },
    textCenter: {
      textAlign: 'center',
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
    headerTitle: {
      fontSize: fontSizeSet.xl,
    },
    headerText: {
      fontSize: fontSizeSet.s,
      color: colorSet.secondText,
    },
    buttonContainer: {
      rowGap: height * 0.015,
    },
    buttonStyle: {
      width: width * 0.375,
      height: height * 0.055,
      paddingBottom: 0,
      paddingTop: 0,
      backgroundColor: colorSet.thirBackground,
    },
    btnTextStyles: {
      fontFamily: 'Nunito-Bold',
      color: colorSet.primaryBackground,
    },
    iconContainerStyle: {
      padding: 0,
    },
    iconStyle: {
      height: height * 0.04,
      tintColor: colorSet.primaryText,
    },
    listItem: {
      borderBottomWidth: 1,
      borderBottomColor: colorSet.hairline,
    },
    listItemRight: {
      alignItems: 'flex-end',
    },
    iconContainer: {
      width: 72,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textItemTitle: {
      fontSize: fontSizeSet.s,
      fontFamily: 'Nunito-Bold',
      fontWeight: '600',
    },
    textItemParagraph: {
      fontSize: fontSizeSet.xs,
      fontFamily: 'Nunito-Regul0ar',
      fontWeight: '400',
      color: colorSet.secondaryText,
    },
    dataInfoText1: {
      fontSize: fontSizeSet.xl,
      color: colorSet.secondaryBackground,
      fontWeight: 'bold',
    },
    dataInfoText2: {
      fontSize: fontSizeSet.m,
      color: colorSet.thirText,
    },
    dataInfoText3: {
      fontSize: fontSizeSet.s,
      color: '#CCCED5',
    },
    detailInfoContainer: {
      backgroundColor: colorSet.thirBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailContent: {
      height: width * 0.45,
      width: width * 0.45,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: width * 0.04,
      borderColor: '#4FC98F',
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    detailChartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: height * 0.06,
      position: 'relative',
      backgroundColor: colorSet.primaryButtonTextNonActive,
    },
    detailChartBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    suggestItem: {
      columnGap: width * 0.025,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    suggestItemTextContainer: {
    },
    suggestItemTitle: {
      fontSize: fontSizeSet.m,
      color: colorSet.primaryText,
    },
    suggestItemText: {
      width: '80%',
      fontSize: fontSizeSet.s,
      color: colorSet.secondText,
    },
    suggestItemTextValue: {
      color: colorSet.thirText,
    },
  });
};

export default dynamicStyles;
