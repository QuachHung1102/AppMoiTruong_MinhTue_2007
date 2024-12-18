import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../core/dopebase';

const MapSvg = activeBtn => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  if (activeBtn == 1) {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#0F3D4B"/>
<path d="M9 5L5.63246 3.87749C4.33739 3.4458 3 4.40974 3 5.77485V17.5585C3 18.4193 3.55086 19.1836 4.36754 19.4558L9 21M9 5L15 3M9 5V21M15 3L19.6325 4.54415C20.4491 4.81638 21 5.58066 21 6.44152V18.2251C21 19.5903 19.6626 20.5542 18.3675 20.1225L15 19M15 3V19M15 19L9 21" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  } else {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5L5.63246 3.87749C4.33739 3.4458 3 4.40974 3 5.77485V17.5585C3 18.4193 3.55086 19.1836 4.36754 19.4558L9 21M9 5L15 3M9 5V21M15 3L19.6325 4.54415C20.4491 4.81638 21 5.58066 21 6.44152V18.2251C21 19.5903 19.6626 20.5542 18.3675 20.1225L15 19M15 3V19M15 19L9 21" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  }

  return <SvgXml xml={svgXml} />;
};

export default MapSvg;
