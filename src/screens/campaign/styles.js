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
    title: {
      fontSize: fontSizeSet.l,
      fontWeight: '600',
      textAlign: 'center',
      width: '70%',
      alignSelf: 'center',
    },
    itemContainer: {
      height: height * 0.4,
      borderRadius: width * 0.03,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colorSet.hairline,
      backgroundColor: colorSet.primaryBackground,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    itemContentContainer: {
      flex: 1,
    },
    itemBackgroundContainer: {
      height: '60%',
    },
    itemBackgroundImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    itemBackgroundImageText: {
      backgroundColor: 'rgba(17, 17, 17, 0.60)',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
      padding: width * 0.02,
      borderBottomRightRadius: width * 0.03,
      maxWidth: width * 0.8,
    },
    itemBackgroundText: {
      color: colorSet.primaryBackground,
    },
    itemContentTitle: {
      color: colorSet.thirText,
      fontWeight: '600',
      fontSize: fontSizeSet.l,
      width: '75%',
    },
    slotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: width * 0.015,
    },
    progressContainer: {
      backgroundColor: colorSet.disabledText,
      width: '100%',
      height: width * 0.015,
      borderRadius: width * 0.01,
    },
    progressContainer2: {
      backgroundColor: colorSet.thirBackground,
      height: width * 0.015,
      borderRadius: width * 0.01,
    },
    itemBtn: {
      backgroundColor: colorSet.thirBackground,
      borderRadius: width * 0.02,
      paddingVertical: width * 0.015,
      paddingHorizontal: width * 0.02,
      justifyContent: 'center',
    },
    itemBtnText: {
      color: colorSet.primaryBackground,
      fontWeight: '400',
    },
    notiImage: {
      width: width * 0.17,
      height: width * 0.17,
      borderRadius: width * 0.04,
    },
    notiItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colorSet.hairline,
      width: '90%',
      padding: width * 0.02,
    },
    notiItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: width * 0.02,
    },
    notiItemTextContainer: {
      width: '65%',
    },
    notiItemText: {
      fontSize: fontSizeSet.m,
    },
    notiItemText2: {
      color: colorSet.secondaryText,
      fontSize: fontSizeSet.xs,
    },
    campaignDetailImg: {
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    textL: {
      fontWeight: '600',
      fontSize: fontSizeSet.l,
    },
    textXL: {
      fontWeight: '600',
      fontSize: fontSizeSet.xl,
    },
    iconContainer: {
      width: 72,
      height: 72,
      justifyContent: 'center',
      alignItems: 'center',
    },
    joinBtn: {
      width: width * 0.15,
      height: width * 0.15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: width * 0.015,
      borderWidth: 2,
      borderColor: colorSet.hairline,
    },
  });
};

export default dynamicStyles;
