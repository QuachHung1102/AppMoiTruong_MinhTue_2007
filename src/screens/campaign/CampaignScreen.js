import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useRef,
} from 'react';
import { Dimensions, ScrollView, Alert, TouchableOpacity } from 'react-native';
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
import { DropdownPicker } from '../../core/dopebase/forms/components';
import SortSvg from '../../assets/images/svg/SortSvg';
import { FlatList } from 'react-native-gesture-handler';

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

export const CampaignScreen = memo(props => {
  const [campaignData, setCampaignData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(['Tất cả']);
  const { navigation } = props;
  const currentUser = useCurrentUser();
  const authManager = useAuth();
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const [isLoading, setIsLoading] = useState(true);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const avatarSize = useMemo(() => {
    return height * 0.05;
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
    fetchData(setCampaignData, 'campaignData');
  }, []);

  useEffect(() => {
    if (currentDate && campaignData) {
      setIsLoading(false);
    }
  }, [currentDate, campaignData]);

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
            height: height * 0.035,
          }}
          iconSource={theme.icons.bell}
          onPress={() => {
            navigation.navigate('CampaignNotiScreen');
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
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localized('Campaigns'),
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

  const handleSelectItem = useCallback(item => {
    setSelectedItem(item);
  }, []);

  const _renderCampaignItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemBackgroundContainer}>
        <Image source={{ uri: item.backgroundUrl }} style={styles.itemBackgroundImage}>
          <View style={styles.itemBackgroundImageText}>
            <ImageR mr1 source={icons.pinpoint_fat} style={{ width: width * 0.05, height: width * 0.05 }} />
            <Text numberOfLines={1} style={styles.itemBackgroundText}>
              {item.location}
            </Text>
            <ImageR mh1 source={icons.calendar_clock} style={{ width: width * 0.05, height: width * 0.05 }} />
            <Text numberOfLines={1} style={styles.itemBackgroundText}>
              {item.date}
            </Text>
          </View>
        </Image>
      </View>
      <View ph2 pv1 style={styles.itemContentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CampaignDetailScreen', { item });
          }}
        >
          <Text numberOfLines={1} style={styles.itemContentTitle}>{item.title}</Text>
        </TouchableOpacity>
        <View style={styles.flexRow}>
          <View style={styles.slotContainer}>
            <ImageR mh1 source={icons.users_more} style={{ width: width * 0.045, height: width * 0.045 }} />
            <Text>{item.slotCurrent}{' / '}{item.slotTotal}</Text>
          </View>
          <View style={styles.slotContainer}>
            <Text>Còn lại:</Text>
            <Text>{item.timeRemaining} ngày</Text>
          </View>
        </View>
        <View mv2 style={styles.progressContainer}>
          <View />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.slotContainer}>
            <Avatar.Text size={avatarSize} label="A" />
            <Text>{item.userCreate}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CampaignDetailScreen', { item });
            }}
          >
            <View style={[styles.slotContainer, styles.itemBtn]}>
              <ImageR source={icons.user_plus} style={{ width: width * 0.045, height: width * 0.045 }} />
              <Text style={styles.itemBtnText}>Tham gia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

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
              Bạn đã đăng ký{' '}
              <Text bold style={{ color: colorSet.thirText }}>
                1 chiến dịch{' '}
              </Text>
              tháng này
            </Text>
          </View>
          <View>
            <Avatar.Text size={avatarSize} label="A" />
          </View>
        </View>
        <View fx1>
          <View ph5 style={styles.flexRow}>
            <DropdownPicker
              title={'Bộ lọc:'}
              items={['Tất cả', 'Lân cận', 'Sắp hết hạn', 'Đã đăng ký']}
              onSelectItem={handleSelectItem}
              allowMultipleSelection={false}
              selectedItemsList={selectedItem}
            />
            <TouchableOpacity>
              <SortSvg width={width * 0.08} height={width * 0.08} color={'#808797'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={campaignData}
            keyExtractor={(item, index) => String(index + item)}
            renderItem={_renderCampaignItem}
            ItemSeparatorComponent={<View style={{ height: height * 0.025 }} />}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: height * 0.025 }}
            showsVerticalScrollIndicator={false}
            style={{ width: '90%', alignSelf: 'center' }}
          />
        </View>
      </View>
    );
  }
});
