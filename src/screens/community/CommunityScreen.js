import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, ActivityIndicator, useTheme, useTranslations, TouchableIcon, Button } from "../../core/dopebase";
import dynamicStyles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Avatar } from "react-native-paper";
import { getCurrentDateFormatted } from "../../core/helpers/timeFormat";
import updateDeviceStorage from "../../core/helpers/updateDeviceStorage";
import UserCampaignItem from "./UserCampaignItem";
import { userCampaignData } from "../../data/campaignData";

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

export const CommunityScreen = memo(() => {
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
    return height * 0.08;
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
    // fetchData(setCampaignData, 'campaignData');
    // Vì đây là dữ liệu giả nên ta sẽ không cần fetch dữ liệu từ storage
    if (userCampaignData) {
      setCampaignData(userCampaignData);
    }
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
      headerTitle: localized('Community'),
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
      },
      headerTitleAlign: 'center',
      // headerLeft: _headerLeft,
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
  }, []);

  const _renderUserCampaignItem = useCallback(({ item }) => (
    <UserCampaignItem item={item} navigation={navigation} />
  ), []);

  const onChangeTab = (value) => {
    if (value == activeTab) {
      return;
    } else {
      setActiveTab(value);
    };
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View fx1 style={{ backgroundColor: colorSet.secondaryBackground }}>
        <View mh5 style={styles.flexRow}>
          <TouchableOpacity
            style={activeTab === 'new' ? [styles.communityTabItem, styles.tabActiveBorder] : [styles.communityTabItem, styles.tabNonActiveBorder]}
            onPress={() => onChangeTab('new')}
          >
            <Text style={activeTab === 'new' ? styles.textL : [styles.textL, styles.tabNonActiveText]}>{localized('New')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === 'folowing' ? [styles.communityTabItem, styles.tabActiveBorder] : [styles.communityTabItem, styles.tabNonActiveBorder]}
            onPress={() => onChangeTab('folowing')}
          >
            <Text style={activeTab === 'folowing' ? styles.textL : [styles.textL, styles.tabNonActiveText]}>{localized('Folowing')}</Text>
          </TouchableOpacity>
        </View>
        <View fx1 mt4>
          <FlatList
            data={campaignData}
            keyExtractor={(item, index) => String(index + item)}
            renderItem={_renderUserCampaignItem}
            ItemSeparatorComponent={<View style={{ height: height * 0.025 }} />}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: height * 0.025 }}
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', alignSelf: 'center' }}
          />
        </View>
      </View>
    );
  }
});

const { width, height } = Dimensions.get("window");