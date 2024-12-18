import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { useTranslations } from '../core/dopebase';
import { TrendingUpSvg, MapSvg, GlobeSvg, UserSvg } from '../assets/images/svg';
import Icon from '../assets/images/svg/Svg';

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForVietnameseNames =
  /^[a-zA-ZàáâãèéêẽìíîĩòóôõùúûũỳýỷỹđÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨỲÝỶỸĐ\s]{2,25}$/;

export const ConfigContext = React.createContext({});

const PublicVehicleIcon = (width, height) => <Icon.PublicVihcleIcon width={width} height={height} />;
const AppleIcon = (width, height) => <Icon.AppleIcon width={width} height={height} />;

export const ConfigProvider = ({ children }) => {
  const { localized } = useTranslations();
  const config = {
    isSMSAuthEnabled: true,
    isGoogleAuthEnabled: true,
    isAppleAuthEnabled: true,
    isFacebookAuthEnabled: true,
    forgotPasswordEnabled: true,
    isDelayedLoginEnabled: false,
    appIdentifier: `com.appmoitrmoitruong_trinhminhtue_2k7.rn.${Platform.OS}`,
    facebookIdentifier: '471719465581703',
    webClientId:
      '309397476066-vvvchcvkoo5s8frns4sgqd7sb4cr4sn4.apps.googleusercontent.com',
    onboardingConfig: {
      welcomeTitle: localized('Thanks For Your Info\nHello There!'),
      welcomeCaption: localized(''),
      delayedLoginTitle: localized('Welcome back!'),
      delayedLoginCaption: localized(''),
      walkthroughScreens: [
        {
          icon: require('../assets/icons/firebase-icon.png'),
          title: localized('Firebase'),
          description: localized(
            'Save weeks of hard work by using my codebase.',
          ),
        },
        {
          icon: require('../assets/icons/login-icon.png'),
          title: localized('Authentication & Registration'),
          description: localized(
            'Fully integrated login and sign up flows backed by Firebase.',
          ),
        },
        {
          icon: require('../assets/icons/sms-icon.png'),
          title: localized('SMS Authentication'),
          description: localized(
            'End-to-end SMS OTP verification for your users.',
          ),
        },
        {
          icon: require('../assets/icons/country-picker-icon.png'),
          title: localized('Country Picker'),
          description: localized('Country picker for phone numbers.'),
        },
        {
          icon: require('../assets/icons/reset-password-icon.png'),
          title: localized('Reset Password'),
          description: localized(
            'Fully coded ability to reset password via e-mail.',
          ),
        },
        {
          icon: require('../assets/images/instagram.png'),
          title: localized('Profile Photo Upload'),
          description: localized(
            'Ability to upload profile photos to Firebase Storage.',
          ),
        },
        {
          icon: require('../assets/images/pin.png'),
          title: localized('Geolocation'),
          description: localized(
            'Automatically store user location to Firestore via Geolocation API.',
          ),
        },
        {
          icon: require('../assets/images/notification.png'),
          title: localized('Notifications'),
          description: localized(
            'Automatically update and store push notification tokens into Firestore.',
          ),
        },
      ],
      // Add for app
      quanLyData: [
        {
          icon: require('../assets/icons/lich1.png'),
          text: localized('Lịch dạy'),
        },
        {
          icon: require('../assets/icons/people1.png'),
          text: localized('Lịch họp'),
        },
        {
          icon: require('../assets/icons/kiemTra1.png'),
          text: localized('Bài kiểm tra'),
        },
        {
          icon: require('../assets/icons/baiTap1.png'),
          text: localized('Theo dõi bài tập về nhà'),
        },
        {
          icon: require('../assets/icons/student1.png'),
          text: localized('Lớp GVCN'),
        },
        {
          icon: require('../assets/icons/quetMat1.png'),
          text: localized('Lớp phụ trách giảng dạy'),
        },
        {
          icon: require('../assets/icons/luuTru1.png'),
          text: localized('Đơn từ'),
        },
        {
          icon: require('../assets/icons/suKien1.png'),
          text: localized('Sự kiện'),
        },
        {
          icon: require('../assets/icons/tinNhan1.png'),
          text: localized('Liên lạc'),
        },
        {
          icon: require('../assets/icons/giaoVien1.png'),
          text: localized('Hồ sơ giáo viên'),
        },
        {
          icon: require('../assets/icons/taoThongBao1.png'),
          text: localized('Tạo thông báo'),
        },
      ],
      tabIcons: {
        TheoDoi: {
          focus: TrendingUpSvg(1),
          unFocus: TrendingUpSvg(0),
        },
        ChienDich: {
          focus: MapSvg(1),
          unFocus: MapSvg(0),
        },
        CongDong: {
          focus: GlobeSvg(1),
          unFocus: GlobeSvg(0),
        },
        TaiKhoan: {
          focus: UserSvg(1),
          unFocus: UserSvg(0),
        },
      },
      suggestList: [
        {
          icon: PublicVehicleIcon,
          title: localized('Sử dụng phương tiện công cộng'),
          descriptionValue: '19.8%',
          descriptionText: 'phương tiện cá nhân',
        },
        {
          icon: AppleIcon,
          title: localized('Sử dụng thực phẩm hữu cơ'),
          descriptionValue: '21.62%',
          descriptionText: 'phương tiện cá nhân',
        },
      ],
      menuData: [
        {
          title: localized('Lịch làm việc'),
          icon: require('../assets/images/menu/calendar.png'),
          collapse: [
            {
              title: localized('Lịch dạy và cần làm trong tuần'),
            },
            {
              title: localized('Lịch kiểm tra'),
            },
            {
              title: localized('Lịch họp'),
            },
            {
              title: localized('Kế hoạch sắp tới'),
            },
          ],
        },
        {
          title: localized('Điểm danh'),
          icon: require('../assets/images/menu/curved.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'Home' } },
          },
        },
        {
          title: localized('Đơn từ, phản hồi'),
          icon: require('../assets/images/menu/download.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'QuanLy' } },
          },
        },
        {
          title: localized('Quản lý lớp'),
          icon: require('../assets/images/menu/chart.png'),
          collapse: [
            {
              title: localized('Lớp chủ nhiệm'),
            },
            {
              title: localized('Khối'),
            },
            {
              title: localized('Khóa cũ'),
            },
          ],
        },
        {
          title: localized('Hồ sơ học sinh'),
          icon: require('../assets/images/menu/user-plus.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'QuanLy' } },
          },
        },
        {
          title: localized('Sự kiện'),
          icon: require('../assets/images/menu/star-1.png'),
          collapse: [
            {
              title: localized('Sự kiện trong ngày'),
            },
            {
              title: localized('Sự kiện blala'),
            },
            {
              title: localized('Sự kiện bloblo'),
            },
            {
              title: localized('Đoàn thanh niên jj đấy'),
            },
            {
              title: localized('Không biết'),
            },
          ],
        },
        {
          title: localized('Bài tập về nhà'),
          icon: require('../assets/images/menu/document-filled.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'QuanLy' } },
          },
        },
        {
          title: localized('Liên lạc'),
          icon: require('../assets/images/menu/send-1.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'QuanLy' } },
          },
        },
        {
          title: localized('Cập nhật thông tin'),
          icon: require('../assets/images/menu/pinpaper-plus.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'QuanLy' } },
          },
        },
        {
          title: localized('Cài đặt'),
          icon: require('../assets/images/menu/settings.png'),
          navigateData: {
            name: 'HomeDrawer',
            params: { screen: 'MainStack', params: { screen: 'Home' } },
          },
        },
      ],
      CalendarFiltersBtn: [
        { title: localized('Class') },
        { title: localized('Exam') },
        { title: localized('Group project') },
        { title: localized('Meeting') },
        { title: localized('Home work') },
        { title: localized('Event') },
        { title: localized('Other') },
      ],
      CalendarFiltersCheckboxStatus: [
        { title: localized('In Progress') },
        { title: localized('Unresolved') },
        { title: localized('Completed') },
        { title: localized('Cancelled') },
        { title: localized('Overdue') },
        { title: localized('Urgent') },
      ],
    },
    tosLink: 'https://www.facebook.com/quachhuwng',
    isUsernameFieldEnabled: false,
    smsSignupFields: [
      {
        displayName: localized('First Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'firstName',
        placeholder: 'First Name',
      },
      {
        displayName: localized('Last Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'lastName',
        placeholder: 'Last Name',
      },
      {
        displayName: localized('Username'),
        type: 'default',
        editable: true,
        regex: regexForNames,
        key: 'username',
        placeholder: 'Username',
        autoCapitalize: 'none',
      },
    ],
    signupFields: [
      {
        displayName: localized('First Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'firstName',
        placeholder: 'First Name',
      },
      {
        displayName: localized('Last Name'),
        type: 'ascii-capable',
        editable: true,
        regex: regexForNames,
        key: 'lastName',
        placeholder: 'Last Name',
      },
      {
        displayName: localized('Username'),
        type: 'default',
        editable: true,
        regex: regexForNames,
        key: 'username',
        placeholder: 'Username',
        autoCapitalize: 'none',
      },
      {
        displayName: localized('E-mail Address'),
        type: 'email-address',
        editable: true,
        regex: regexForNames,
        key: 'email',
        placeholder: 'E-mail Address',
        autoCapitalize: 'none',
      },
      {
        displayName: localized('Password'),
        type: 'default',
        secureTextEntry: true,
        editable: true,
        regex: regexForNames,
        key: 'password',
        placeholder: 'Password',
        autoCapitalize: 'none',
      },
    ],
  };

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
