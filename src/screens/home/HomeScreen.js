import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
} from 'react';
import {Dimensions, ScrollView, Alert} from 'react-native';
import {
  View,
  Text,
  useTheme,
  useTranslations,
  TouchableIcon,
  ProfilePictureUpdate,
  ActivityIndicator,
  IconButton,
  SearchBar,
  Button,
  Switch,
} from '../../core/dopebase';
import {Avatar} from 'react-native-paper';
import dynamicStyles from './styles';
import {useCurrentUser} from '../../core/onboarding';
import {useAuth} from '../../core/onboarding/hooks/useAuth';
import {
  timeFormat,
  getUnixTimeStamp,
  getCurrentDateFormatted,
} from '../../core/helpers/timeFormat';
import HeadingBlock from '../../components/HeadingBlock';

import menuIcon from '../../assets/icons/menu1x.png';

const {width, height} = Dimensions.get('window');

export const HomeScreen = memo(props => {
  const {navigation} = props;
  const currentUser = useCurrentUser();
  const authManager = useAuth();
  const {localized} = useTranslations();
  const {theme, appearance} = useTheme();
  const colorSet = theme.colors[appearance];
  const styles = dynamicStyles(theme, appearance);
  const [isLoading, setIsLoading] = useState(true);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [text, setText] = useState('');
  const [truncateValue, setTruncateValue] = useState(7);
  const avatarSize = useMemo(() => {
    return height * 0.075;
  }, []);

  const handlePress = () => {
    Alert.alert('Ố la la', 'This feature is not implemented yet');
  };

  useEffect(() => {
    const fetchCurrentDate = async () => {
      await new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
      try {
        const tempdata = await getCurrentDateFormatted;
        setCurrentDate(tempdata);
      } catch (error) {
        console.error('Error fetching current date:', error);
      }
    };
    fetchCurrentDate();
    if (currentDate) {
      setIsLoading(false);
    }
  }, [currentDate]);

  useEffect(() => {
    if (!currentUser?.id) {
      return;
    }
  }, [currentUser?.id]);

  // const onLogout = useCallback(() => {
  //   authManager?.logout(currentUser);
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'LoadScreen' }],
  //   });
  // }, [authManager, currentUser, navigation]);

  const _headerRight = useCallback(
    () => (
      <View>
        <TouchableIcon
          imageStyle={{tintColor: colorSet.primaryBackground}}
          iconSource={menuIcon}
          onPress={() => navigation.openDrawer()}
        />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localized('Theo dõi'),
      headerTitleAlign: 'center',
      headerRight: _headerRight,
      headerStyle: {
        backgroundColor: colorSet.thirBackground,
        borderBottomWidth: 0,
        // borderBottomColor: colorSet.hairline,
        height: height * 0.08,
      },
      headerTintColor: colorSet.primaryBackground,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, backgroundColor: colorSet.primaryBackground}}>
        <View ph5 pv5 style={styles.userInfoContainer}>
          <View>
            <Text h3 style={styles.currentDate}>
              Hi Anh
            </Text>
            <Text>
              Bạn đã giảm thiểu <Text bold>94kg CO2 </Text>tháng này này
            </Text>
          </View>
          <View>
            <Avatar.Text size={avatarSize} label="A" />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeadingBlock
            localized={localized}
            text={'Today'}
            text2={currentDate}
          />

          <HeadingBlock localized={localized} text={'Sắp tới'} />

          <HeadingBlock localized={localized} text={'Quản lý'} />
        </ScrollView>
      </View>
    );
  }
});
