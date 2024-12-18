import React, {memo} from 'react';
import {Text as RNText} from 'react-native';
import {useSpacing} from '../../../hooks/useSpacing';
import {useDopebase} from '../../../theming';
import dynamicStyles from './styles';
import {truncateText} from '../../../../../helpers/truncateText';

const Text = props => {
  const {
    style,
    children,
    secondary,
    h1,
    h2,
    h3,
    uppercase,
    lowercase,
    bold,
    styles,
    theme,
    appearance,
    truncateTextNumber,
    numberOfLines,
  } = props;

  const spacingStyles = useSpacing(props);

  const textStyles = [
    secondary ? styles.tnSecondaryText : styles.tnPrimaryText,
    h1 && {fontSize: theme.fontSizes.xxl, fontWeight: theme.fontWeights.l},
    h2 && {fontSize: theme.fontSizes.xl, fontWeight: theme.fontWeights.l},
    h3 && {fontSize: theme.fontSizes.l, fontWeight: theme.fontWeights.l},
    uppercase && {textTransform: 'uppercase'},
    lowercase && {textTransform: 'lowercase'},
    ...spacingStyles,
    style,
    bold && {fontWeight: 'bold'},
    {
      fontFamily: 'Nunito-Bold',
    },
  ];

  return (
    <RNText numberOfLines={numberOfLines} style={textStyles}>
      {truncateTextNumber
        ? truncateText(children, truncateTextNumber)
        : children}
    </RNText>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export default memo(useDopebase(Text, dynamicStyles));
