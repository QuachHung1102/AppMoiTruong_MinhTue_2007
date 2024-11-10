import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useRef,
} from 'react';
import { Dimensions, ScrollView, Alert } from 'react-native';
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
import dynamicStyles from './styles';
import {
  timeFormat,
  getUnixTimeStamp,
  getCurrentDateFormatted,
} from '../../core/helpers/timeFormat';
import HeadingBlock from '../../components/HeadingBlock';
import ListItem from './listItem';

import menuIcon from '../../assets/icons/menu1x.png';
import updateDeviceStorage from '../../core/helpers/updateDeviceStorage';
import Icon from '../../assets/images/svg/Svg';

const { width, height } = Dimensions.get('window');

const fetchData = async (setItems, key) => {
  try {
    const data = await updateDeviceStorage.getStoreData(key);
    if (Array.isArray(data)) {
      setItems(data);
    }
  } catch (error) {
    setItems([]);
  }
};

export const DetailScreen = memo(props => {
  const [items, setItems] = useState([]);
  const isInitialized = useRef(false);
  const { navigation } = props;
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const iconSet = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(null);
  const [text, setText] = useState('');
  const [truncateValue, setTruncateValue] = useState(7);

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
  }, [currentDate]);

  useEffect(() => {
    if (isInitialized.current) {
      updateDeviceStorage.setStoreData('emissionsData', items);
    } else {
      isInitialized.current = true; // Đánh dấu rằng items đã được khởi tạo
    }
  }, [items]);

  useEffect(() => {
    fetchData(setItems, 'emissionsData');
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
          iconSource={iconSet.backArrow}
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
      headerTitle: localized('Chi tiết'),
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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: colorSet.primaryBackground }}>
        <ScrollView>
          <View style={{
            backgroundColor: colorSet.thirBackground,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View mv5 style={{
              height: 180,
              width: 180,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 15,
              borderColor: '#4FC98F',
              borderRadius: 100,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}>
              <Text style={styles.dataInfoText1}>1099kg</Text>
              <Text style={styles.dataInfoText2}>CO2</Text>
              <Text style={styles.dataInfoText3}>Tháng này</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
});
