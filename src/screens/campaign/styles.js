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
    userInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colorSet.thirBackground,
      borderBottomRightRadius: width * 0.04,
      borderBottomLeftRadius: width * 0.04,
    },
    userName: {
      fontFamily: 'Nunito-Bold',
      color: colorSet.thirText,
      letterSpacing: 1,
      fontWeight: 'normal',
    },
  });
};

export default dynamicStyles;
