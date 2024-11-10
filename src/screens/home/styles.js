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
      fontSize: 18,
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
      fontSize: width * 0.06,
    },
    headerText: {
      fontSize: width * 0.037,
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
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
    },
    dataInfoText2: {
      fontSize: 16,
      color: '#4FC98F',
    },
    dataInfoText3: {
      fontSize: 14,
      color: '#CCCED5',
    },
  });
};

export default dynamicStyles;
