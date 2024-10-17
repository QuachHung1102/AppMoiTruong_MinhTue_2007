import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../core/dopebase';

export const Svg1 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.652 7.594C9.491 7.788 9.349 7.962 9.228 8.116C8.981 8.431 8.748 8.739 8.528 9.038C6.813 11.383 6 13.204 6 14.381C6 17.461 8.665 20 12 20C15.335 20 18 17.462 18 14.381C18 12.493 16.03 9.251 12.028 4.928C10.836 6.235 10.04 7.128 9.652 7.594ZM12 22C7.582 22 4 18.589 4 14.381C4 12.688 4.971 10.514 6.914 7.858C7.29678 7.32933 7.69769 6.81402 8.116 6.313C8.673 5.645 9.968 4.207 12 2C17.333 7.449 20 11.576 20 14.381C20 18.589 16.418 22 12 22ZM12 19C9.79 19 8 17.294 8 15.19C8 13.788 9.333 11.724 12 9C14.667 11.724 16 13.788 16 15.19C16 17.294 14.21 19 12 19ZM10 15.19C10 16.167 10.874 17 12 17C13.126 17 14 16.167 14 15.19C14 14.653 13.346 13.515 12 11.95C10.654 13.515 10 14.653 10 15.19Z" fill="#5244F3"/>
        </svg>
      `;
      break;
    case 2:
      svgXml = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M9.652 7.594C9.491 7.788 9.349 7.962 9.228 8.116C8.981 8.431 8.748 8.739 8.528 9.038C6.813 11.383 6 13.204 6 14.381C6 17.461 8.665 20 12 20C15.335 20 18 17.462 18 14.381C18 12.493 16.03 9.251 12.028 4.928C10.836 6.235 10.04 7.128 9.652 7.594ZM12 22C7.582 22 4 18.589 4 14.381C4 12.688 4.971 10.514 6.914 7.858C7.29678 7.32933 7.69769 6.81402 8.116 6.313C8.673 5.645 9.968 4.207 12 2C17.333 7.449 20 11.576 20 14.381C20 18.589 16.418 22 12 22ZM12 19C9.79 19 8 17.294 8 15.19C8 13.788 9.333 11.724 12 9C14.667 11.724 16 13.788 16 15.19C16 17.294 14.21 19 12 19ZM10 15.19C10 16.167 10.874 17 12 17C13.126 17 14 16.167 14 15.19C14 14.653 13.346 13.515 12 11.95C10.654 13.515 10 14.653 10 15.19Z" fill="#2C2C2E"/>
          </svg>
        `;
      break;
    default:
      break;
  }

  return <SvgXml xml={svgXml} />;
};

export const Svg2 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4 2.69996L8.26798 2.04898C9.28553 1.28581 10.6738 1.24728 11.7321 1.95283L15.547 4.49611C16.0398 4.82465 16.6188 4.99996 17.2111 4.99996H19C21.2091 4.99996 23 6.79082 23 8.99996V9.49996C23 11.9852 20.9853 14 18.5 14H6C3.23858 14 1 11.7614 1 8.99996V3.99996C1 2.89539 1.89543 1.99996 3 1.99996C3.43274 1.99996 3.85381 2.14031 4.2 2.39996L4.6 2.69996C5.42963 3.32218 6.57037 3.32218 7.4 2.69996ZM14.4376 6.16021L10.6227 3.61693C10.2699 3.38174 9.80716 3.39459 9.46798 3.64898L8.6 4.29996C7.05926 5.45551 4.94074 5.45551 3.4 4.29996L3 3.99996V8.99996C3 10.6568 4.34315 12 6 12H18.5C19.8807 12 21 10.8807 21 9.49996V8.99996C21 7.89539 20.1046 6.99996 19 6.99996H17.2111C16.224 6.99996 15.2589 6.70777 14.4376 6.16021ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5522 19.5523 18 19 18H5C4.44772 18 4 17.5522 4 17ZM5 20C4.44772 20 4 20.4477 4 21C4 21.5522 4.44772 22 5 22H11C11.5523 22 12 21.5522 12 21C12 20.4477 11.5523 20 11 20H5Z" fill="#5244F3"/>
    </svg>
  `;
      break;
    case 2:
      svgXml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M7.4 2.69996L8.26798 2.04898C9.28553 1.28581 10.6738 1.24728 11.7321 1.95283L15.547 4.49611C16.0398 4.82465 16.6188 4.99996 17.2111 4.99996H19C21.2091 4.99996 23 6.79082 23 8.99996V9.49996C23 11.9852 20.9853 14 18.5 14H6C3.23858 14 1 11.7614 1 8.99996V3.99996C1 2.89539 1.89543 1.99996 3 1.99996C3.43274 1.99996 3.85381 2.14031 4.2 2.39996L4.6 2.69996C5.42963 3.32218 6.57037 3.32218 7.4 2.69996ZM14.4376 6.16021L10.6227 3.61693C10.2699 3.38174 9.80716 3.39459 9.46798 3.64898L8.6 4.29996C7.05926 5.45551 4.94074 5.45551 3.4 4.29996L3 3.99996V8.99996C3 10.6568 4.34315 12 6 12H18.5C19.8807 12 21 10.8807 21 9.49996V8.99996C21 7.89539 20.1046 6.99996 19 6.99996H17.2111C16.224 6.99996 15.2589 6.70777 14.4376 6.16021ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5522 19.5523 18 19 18H5C4.44772 18 4 17.5522 4 17ZM5 20C4.44772 20 4 20.4477 4 21C4 21.5522 4.44772 22 5 22H11C11.5523 22 12 21.5522 12 21C12 20.4477 11.5523 20 11 20H5Z" fill="#2C2C2E"/>
      </svg>
    `;
      break;
    default:
      break;
  }

  return <SvgXml xml={svgXml} />;
};

export const Svg3 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6662 6.01806L12 7.21187L13.3338 6.01806C14.0428 5.38348 14.9742 5 16 5C18.2091 5 20 6.7909 20 9.00004C20 9.70983 19.925 10.3755 19.788 11H17.1593L15.9191 8.10608C15.7615 7.7384 15.4 7.5 14.9999 7.5C14.5999 7.5 14.2384 7.7384 14.0808 8.10608L11.9999 12.9614L11.4191 11.6061C11.2615 11.2384 10.9 11 10.4999 11H4.21198C4.07502 10.3755 4 9.70981 4 9C4 6.79086 5.79086 5 8 5C9.02575 5 9.95717 5.38348 10.6662 6.01806ZM2.73075 13C4.52952 17.651 9.16667 20.0126 11.116 20.8254C11.6855 21.0628 12.3145 21.0628 12.884 20.8254C15.3285 19.8061 22 16.3512 22 9.00005C22 5.68634 19.3137 3 16 3C14.4633 3 13.0615 3.57771 12 4.52779C10.9385 3.57771 9.53671 3 8 3C4.68629 3 2 5.68629 2 9C2 9.70175 2.0608 10.368 2.17291 11H2.17285C2.29865 11.7092 2.48906 12.3752 2.73069 13H2.73075ZM4.91282 13H9.84055L11.0808 15.8939C11.2384 16.2616 11.5999 16.5 11.9999 16.5C12.4 16.5 12.7615 16.2616 12.9191 15.8939L14.9999 11.0386L15.5808 12.3939C15.7384 12.7616 16.0999 13 16.4999 13H19.0872C18.5432 14.1049 17.7979 15.0466 16.9678 15.8501C15.2456 17.5169 13.2202 18.5183 12.1143 18.9794C12.0374 19.0114 11.9626 19.0114 11.8857 18.9794C10.7798 18.5183 8.75438 17.5169 7.03224 15.8501C6.20207 15.0466 5.45677 14.105 4.91282 13Z" fill="#5244F3"/>
        </svg>
      `;
      break;
    case 2:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M10.6662 6.01806L12 7.21187L13.3338 6.01806C14.0428 5.38348 14.9742 5 16 5C18.2091 5 20 6.7909 20 9.00004C20 9.70983 19.925 10.3755 19.788 11H17.1593L15.9191 8.10608C15.7615 7.7384 15.4 7.5 14.9999 7.5C14.5999 7.5 14.2384 7.7384 14.0808 8.10608L11.9999 12.9614L11.4191 11.6061C11.2615 11.2384 10.9 11 10.4999 11H4.21198C4.07502 10.3755 4 9.70981 4 9C4 6.79086 5.79086 5 8 5C9.02575 5 9.95717 5.38348 10.6662 6.01806ZM2.73075 13C4.52952 17.651 9.16667 20.0126 11.116 20.8254C11.6855 21.0628 12.3145 21.0628 12.884 20.8254C15.3285 19.8061 22 16.3512 22 9.00005C22 5.68634 19.3137 3 16 3C14.4633 3 13.0615 3.57771 12 4.52779C10.9385 3.57771 9.53671 3 8 3C4.68629 3 2 5.68629 2 9C2 9.70175 2.0608 10.368 2.17291 11H2.17285C2.29865 11.7092 2.48906 12.3752 2.73069 13H2.73075ZM4.91282 13H9.84055L11.0808 15.8939C11.2384 16.2616 11.5999 16.5 11.9999 16.5C12.4 16.5 12.7615 16.2616 12.9191 15.8939L14.9999 11.0386L15.5808 12.3939C15.7384 12.7616 16.0999 13 16.4999 13H19.0872C18.5432 14.1049 17.7979 15.0466 16.9678 15.8501C15.2456 17.5169 13.2202 18.5183 12.1143 18.9794C12.0374 19.0114 11.9626 19.0114 11.8857 18.9794C10.7798 18.5183 8.75438 17.5169 7.03224 15.8501C6.20207 15.0466 5.45677 14.105 4.91282 13Z" fill="#2C2C2E"/>
        </svg>
      `;
      break;
    default:
      break;
  }

  return <SvgXml xml={svgXml} />;
};

export const Svg4 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6586 12.2615L4.6586 13.8651C3.14374 14.0386 2 15.3208 2 16.8456V17.0307L2.00504 17.2052C2.07494 18.4116 2.86521 19.4248 3.95213 19.8211L4.137 19.8808L4.18747 20.0292C4.61526 21.1928 5.71775 21.9998 7 21.9998L7.17627 21.9947C8.33308 21.9277 9.31403 21.2052 9.75329 20.1931L9.829 19.9998H14.176L14.1866 20.0292C14.6143 21.1928 15.7168 21.9998 17 21.9998L17.1763 21.9947C18.4011 21.9237 19.4288 21.1179 19.8251 20.0116L19.873 19.8638L20.0293 19.8123C21.193 19.3846 22 18.2821 22 16.9998V15.242C22 15.1279 21.9935 15.0139 21.9805 14.9006C21.792 13.2545 20.3047 12.0729 18.6586 12.2615ZM18.8862 14.2485C19.4349 14.1856 19.9307 14.5795 19.9935 15.1282C19.9978 15.166 20 15.204 20 15.242V16.9998C20 17.5241 19.5945 17.9588 19.0757 17.997L18.9633 18.0005C18.464 18.0188 18.0614 18.4009 18.0064 18.8861L18 18.9998C18 19.5126 17.614 19.9353 17.1159 19.9931L16.9991 19.9998C16.4748 19.9998 16.0401 19.5943 16.0019 19.0755L15.9984 18.9631C15.9787 18.4255 15.5371 17.9998 14.9991 17.9998H9C8.48716 17.9998 8.06449 18.3859 8.00673 18.8832L8 18.9998C8 19.5521 7.55228 19.9998 7 19.9998C6.47568 19.9998 6.04105 19.5943 6.00278 19.0755L5.99933 18.9631C5.98098 18.4639 5.59892 18.0612 5.11369 18.0062L4.96911 17.9998C4.43389 17.9998 4 17.5659 4 17.0307V16.8456C4 16.3373 4.38125 15.9099 4.8862 15.8521L18.8862 14.2485Z" fill="#5244F3"/>
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.9148 2.98192C15.451 2.54301 17.0498 3.38509 17.5702 4.87424L17.6235 5.04233L18.9615 9.7252C19.1132 10.2562 18.8057 10.8097 18.2747 10.9614C17.7816 11.1023 17.2691 10.8473 17.077 10.3849L17.0385 10.2746L15.7005 5.59177C15.5488 5.06074 14.9953 4.75325 14.4642 4.90497L14.3764 4.93452L14.2918 4.97207L12.4472 5.89435C11.9532 6.14134 11.3525 5.94111 11.1055 5.44714C10.8762 4.98844 11.0325 4.43775 11.4515 4.16367L11.5528 4.10549L13.3973 3.18321C13.5632 3.10026 13.7365 3.03288 13.9148 2.98192Z" fill="#5244F3"/>
        </svg>
      `;
      break;
    case 2:
      svgXml = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M18.6586 12.2615L4.6586 13.8651C3.14374 14.0386 2 15.3208 2 16.8456V17.0307L2.00504 17.2052C2.07494 18.4116 2.86521 19.4248 3.95213 19.8211L4.137 19.8808L4.18747 20.0292C4.61526 21.1928 5.71775 21.9998 7 21.9998L7.17627 21.9947C8.33308 21.9277 9.31403 21.2052 9.75329 20.1931L9.829 19.9998H14.176L14.1866 20.0292C14.6143 21.1928 15.7168 21.9998 17 21.9998L17.1763 21.9947C18.4011 21.9237 19.4288 21.1179 19.8251 20.0116L19.873 19.8638L20.0293 19.8123C21.193 19.3846 22 18.2821 22 16.9998V15.242C22 15.1279 21.9935 15.0139 21.9805 14.9006C21.792 13.2545 20.3047 12.0729 18.6586 12.2615ZM18.8862 14.2485C19.4349 14.1856 19.9307 14.5795 19.9935 15.1282C19.9978 15.166 20 15.204 20 15.242V16.9998C20 17.5241 19.5945 17.9588 19.0757 17.997L18.9633 18.0005C18.464 18.0188 18.0614 18.4009 18.0064 18.8861L18 18.9998C18 19.5126 17.614 19.9353 17.1159 19.9931L16.9991 19.9998C16.4748 19.9998 16.0401 19.5943 16.0019 19.0755L15.9984 18.9631C15.9787 18.4255 15.5371 17.9998 14.9991 17.9998H9C8.48716 17.9998 8.06449 18.3859 8.00673 18.8832L8 18.9998C8 19.5521 7.55228 19.9998 7 19.9998C6.47568 19.9998 6.04105 19.5943 6.00278 19.0755L5.99933 18.9631C5.98098 18.4639 5.59892 18.0612 5.11369 18.0062L4.96911 17.9998C4.43389 17.9998 4 17.5659 4 17.0307V16.8456C4 16.3373 4.38125 15.9099 4.8862 15.8521L18.8862 14.2485Z" fill="#2C2C2E"/>
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.9148 2.98192C15.451 2.54301 17.0498 3.38509 17.5702 4.87424L17.6235 5.04233L18.9615 9.7252C19.1132 10.2562 18.8057 10.8097 18.2747 10.9614C17.7816 11.1023 17.2691 10.8473 17.077 10.3849L17.0385 10.2746L15.7005 5.59177C15.5488 5.06074 14.9953 4.75325 14.4642 4.90497L14.3764 4.93452L14.2918 4.97207L12.4472 5.89435C11.9532 6.14134 11.3525 5.94111 11.1055 5.44714C10.8762 4.98844 11.0325 4.43775 11.4515 4.16367L11.5528 4.10549L13.3973 3.18321C13.5632 3.10026 13.7365 3.03288 13.9148 2.98192Z" fill="#2C2C2E"/>
          </svg>
        `;
      break;
    default:
      break;
  }

  return <SvgXml xml={svgXml} />;
};

export const Svg5 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M17 14V16C17 17.103 16.103 18 15 18C13.897 18 13 17.103 13 16V8C13 5.79443 11.2056 4 9 4C6.79443 4 5 5.79443 5 8V10H7V8C7 6.89697 7.89697 6 9 6C10.103 6 11 6.89697 11 8V16C11 18.2056 12.7944 20 15 20C17.2056 20 19 18.2056 19 16V14H17Z" fill="#5244F3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9C8.59768 9 9.90366 10.2489 9.99491 11.8237L10 12V18C10 19.5977 8.75108 20.9037 7.17627 20.9949L7 21H5C3.40232 21 2.09634 19.7511 2.00509 18.1763L2 18V12C2 10.4023 3.24892 9.09634 4.82373 9.00509L5 9H7ZM7 11H5C4.48716 11 4.06449 11.386 4.00673 11.8834L4 12V18C4 18.5128 4.38604 18.9355 4.88338 18.9933L5 19H7C7.51284 19 7.93551 18.614 7.99327 18.1166L8 18V12C8 11.4872 7.61396 11.0645 7.11662 11.0067L7 11ZM19 3C20.5977 3 21.9037 4.24892 21.9949 5.82373L22 6V12C22 13.5977 20.7511 14.9037 19.1763 14.9949L19 15H17C15.4023 15 14.0963 13.7511 14.0051 12.1763L14 12V6C14 4.40232 15.2489 3.09634 16.8237 3.00509L17 3H19ZM19 5H17C16.4872 5 16.0645 5.38604 16.0067 5.88338L16 6V12C16 12.5128 16.386 12.9355 16.8834 12.9933L17 13H19C19.5128 13 19.9355 12.614 19.9933 12.1166L20 12V6C20 5.48716 19.614 5.06449 19.1166 5.00673L19 5Z" fill="#5244F3"/>
        </svg>
      `;
      break;
    case 2:
      svgXml = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M17 14V16C17 17.103 16.103 18 15 18C13.897 18 13 17.103 13 16V8C13 5.79443 11.2056 4 9 4C6.79443 4 5 5.79443 5 8V10H7V8C7 6.89697 7.89697 6 9 6C10.103 6 11 6.89697 11 8V16C11 18.2056 12.7944 20 15 20C17.2056 20 19 18.2056 19 16V14H17Z" fill="#2C2C2E"/>
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M7 9C8.59768 9 9.90366 10.2489 9.99491 11.8237L10 12V18C10 19.5977 8.75108 20.9037 7.17627 20.9949L7 21H5C3.40232 21 2.09634 19.7511 2.00509 18.1763L2 18V12C2 10.4023 3.24892 9.09634 4.82373 9.00509L5 9H7ZM7 11H5C4.48716 11 4.06449 11.386 4.00673 11.8834L4 12V18C4 18.5128 4.38604 18.9355 4.88338 18.9933L5 19H7C7.51284 19 7.93551 18.614 7.99327 18.1166L8 18V12C8 11.4872 7.61396 11.0645 7.11662 11.0067L7 11ZM19 3C20.5977 3 21.9037 4.24892 21.9949 5.82373L22 6V12C22 13.5977 20.7511 14.9037 19.1763 14.9949L19 15H17C15.4023 15 14.0963 13.7511 14.0051 12.1763L14 12V6C14 4.40232 15.2489 3.09634 16.8237 3.00509L17 3H19ZM19 5H17C16.4872 5 16.0645 5.38604 16.0067 5.88338L16 6V12C16 12.5128 16.386 12.9355 16.8834 12.9933L17 13H19C19.5128 13 19.9355 12.614 19.9933 12.1166L20 12V6C20 5.48716 19.614 5.06449 19.1166 5.00673L19 5Z" fill="#2C2C2E"/>
          </svg>
        `;
      break;
    default:
      break;
  }

  return <SvgXml xml={svgXml} />;
};

export const Svg6 = ({color}) => {
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  let svgXml;
  switch (color) {
    case 1:
      svgXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
          <path opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M6.98433 4.98645C6.43282 4.99507 5.99241 5.44859 5.99996 6.00012V11.8322C5.98211 11.9401 5.98211 12.0503 5.99996 12.1583V18.0001C5.99486 18.3608 6.18433 18.6962 6.49583 18.878C6.80733 19.0598 7.19259 19.0598 7.50409 18.878C7.81558 18.6962 8.00506 18.3608 7.99996 18.0001V13.0001H18V18.0001C17.9949 18.3608 18.1843 18.6962 18.4958 18.878C18.8073 19.0598 19.1926 19.0598 19.5041 18.878C19.8156 18.6962 20.0051 18.3608 20 18.0001V12.1681C20.0178 12.0601 20.0178 11.9499 20 11.8419V6.00012C20.0037 5.72982 19.8978 5.46954 19.7064 5.27857C19.5151 5.08761 19.2546 4.98223 18.9843 4.98645C18.4328 4.99507 17.9924 5.44859 18 6.00012V11.0001H7.99996V6.00012C8.00366 5.72982 7.89778 5.46954 7.70645 5.27857C7.51512 5.08761 7.25463 4.98223 6.98433 4.98645Z" fill="#5244F3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98434 6.98645C3.43282 6.99507 2.99241 7.44859 2.99996 8.00012V11.0001H1.99996C1.63932 10.995 1.30388 11.1845 1.12207 11.496C0.940266 11.8075 0.940266 12.1928 1.12207 12.5042C1.30388 12.8157 1.63932 13.0052 1.99996 13.0001H2.99996V16.0001C2.99486 16.3608 3.18434 16.6962 3.49583 16.878C3.80733 17.0598 4.19259 17.0598 4.50409 16.878C4.81558 16.6962 5.00506 16.3608 4.99996 16.0001V12.1681C5.01781 12.0601 5.01781 11.9499 4.99996 11.8419V8.00012C5.00366 7.72982 4.89778 7.46954 4.70645 7.27857C4.51512 7.08761 4.25463 6.98223 3.98434 6.98645ZM21.9843 6.98645C21.4328 6.99507 20.9924 7.44859 21 8.00012V11.8322C20.9821 11.9401 20.9821 12.0503 21 12.1583V16.0001C20.9949 16.3608 21.1843 16.6962 21.4958 16.878C21.8073 17.0598 22.1926 17.0598 22.5041 16.878C22.8156 16.6962 23.0051 16.3608 23 16.0001V13.0001H24C24.3606 13.0052 24.696 12.8157 24.8778 12.5042C25.0597 12.1928 25.0597 11.8075 24.8778 11.496C24.696 11.1845 24.3606 10.995 24 11.0001H23V8.00012C23.0037 7.72982 22.8978 7.46954 22.7065 7.27857C22.5151 7.08761 22.2546 6.98223 21.9843 6.98645Z" fill="#5244F3"/>
        </svg>
      `;
      break;
    case 2:
      svgXml = `
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M6.98433 4.98645C6.43282 4.99507 5.99241 5.44859 5.99996 6.00012V11.8322C5.98211 11.9401 5.98211 12.0503 5.99996 12.1583V18.0001C5.99486 18.3608 6.18433 18.6962 6.49583 18.878C6.80733 19.0598 7.19259 19.0598 7.50409 18.878C7.81558 18.6962 8.00506 18.3608 7.99996 18.0001V13.0001H18V18.0001C17.9949 18.3608 18.1843 18.6962 18.4958 18.878C18.8073 19.0598 19.1926 19.0598 19.5041 18.878C19.8156 18.6962 20.0051 18.3608 20 18.0001V12.1681C20.0178 12.0601 20.0178 11.9499 20 11.8419V6.00012C20.0037 5.72982 19.8978 5.46954 19.7064 5.27857C19.5151 5.08761 19.2546 4.98223 18.9843 4.98645C18.4328 4.99507 17.9924 5.44859 18 6.00012V11.0001H7.99996V6.00012C8.00366 5.72982 7.89778 5.46954 7.70645 5.27857C7.51512 5.08761 7.25463 4.98223 6.98433 4.98645Z" fill="#2C2C2E"/>
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M3.98434 6.98645C3.43282 6.99507 2.99241 7.44859 2.99996 8.00012V11.0001H1.99996C1.63932 10.995 1.30388 11.1845 1.12207 11.496C0.940266 11.8075 0.940266 12.1928 1.12207 12.5042C1.30388 12.8157 1.63932 13.0052 1.99996 13.0001H2.99996V16.0001C2.99486 16.3608 3.18434 16.6962 3.49583 16.878C3.80733 17.0598 4.19259 17.0598 4.50409 16.878C4.81558 16.6962 5.00506 16.3608 4.99996 16.0001V12.1681C5.01781 12.0601 5.01781 11.9499 4.99996 11.8419V8.00012C5.00366 7.72982 4.89778 7.46954 4.70645 7.27857C4.51512 7.08761 4.25463 6.98223 3.98434 6.98645ZM21.9843 6.98645C21.4328 6.99507 20.9924 7.44859 21 8.00012V11.8322C20.9821 11.9401 20.9821 12.0503 21 12.1583V16.0001C20.9949 16.3608 21.1843 16.6962 21.4958 16.878C21.8073 17.0598 22.1926 17.0598 22.5041 16.878C22.8156 16.6962 23.0051 16.3608 23 16.0001V13.0001H24C24.3606 13.0052 24.696 12.8157 24.8778 12.5042C25.0597 12.1928 25.0597 11.8075 24.8778 11.496C24.696 11.1845 24.3606 10.995 24 11.0001H23V8.00012C23.0037 7.72982 22.8978 7.46954 22.7065 7.27857C22.5151 7.08761 22.2546 6.98223 21.9843 6.98645Z" fill="#2C2C2E"/>
          </svg>
        `;
      break;
    default:
      break;
  }
  return <SvgXml xml={svgXml} />;
};