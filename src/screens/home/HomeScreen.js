import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useRef,
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
  DonutChart,
  Image,
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
import updateDeviceStorage from '../../core/helpers/updateDeviceStorage';
import Icon from '../../assets/images/svg/Svg';

const {width, height} = Dimensions.get('window');

const fetchData = async setItems => {
  try {
    const data = await updateDeviceStorage.getStoreData('emissionsData');
    if (Array.isArray(data)) {
      setItems(data);
    }
  } catch (error) {
    setItems([]);
  }
};

export const HomeScreen = memo(props => {
  const [items, setItems] = useState([]);
  const isInitialized = useRef(false);
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
    if (!currentUser?.id) {
      return;
    }
  }, [currentUser?.id]);

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
  }, [currentDate]);

  useEffect(() => {
    if (isInitialized.current) {
      updateDeviceStorage.setStoreData('emissionsData', items);
    } else {
      isInitialized.current = true; // Đánh dấu rằng items đã được khởi tạo
    }
  }, [items]);

  useEffect(() => {
    fetchData(setItems);
  }, []);

  useEffect(() => {
    if (currentDate && items) {
      setIsLoading(false);
    }
  }, [currentDate, items]);

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
          imageStyle={{
            tintColor: colorSet.primaryBackground,
            height: height * 0.045,
          }}
          iconSource={theme.icons.add}
          onPress={() => {
            console.log('Add icon');
          }}
        />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const _headerLeft = useCallback(
    () => (
      <View>
        <TouchableIcon
          imageStyle={{
            tintColor: colorSet.primaryBackground,
          }}
          iconSource={menuIcon}
          onPress={() => {
            navigation.openDrawer();
          }}
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
      headerLeft: _headerLeft,
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

  const renderHeader = () => (
    <View ph5>
      <Text style={[styles.headerTitle, styles.textCenter]}>
        Theo dõi bữa ăn
      </Text>
      <Text style={[styles.textCenter, styles.headerText]}>
        Tính toán lượng tiêu thụ hàng ngày của bạn
      </Text>
    </View>
  );

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
            <Text h2 style={styles.userName}>
              Hi Anh
            </Text>
            <Text style={{color: colorSet.primaryBackground}}>
              Bạn đã giảm thiểu{' '}
              <Text bold style={{color: colorSet.thirText}}>
                94kg CO2{' '}
              </Text>
              tháng này này
            </Text>
          </View>
          <View>
            <Avatar.Text size={avatarSize} label="A" />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DonutChart pieData={items} />
          {renderHeader()}
          <View mh5 ph5 pv5 style={styles.flexRow}>
            <View>
              <Image
                rounded
                style={styles.image}
                source={require('../../assets/images/backgroundImages/meal.png')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={localized('Dinner')}
                containerStyle={styles.buttonStyle}
                textStyle={styles.btnTextStyles}
              />
              <Button
                text={localized('Lunch')}
                containerStyle={styles.buttonStyle}
                textStyle={styles.btnTextStyles}
              />
              <Button
                text={localized('Breakfast')}
                containerStyle={styles.buttonStyle}
                textStyle={styles.btnTextStyles}
              />
            </View>
          </View>
          <View ph5 style={styles.flexRow}>
            <Text h3 style={{fontWeight: 'normal'}}>
              Lịch trình gần đây
            </Text>
            <TouchableIcon
              iconSource={theme.icons.add}
              onPress={handlePress}
              imageStyle={styles.iconStyle}
              containerStyle={[styles.iconContainerStyle]}
            />
          </View>
          <HeadingBlock
            localized={localized}
            text={'Today'}
            text2={currentDate}
          />
          <View mb8>
            <ScrollView scrollEnabled={false}>
              <View mh5 pb2 style={[styles.flexRow, styles.listItem]}>
                <View style={styles.flexRow}>
                  <View br5 style={styles.iconContainer}>
                    <Icon.Car width={60} height={25} />
                  </View>
                  <View ml2>
                    <Text h3 style={styles.textItemTitle}>
                      Xe hơi
                    </Text>
                    <Text style={styles.textItemParagraph}>Từ 16h20’ trong 25’</Text>
                    <Text style={styles.textItemParagraph}>Tự động theo dõi</Text>
                  </View>
                </View>
                <View style={styles.listItemRight}>
                  <View style={styles.flexRow}>
                    <Text mr1>0.0kg</Text>
                    <Text>CO2</Text>
                  </View>
                  <View>
                    <Text style={styles.textItemParagraph}>Chỉnh sửa</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
});
