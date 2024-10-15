import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../core/dopebase';

const GlobeSvg = activeBtn => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  if (activeBtn == 1) {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#0F3D4B"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 16 18 16 12C16 6 12 3 12 3M12 21C12 21 8 18 8 12C8 6 12 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="#FCFCFC" stroke-width="1.5"/>
</svg>
`;
  } else {
    svgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 16 18 16 12C16 6 12 3 12 3M12 21C12 21 8 18 8 12C8 6 12 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="#808797" stroke-width="1.5"/>
</svg>
`;
  }

  return <SvgXml xml={svgXml} />;
};

export default GlobeSvg;
