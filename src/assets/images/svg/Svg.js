import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../core/dopebase';

const Icon = {};

const Svg = ({xmlContent, width, height}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  const xml = xmlContent;

  return <SvgXml xml={xml} width={width} height={height} />;
};

Icon.Car = ({width, height}) => {
  const xml = `
    <svg viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 2127">
        <path id="Vector"
          d="M19.5006 19.8905C19.5006 17.111 17.2403 14.8506 14.4608 14.8506C11.6813 14.8506 9.4209 17.111 9.4209 19.8905C9.4209 22.6699 11.6813 24.9303 14.4608 24.9303C17.2403 24.9303 19.5006 22.6699 19.5006 19.8905ZM10.9404 19.8905C10.9404 17.951 12.5213 16.3701 14.4608 16.3701C16.4003 16.3701 17.9811 17.951 17.9811 19.8905C17.9811 21.83 16.4003 23.4108 14.4608 23.4108C12.5213 23.4108 10.9404 21.83 10.9404 19.8905Z"
          fill="#FCFCFC" />
        <path id="Vector_2"
          d="M14.4656 21.7167C15.4743 21.7167 16.2919 20.8991 16.2919 19.8905C16.2919 18.8818 15.4743 18.0642 14.4656 18.0642C13.457 18.0642 12.6394 18.8818 12.6394 19.8905C12.6394 20.8991 13.457 21.7167 14.4656 21.7167Z"
          fill="#FCFCFC" />
        <path id="Vector_3"
          d="M52.2646 19.8905C52.2646 17.111 50.0042 14.8506 47.2247 14.8506C44.4452 14.8506 42.1848 17.111 42.1848 19.8905C42.1848 22.6699 44.4452 24.9303 47.2247 24.9303C50.0042 24.9303 52.2646 22.6699 52.2646 19.8905ZM43.7043 19.8905C43.7043 17.951 45.2852 16.3701 47.2247 16.3701C49.1642 16.3701 50.745 17.951 50.745 19.8905C50.745 21.83 49.1642 23.4108 47.2247 23.4108C45.2852 23.4108 43.7043 21.83 43.7043 19.8905Z"
          fill="#FCFCFC" />
        <path id="Vector_4"
          d="M47.2247 21.7167C48.2333 21.7167 49.0509 20.8991 49.0509 19.8905C49.0509 18.8818 48.2333 18.0642 47.2247 18.0642C46.2161 18.0642 45.3984 18.8818 45.3984 19.8905C45.3984 20.8991 46.2161 21.7167 47.2247 21.7167Z"
          fill="#FCFCFC" />
        <path id="Vector_5" d="M22.3509 8.62158H19.2646V9.59841H22.3509V8.62158Z" fill="#FCFCFC" />
        <path id="Vector_6" d="M34.0493 8.62158H30.9631V9.59841H34.0493V8.62158Z" fill="#FCFCFC" />
        <path id="Vector_7"
          d="M56.9223 7.90429C56.7996 7.79576 56.6486 7.72497 56.4834 7.71082L42.0009 6.34703L36.154 0.235949C36.0125 0.0849417 35.8143 0 35.6066 0H19.4205C19.2507 0 19.0855 0.0566277 18.9486 0.165164L10.2516 7.06903H3.08342C2.80972 7.06903 2.55961 7.21532 2.42276 7.45127L0.101024 11.519C0.00192522 11.6936 -0.0263887 11.8966 0.0255201 12.09L1.65357 18.1917C1.74323 18.522 2.04053 18.7532 2.38501 18.7532H8.0006C8.33565 18.7532 8.63294 18.5314 8.72732 18.2105C9.4682 15.6812 11.8277 13.9116 14.4609 13.9116C17.7595 13.9116 20.4398 16.5919 20.4398 19.8905C20.4398 20.0981 20.4304 20.3105 20.4068 20.5229C20.3832 20.7352 20.454 20.9523 20.5956 21.108C20.7371 21.2685 20.9448 21.3581 21.1571 21.3581H40.5238C40.9438 21.3581 41.2836 21.0183 41.2836 20.5984C41.2836 20.5512 41.2836 20.5087 41.2694 20.4615C41.2505 20.268 41.2411 20.0745 41.2411 19.8858C41.2411 16.5872 43.9215 13.9068 47.2201 13.9068C49.8674 13.9068 52.2316 15.6859 52.9631 18.2341C53.0574 18.5598 53.3547 18.7815 53.6898 18.7815H57.3847C57.7292 18.7815 58.0312 18.5503 58.1162 18.22L59.9755 11.2265C60.0462 10.9528 59.9613 10.6602 59.7537 10.4714L56.9128 7.89958L56.9223 7.90429ZM3.52229 8.58383H10.5158C10.6857 8.58383 10.8509 8.5272 10.9877 8.41866L19.6848 1.51479H35.281L41.0995 7.59756C41.227 7.72969 41.3968 7.80991 41.5762 7.82879L56.0917 9.1973L57.6349 10.5941H2.37557L3.52229 8.58383ZM56.809 17.2762H54.2466C53.1613 14.3787 50.3535 12.3968 47.2248 12.3968C43.1098 12.3968 39.7546 15.7331 39.731 19.8433H21.9593C21.9358 15.7331 18.5806 12.3968 14.4656 12.3968C11.3558 12.3968 8.55272 14.3599 7.45792 17.2384H2.97017L1.60166 12.1089H58.1823L56.809 17.2715V17.2762Z"
          fill="#FCFCFC" />
        <path id="Vector_8" d="M28.0518 2.6803V7.37568H38.5373L34.5592 2.6803H28.0518Z" fill="#FCFCFC" />
        <path id="Vector_9" d="M15.0364 7.37568H26.6781V2.6803H20.2792L15.0364 7.37568Z" fill="#FCFCFC" />
      </g>
    </svg>
  `;
  return Svg({xmlContent: xml, width: width, height: height});
};

export default Icon;
