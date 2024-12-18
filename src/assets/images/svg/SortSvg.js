import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SortSvg({ width, height, color }) {
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="M13.4415 6.62732H22M13.4415 11.4421H19.5547M13.4415 16.2569H17.1094M5.80564 6V18M5.80564 18L2 14.3317M5.80564 18L9.7566 14.3317" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
  return <SvgXml xml={xml} />;
}
