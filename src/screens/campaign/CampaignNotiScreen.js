import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useRef,
} from 'react';
import { Dimensions, ScrollView, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native';
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
  Image,
  ImageR,
} from '../../core/dopebase';
import { Avatar } from 'react-native-paper';
import dynamicStyles from './styles';
import { useCurrentUser } from '../../core/onboarding';
import { useAuth } from '../../core/onboarding/hooks/useAuth';
import {
  timeFormat,
  getUnixTimeStamp,
  getCurrentDateFormatted,
} from '../../core/helpers/timeFormat';
import menuIcon from '../../assets/icons/menu1x.png';
import updateDeviceStorage from '../../core/helpers/updateDeviceStorage';

import { notiDatas } from '../../data/notiData';
import HeadingBlock from '../../components/HeadingBlock';

const { width, height } = Dimensions.get('window');

export const CampaignNotiScreen = memo(props => {
  const [notiDt, setNotiDt] = useState(notiDatas);
  const { navigation } = props;
  const currentUser = useCurrentUser();
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(null);

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
    if (currentDate && notiDt) {
      setIsLoading(false);
    }
  }, [currentDate, notiDt]);

  // const onLogout = useCallback(() => {
  //   authManager?.logout(currentUser);
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'LoadScreen' }],
  //   });
  // }, [authManager, currentUser, navigation]);

  const _headerRight = useCallback(
    () => (
      <View />
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
          iconSource={icons.backArrow}
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
      headerTitle: localized('Notifications'),
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
      },
      headerTitleAlign: 'center',
      headerLeft: _headerLeft,
      headerRight: _headerRight,
      headerStyle: {
        backgroundColor: colorSet.thirBackground,
        borderBottomWidth: 0,
        // borderBottomColor: colorSet.hairline,
        height: height * 0.08,
        elevation: 0,
      },
      headerTintColor: colorSet.primaryBackground,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.notiItemContainer}>
        <View style={styles.notiItemLeft}>
          <ImageR source={item.image} style={styles.notiImage} />
          <View style={styles.notiItemTextContainer}>
            <Text numberOfLines={1} style={styles.notiItemText}>{item.title}</Text>
            <Text numberOfLines={1}>{item.text1}</Text>
            <Text numberOfLines={1} style={styles.notiItemText2}>{item.text2}</Text>
          </View>
        </View>
        <TouchableIcon
          imageStyle={{
            tintColor: colorSet.secondaryText,
            transform: [{ rotate: '180deg' }],
          }}
          iconSource={icons.backArrow}
          onPress={() => {
            console.log(`Go to ...`);
          }}
        />
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
      <View fx1 style={{ backgroundColor: colorSet.secondaryBackground }}>
        <HeadingBlock text={localized('Danh sách thông báo:')} />
        <FlatList
          data={notiDt}
          keyExtractor={(item, index) => String(item + index)}
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          ItemSeparatorComponent={<View style={{ height: height * 0.02 }} />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: height * 0.025 }}
        />
      </View>
    );
  }
});
