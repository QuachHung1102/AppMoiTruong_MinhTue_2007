import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Dimensions, TouchableOpacity, Image as ImageRN } from "react-native";
import { View, Text, ActivityIndicator, useTheme, useTranslations, TouchableIcon, Button } from "../../core/dopebase";
import dynamicStyles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Avatar } from "react-native-paper";
import { getCurrentDateFormatted } from "../../core/helpers/timeFormat";
import updateDeviceStorage from "../../core/helpers/updateDeviceStorage";

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

export const UserScreen = memo(() => {
  const [campaignData, setCampaignData] = useState([]);
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(null);
  const [activeTab, setActiveTab] = useState('new');
  const [isLoading, setIsLoading] = useState(true);
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const fontSizeSet = theme.fontSizes;
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const avatarSize = useMemo(() => {
    return height * 0.15;
  }, []);

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
    if (currentDate && campaignData) {
      setIsLoading(false);
    }
  }, [currentDate, campaignData]);

  useEffect(() => {
    fetchData(setCampaignData, 'campaignData');
  }, []);

  const _headerRight = useCallback(
    () => (
      <View>
        <TouchableIcon
          imageStyle={{
            tintColor: colorSet.primaryBackground,
            height: height * 0.04,
          }}
          iconSource={theme.icons.list_circle}
          onPress={() => {
            console.log('pop up list following');
          }}
        />
      </View>
    ),
    [],
  );

  const _headerLeft = useCallback(
    () => (
      <View>
        <TouchableIcon
          containerStyle={{
            paddingRight: 0,
          }}
          imageStyle={{
            tintColor: colorSet.primaryBackground,
            marginRight: 0,
          }}
          iconSource={icons.backArrow}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
    [],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localized('Account'),
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
      },
      headerTitleAlign: 'center',
      // headerLeft: _headerLeft,
      // headerRight: _headerRight,
      headerStyle: {
        backgroundColor: colorSet.thirBackground,
        borderBottomWidth: 0,
        // borderBottomColor: colorSet.hairline,
        height: height * 0.08,
        elevation: 0,
      },
      headerTintColor: colorSet.primaryBackground,
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View mb2 style={styles.userInfo}>
            <Avatar.Text size={avatarSize} label="T" />
            <Text mt4 style={styles.textL}>Trịnh Minh Tuệ</Text>
            <Text style={[styles.textS, { fontWeight: '300', fontFamily: 'Nunito-Regular', color: colorSet.secondaryText }]}>Tham gia từ: 26/02/2023</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.userInfoItem]}>
                <View style={[styles.flexRow, { columnGap: width * 0.025 }]}>
                  <ImageRN
                    source={icons.xedayhang}
                    style={styles.userCampaignItemIcons}
                  />
                  <Text>Đơn hàng của bạn</Text>
                </View>
                <View>
                  <ImageRN
                    source={icons.chevron_right}
                    style={styles.userCampaignItemIcons}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.userInfoItem]}>
                <View style={[styles.flexRow, { columnGap: width * 0.025 }]}>
                  <ImageRN
                    source={icons.bookmark}
                    style={styles.userCampaignItemIcons}
                  />
                  <Text>Đơn hàng của bạn</Text>
                </View>
                <View>
                  <ImageRN
                    source={icons.chevron_right}
                    style={styles.userCampaignItemIcons}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.userInfoItem]}>
                <View style={[styles.flexRow, { columnGap: width * 0.025 }]}>
                  <ImageRN
                    source={icons.message_square_dots}
                    style={styles.userCampaignItemIcons}
                  />
                  <Text>Đơn hàng của bạn</Text>
                </View>
                <View>
                  <ImageRN
                    source={icons.chevron_right}
                    style={styles.userCampaignItemIcons}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.userInfoItem]}>
                <View style={[styles.flexRow, { columnGap: width * 0.025 }]}>
                  <ImageRN
                    source={icons.login}
                    style={styles.userCampaignItemIcons}
                  />
                  <Text>Đơn hàng của bạn</Text>
                </View>
                <View>
                  <ImageRN
                    source={icons.chevron_right}
                    style={styles.userCampaignItemIcons}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.userInfoItem]}>
                <View style={[styles.flexRow, { columnGap: width * 0.025 }]}>
                  <ImageRN
                    source={icons.trash_2}
                    style={styles.userCampaignItemIcons}
                  />
                  <Text>Đơn hàng của bạn</Text>
                </View>
                <View>
                  <ImageRN
                    source={icons.chevron_right}
                    style={styles.userCampaignItemIcons}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
});

const { width, height } = Dimensions.get("window");