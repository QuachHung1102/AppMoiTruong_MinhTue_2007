import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, Alert, ImageBackground, FlatList, Pressable } from 'react-native';
import {
  View,
  Text,
  useTheme,
  useTranslations,
  TouchableIcon,
  ActivityIndicator,
  IconButton,
  Button,
  Image,
  ImageR,
} from '../../core/dopebase';
import dynamicStyles from './styles';
import updateDeviceStorage from '../../core/helpers/updateDeviceStorage';
import { getCurrentDateFormatted } from '../../core/helpers/timeFormat';

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

const imageSources = {
  hoaqua: require('../../assets/images/foodImages/spHoaQua.png'),
  spSua: require('../../assets/images/foodImages/spTuSua.png'),
  spThit: require('../../assets/images/foodImages/spThit.png'),
  rauCu: require('../../assets/images/foodImages/spRauCu.png'),
  tinhBot: require('../../assets/images/foodImages/spTinhBot.png'),
};

const itemTitle = {
  hoaqua: 'Hoa quả',
  spSua: 'Sản phẩm từ sữa',
  spThit: 'Đạm động vật',
  rauCu: 'Rau củ',
  tinhBot: 'Tinh bột',
};

export const TrackMealScreen = memo((props) => {
  const { navigation, route } = props;
  const [isLoading, setIsLoading] = useState(true);
  const { theme, appearance } = useTheme();
  const styles = dynamicStyles(theme, appearance);
  const colorSet = theme.colors[appearance];
  const { localized } = useTranslations();
  const [listSchedule, setListSchedule] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchCurrentDate = async () => {
      try {
        const tempdata = await getCurrentDateFormatted;
        setCurrentDate(tempdata);
      } catch (error) {
        console.error('Error fetching current date in TrackMeal:', error);
      }
    };
    fetchCurrentDate();
  }, []);

  useEffect(() => {
    fetchData(setListSchedule, 'phatThaiItems');
  }, []);

  useEffect(() => {
    if (listSchedule.length > 0) {
      const temp = { hoaqua: 0, spSua: 0, spThit: 0, rauCu: 0, tinhBot: 0 };
      listSchedule.map((item) => {
        item.data.map((data) => {
          if (data.title === route.params.meal) {
            temp.hoaqua += data.values.hoaqua;
            temp.spSua += data.values.spSua;
            temp.spThit += data.values.spThit;
            temp.rauCu += data.values.rauCu;
            temp.tinhBot += data.values.tinhBot;
          }
        });
      });
      const itemCount = listSchedule.length;
      temp.hoaqua /= itemCount;
      temp.spSua /= itemCount;
      temp.spThit /= itemCount;
      temp.rauCu /= itemCount;
      temp.tinhBot /= itemCount;
      const keysArray = Object.entries(temp);
      setMealData(keysArray);
    }
  }, [listSchedule, route.params.meal]);

  useEffect(() => {
    if (listSchedule.length > 0 && currentDate) {
      setIsLoading(false);
    }
  }, [listSchedule, currentDate]);

  const _headerRight = useCallback(
    () => (
      <View>
        <TouchableIcon
          imageStyle={{
            tintColor: colorSet.primaryBackground,
            width: width * 0.06,
          }}
          iconSource={theme.icons.warning_circle}
          onPress={() => {
            console.log('Add icon');
          }}
        />
      </View>
    ),
    [colorSet.primaryBackground, theme.icons.warning_circle],
  );

  const _headerLeft = useCallback(
    () => (
      <View>
        <TouchableIcon
          imageStyle={{
            tintColor: colorSet.primaryBackground,
          }}
          iconSource={theme.icons.backArrow}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
    [colorSet.primaryBackground, theme.icons.backArrow, navigation],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localized('Lịch trình'),
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
      },
      headerTitleAlign: 'center',
      headerRight: _headerRight,
      headerLeft: _headerLeft,
      headerStyle: {
        backgroundColor: colorSet.thirBackground,
        borderBottomWidth: 0,
        height: height * 0.08,
        elevation: 0,
      },
      headerTintColor: colorSet.primaryBackground,
    });
  }, [_headerLeft, _headerRight, colorSet.primaryBackground, colorSet.thirBackground, localized, navigation]);

  const _renderItem = useCallback(({ item, index }) => {
    const imgSource = imageSources[item[0]];
    const title = itemTitle[item[0]];
    return (
      <View pt5 style={styles.trackItem}>
        <View style={styles.trackItemImgContainer}>
          <ImageR source={imgSource} />
        </View>
        <View>
          <Text style={styles.trackItemImgContainerTitle}>{localized(title)}</Text>
          <Text style={{ color: colorSet.secondaryText }}>Trung bình <Text style={{ color: colorSet.thirText }}>{item[1].toFixed(2)}kg CO2</Text> một ngày</Text>
        </View>
      </View>
    );
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
          <View pv2>
            <Text style={styles.trackHeaderSmTitle}>{localized(route.params.meal)}</Text>
            <View pt3>
              <Image style={styles.trackBgImg} source={require('../../assets/images/backgroundImages/MealTrackBg.png')} />
            </View>
          </View>
          <View ph5>
            <FlatList
              scrollEnabled={false}
              data={mealData}
              keyExtractor={(item, index) => String(item + index)}
              renderItem={_renderItem}
            />
          </View>
          <View pv5 style={styles.confirmButton}>
            <Button
              text={'Xác nhận'}
              onPress={() => {
                navigation.goBack();
              }}
              containerStyle={{
                backgroundColor: colorSet.thirBackground,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
});
