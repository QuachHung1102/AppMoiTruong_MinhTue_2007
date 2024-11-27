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
import {
  timeFormat,
  getUnixTimeStamp,
  getCurrentDateFormatted,
} from '../../core/helpers/timeFormat';
import HeadingBlock from '../../components/HeadingBlock';
import Icon from '../../assets/images/svg/Svg';


const { width, height } = Dimensions.get('window');


export const CampaignDetailScreen = memo(props => {
  const { navigation } = props;
  const { item } = props.route.params;
  const currentUser = useCurrentUser();
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(null);
  const avatarSize = useMemo(() => {
    return height * 0.08;
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
    if (currentDate) {
      setIsLoading(false);
    }
  }, [currentDate]);

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

  const goToUserCampaignScreen = useCallback(() => {
    navigation.navigate('CongDong', { screen: 'UserCampaignScreen' });
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
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View mt2>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          </View>
          <View mv3 mh5 br3 style={styles.campaignDetailImg}>
            <Image
              source={{ uri: item.backgroundUrl }}
              rounded
              style={{
                height: height * 0.3,
                borderRadius: width * 0.04,
              }} />
          </View>
          <View mh5>
            <View mt2>
              <View style={styles.flexRow}>
                <Text style={[styles.textL, { color: colorSet.fourthText }]}>{localized('Location')}:</Text>
                <Text style={{ color: colorSet.secondaryText }}>{item.location}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={[styles.textL, { color: colorSet.fourthText }]}>{localized('Time')}:</Text>
                <Text style={{ color: colorSet.secondaryText }}>{item.date}</Text>
              </View>
            </View>
            <View mt3 style={styles.flexRow}>
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
              <View style={[styles.progressContainer2, { width: `${(item.slotCurrent / item.slotTotal) * 100}%` }]} />
            </View>
          </View>
          <View mt3>
            <Text mh5 style={[styles.textL, { color: colorSet.primaryText }]}>{localized('Description')}</Text>
            <Text mh5 mt2 style={{ color: colorSet.secondaryText }}>{'\t'}{item.des}</Text>
          </View>
          <View mt3>
            <Text mh5 style={[styles.textL, { color: colorSet.primaryText }]}>{localized('Advantage')}</Text>
            <View mt4 style={[styles.flexRow, { justifyContent: 'center', columnGap: width * 0.05 }]}>
              <View
                br5
                style={[styles.iconContainer, { backgroundColor: '#4FC98F' }]}>
                <Icon.TraskIcon width={40} height={50} />
              </View>
              <View>
                <Text style={[styles.textL, { color: colorSet.secondaryText }]}>Giảm thiểu</Text>
                <Text style={[styles.textXL, { color: colorSet.thirText }]}>1.7 kg CO₂</Text>
              </View>
            </View>
          </View>
          <View mt3>
            <Text mh5 style={[styles.textL, { color: colorSet.primaryText }]}>{localized('Campaign details')}</Text>
            <Text mh5 mt2 style={{ color: colorSet.secondaryText }}>Chiến dịch bắt đầu vào: {item.date}</Text>
            <Text mh5 mt2 style={{ color: colorSet.secondaryText }}>{item.detailCampaign}</Text>
          </View>
          <View mv5 style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={goToUserCampaignScreen}>
              <Avatar.Text size={avatarSize} label={item.userCreate.split(' ').at(-1)[0]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToUserCampaignScreen}>
              <Text mt2 style={[styles.textL, { color: colorSet.primaryText }]}>{item.userCreate}</Text>
            </TouchableOpacity>
          </View>
          <View ph5 pv5 style={[styles.flexRow, { columnGap: width * 0.05, backgroundColor: colorSet.primaryBackground }]}>
            <Button fx1 containerStyle={{ height: width * 0.15 }} text={localized('Đăng ký tham gia')} onPress={handlePress} />
            <TouchableIcon
              iconSource={icons.heart}
              onPress={handlePress}
              containerStyle={styles.joinBtn}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
});
