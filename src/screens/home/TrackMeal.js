import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, Alert, ImageBackground, FlatList, SectionList } from 'react-native';
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
} from '../../core/dopebase';
import dynamicStyles from './styles';
import updateDeviceStorage from '../../core/helpers/updateDeviceStorage';
import { getCurrentDateFormatted } from '../../core/helpers/timeFormat';

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

export const TrackMeal = memo((props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(true);
  const { theme, appearance } = useTheme();
  const styles = dynamicStyles(theme, appearance);
  const colorSet = theme.colors[appearance];
  const fontSizeSet = theme.fontSizes;
  const iconSet = theme.icons;
  const { localized } = useTranslations();
  const [listSchedule, setListSchedule] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const avatarSize = useMemo(() => {
    return height * 0.075;
  }, []);

  useEffect(() => {
    const fetchCurrentDate = async () => {
      await new Promise((resolve) => {
        resolve(getCurrentDateFormatted);
      }).then((res) => {
        setCurrentDate(res);
      }).catch((error) => {
        console.error('Error fetching current date in SchuleScreen:', error);
      });
    };
    fetchCurrentDate();
  }, []);

  useEffect(() => {
    fetchData(setListSchedule, 'phatThaiItems');
  }, []);

  useEffect(() => {
    if (listSchedule && currentDate) {
      setIsLoading(false);
    }
  }, [listSchedule, currentDate]);

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
        // borderBottomColor: colorSet.hairline,
        height: height * 0.08,
        elevation: 0,
      },
      headerTintColor: colorSet.primaryBackground,
    });
  }, [_headerLeft, _headerRight, colorSet.primaryBackground, colorSet.thirBackground, localized, navigation]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View fx1 style={{ backgroundColor: colorSet.primaryBackground }}>
        <View style={{ backgroundColor: colorSet.thirBackground }}>
          <Text style={styles.trackHeaderSmTitle}>Bữa trưa</Text>
        </View>
      </View >
    );
  }
});

const { width, height } = Dimensions.get('window');
