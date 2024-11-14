import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useRef,
} from 'react';
import { Dimensions, ScrollView, Alert, ImageBackground, FlatList } from 'react-native';
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
import { useConfig } from '../../config';
import {
  timeFormat,
  getUnixTimeStamp,
  getCurrentDateFormatted,
} from '../../core/helpers/timeFormat';
import HeadingBlock from '../../components/HeadingBlock';
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
  const config = useConfig();
  const suggestList = config.onboardingConfig.suggestList;
  const [items, setItems] = useState([]);
  const isInitialized = useRef(false);
  const { navigation } = props;
  const { pieData, totalEmissionData } = props.route.params;
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
            navigation.goBack();
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

  const calculatePercentage = (value, total) => {
    return Math.round((value / total) * 100);
  };

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
          <ImageBackground
            source={require('../../assets/images/backgroundImages/DetailBg.png')}
            resizeMode="contain"
            zIndex={1}
          >
            <View style={styles.detailInfoContainer}>
              <View mv5 style={styles.detailContent}>
                <Text style={styles.dataInfoText1}>{totalEmissionData} kg</Text>
                <Text style={styles.dataInfoText2}>CO2</Text>
                <Text style={styles.dataInfoText3}>Tháng này</Text>
              </View>
            </View>
          </ImageBackground>
          <HeadingBlock text="Trong đó" />
          <View>
            <View mh5 style={{ rowGap: height * 0.02 }}>
              <View br3 style={styles.detailChartContainer}>
                <View ml3 style={styles.flexRow}>
                  <Icon.WalkIcon width={width * 0.06} height={width * 0.06} />
                  <Text pv3 ph3>
                    {Math.round(pieData[0].value * 100) / 100} kg CO2
                  </Text>
                </View>
                <View mr3>
                  <Text>{calculatePercentage(pieData[0].value, totalEmissionData)}%</Text>
                </View>
                <View br3 style={[styles.detailChartBg, { backgroundColor: "#40ABF6", width: `${calculatePercentage(pieData[0].value, totalEmissionData)}%` }]} />
              </View>
              <View br3 style={styles.detailChartContainer}>
                <View ml3 style={styles.flexRow}>
                  <Icon.TraskIcon width={width * 0.06} height={width * 0.06} />
                  <Text pv3 ph3>
                    {Math.round(pieData[1].value * 100) / 100} kg CO2
                  </Text>
                </View>
                <View mr3>
                  <Text>{calculatePercentage(pieData[1].value, totalEmissionData)}%</Text>
                </View>
                <View br3 style={[styles.detailChartBg, { backgroundColor: "#4FC98F", width: `${calculatePercentage(pieData[1].value, totalEmissionData)}%` }]} />
              </View>
              <View br3 style={styles.detailChartContainer}>
                <View ml3 style={styles.flexRow}>
                  <Icon.BreackfastIcon width={width * 0.06} height={width * 0.06} />
                  <Text pv3 ph3>
                    {Math.round(pieData[2].value * 100) / 100} kg CO2
                  </Text>
                </View>
                <View mr3>
                  <Text>{calculatePercentage(pieData[2].value, totalEmissionData)}%</Text>
                </View>
                <View br3 style={[styles.detailChartBg, { backgroundColor: "#615ECF", width: `${calculatePercentage(pieData[2].value, totalEmissionData)}%` }]} />
              </View>
            </View>
          </View>
          <HeadingBlock text="Gợi ý giảm thiểu" />
          <View mh5 pb5>
            <FlatList
              data={suggestList}
              scrollEnabled={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={[styles.flexRow, styles.suggestItem]}>
                    <View>
                      <View
                        br5
                        style={[styles.iconContainer]}>
                        {item.icon(width * 0.15, height * 0.15)}
                      </View>
                    </View>
                    <View style={styles.suggestItemTextContainer}>
                      <Text style={styles.suggestItemTitle}>{item.title}</Text>
                      <Text numberOfLines={2} style={styles.suggestItemText}>
                        Giảm thiểu <Text style={styles.suggestItemTextValue}>{item.descriptionValue}</Text> so với {item.descriptionText}
                      </Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View mv2 />}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
});
