import React from 'react';
import { ImageBackground } from 'react-native';
import { useDopebase } from '../../../theming';
import { View } from '../View';
import dynamicStyles from './styles';

const DNImage = props => {
  const { children, style, source } = props;
  const viewStyles = [style];

  return (
    <View {...props}>
      <ImageBackground source={source} style={viewStyles}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default React.memo(useDopebase(DNImage, dynamicStyles));
