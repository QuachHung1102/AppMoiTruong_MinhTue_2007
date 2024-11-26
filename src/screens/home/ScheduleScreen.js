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
import ListItem from './listItem';
import HeadingBlock from '../../components/HeadingBlock';
import { Avatar } from 'react-native-paper';

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

export const ScheduleScreen = memo((props) => {
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
      headerTitle: localized('Schudule'),
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
      <View fx1 style={{ backgroundColor: colorSet.secondaryBackground }}>
        <View ph5 pv5 style={styles.userInfoContainer}>
          <View>
            <Text h2 style={styles.userName}>
              Hi Anh
            </Text>
            <Text style={{ color: colorSet.primaryBackground }}>
              Bạn đã giảm thiểu{' '}
              <Text bold style={{ color: colorSet.thirText }}>
                94kg CO₂{' '}
              </Text>
              tháng này này
            </Text>
          </View>
          <View>
            <Avatar.Text size={avatarSize} label="A" />
          </View>
        </View>
        <SectionList
          sections={listSchedule}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View>
              {item.km && <ListItem item={item} />}
              {item.kg && <ListItem item={item} />}
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <HeadingBlock
              localized={localized}
              text={title === new Date().toISOString().split('T')[0] ? 'Hôm nay' : title}
            />
          )}
        />
      </View >
    );
  }
});

const { width, height } = Dimensions.get('window');
