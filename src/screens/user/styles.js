import { Dimensions, StyleSheet } from "react-native";
import { theme, useTheme } from "../../core/dopebase";

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
    textS: {
      fontWeight: '600',
      fontSize: fontSizeSet.s,
    },
    textM: {
      fontWeight: '600',
      fontSize: fontSizeSet.m,
    },
    textL: {
      fontWeight: '600',
      fontSize: fontSizeSet.l,
    },
    textXL: {
      fontWeight: '600',
      fontSize: fontSizeSet.xl,
    },
    userContainer: {
      width: width * 0.9,
    },
    userInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    userCampaignItemIcons: {
      width: width * 0.075,
      height: width * 0.075,
    },
    userInfoItem: {
      width: '90%',
      alignSelf: 'center', 
      borderBottomWidth: 1,
      borderBottomColor: colorSet.hairline,
      paddingVertical: height * 0.02,
    },
  });
};

export default dynamicStyles;
