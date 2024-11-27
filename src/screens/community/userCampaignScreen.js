import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, ActivityIndicator, useTheme, useTranslations, TouchableIcon, Button } from "../../core/dopebase";
import dynamicStyles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Avatar } from "react-native-paper";
import DropDownPicker from 'react-native-dropdown-picker';
import CampaignItem from "../campaign/CampaignItem";
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

export const UserCampaignScreen = memo(() => {
  const [campaignData, setCampaignData] = useState([]);
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Mới nhất');
  const [items, setItems] = useState([
    { label: 'Mới nhất', value: 'new' },
    { label: 'Cũ nhất', value: 'oldest' },
  ]);
  // dropdown
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
    fetchData(setCampaignData, 'campaignData');
  }, []);

  const _CustomHeaderTitle = useCallback(
    () => (
      <View fx1 style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: width * 0.01,
      }}>
        <TouchableOpacity>
          <Avatar.Text size={avatarSize} label={'A'} />
        </TouchableOpacity>
        <View style={{ width: '65%' }}>
          <Text numberOfLines={1} style={[styles.userName, { fontSize: fontSizeSet.l }]}>Trịnh Minh Tuệ</Text>
          <Text numberOfLines={1} style={{ color: colorSet.primaryBackground, fontSize: fontSizeSet.xs }}>Tài khoản cộng đồng</Text>
        </View>
      </View>
    ),
    [],
  );
  // item.userCreate.split(' ').at(-1)[0]

  const _headerRight = useCallback(
    () => (
      <View mr3 ph2 pv2 br2 style={styles.headerRightButton}>
        <TouchableOpacity>
          <Text style={styles.headerRightButtonText}>{localized('Folow')}</Text>
        </TouchableOpacity>
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
      headerTitle: _CustomHeaderTitle,
      headerTitleAlign: 'flex-start',
      headerLeft: _headerLeft,
      headerRight: _headerRight,
      headerStyle: {
        backgroundColor: colorSet.thirBackground,
        borderBottomWidth: 0,
        // borderBottomColor: colorSet.hairline,
        height: height * 0.15,
        elevation: 0,
        borderBottomStartRadius: width * 0.04,
        borderBottomEndRadius: width * 0.04,
      },
      headerTintColor: colorSet.primaryBackground,
    });
  }, []);

  const _renderCampaignItem = useCallback(({ item }) => (
    <CampaignItem item={item} navigation={navigation} />
  ), []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View fx1 style={{ backgroundColor: colorSet.secondaryBackground }}>
        <View mh5 mv3 style={[styles.flexRow, {zIndex: 1000}]}>
          <View fx1>
            <Text h3 style={[styles.textL, { color: colorSet.fourthText }]}>Chiến dịch đã tạo</Text>
          </View>
          <View style={{ width: '35%'}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              listMode="FLATLIST"
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Mới nhất"
              placeholderStyle={{
                color: colorSet.secondaryText,
                fontFamily: 'Nunito-Regular',
              }}
              style={{
                borderColor: colorSet.secondaryText,
              }}
              dropDownContainerStyle={{
                borderColor: colorSet.secondaryText,
              }}
              arrowIconStyle={{
                tintColor: colorSet.secondaryText,
              }}
              labelStyle={{
                color: colorSet.secondaryText,
                fontFamily: 'Nunito-Bold',
              }}
              listItemLabelStyle={{
                color: colorSet.secondaryText,
                fontFamily: 'Nunito-Bold',
              }}
              selectedItemLabelStyle={{
                color: colorSet.secondaryText,
                fontFamily: 'Nunito-Bold',
              }}
              tickIconStyle={{
                tintColor: colorSet.secondaryText,
              }}
              flatListProps={{ initialNumToRender: 4 }}
            />
          </View>
        </View>
        <View fx1>
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

const { width, height } = Dimensions.get("window");