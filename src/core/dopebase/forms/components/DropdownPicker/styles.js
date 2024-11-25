import { StyleSheet, Platform, Dimensions } from 'react-native'

const dynamicStyles = (theme, colorScheme) => {
  const colorSet = theme.colors[colorScheme]
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return StyleSheet.create({
    container: {
      zIndex: 99,
      ...Platform.select({
        web: {
          flexDirection: 'row',
        },
      }),
      marginVertical: windowHeight * 0.025,
    },
    titleContainer: {
      ...Platform.select({
        web: {
          width: '10%',
          marginRight: 20,
        },
      }),
    },
    title: {
      ...Platform.select({
        web: {
          textAlign: 'right',
        },
        default: {
          marginBottom: windowHeight * 0.015,
          textAlign: 'left',
        },
      }),
      marginTop: windowHeight * 0.0125,
      fontSize: 16,
      color: colorSet.primaryText,
      fontWeight: '600',
      fontFamily: 'Nunito-Bold',
    },
    selectedItemContainer: {
      ...Platform.select({
        web: {
          width: windowWidth * 0.2,
          borderRadius: 10,
          color: colorSet.secondaryText,
        },
        default: {
          width: '90%',
          borderRadius: 25,
          color: colorSet.primaryText,
        },
      }),
      borderWidth: 1,
      backgroundColor: colorSet.primaryBackground,
      justifyContent: 'center',
      height: 42,
      borderColor: colorSet.grey9,
      paddingLeft: 10,
    },
    listContainer: {
      width: windowWidth * 0.45,
      zIndex: 9999,
    },

    dropdown: {
      ...Platform.select({
        web: {
          borderWidth: 1,
          borderColor: colorSet.grey9,
          width: windowWidth * 0.2,
          borderRadius: 10,
        },
        default: {
          width: windowWidth * 0.4,
          borderRadius: 25,
        },
      }),
      backgroundColor: colorSet.primaryBackground,
      height: 180,
      overflow: 'hidden',
    },
    overlay: {
      width: '100%',
      height: '100%',
    },

    shadowContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: colorSet.grey3,
    },
    itemText: {
      color: Platform.OS === 'web' ? colorSet.secondaryText : colorSet.primaryText,
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
    },
    checkbox: {
      margin: 8,
    },
  });
};

export default dynamicStyles;
