import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../core/dopebase';

const TrendingUpSvg = activeBtn => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  if (activeBtn == 1) {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#0F3D4B"/>
<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  } else {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  }

  return <SvgXml xml={svgXml} />;
};

export default TrendingUpSvg;