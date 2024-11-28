import React, { memo, useMemo } from 'react';
import { Dimensions, Image as ImageRN, TouchableOpacity } from 'react-native';
import { Image, Text, TouchableIcon, useTheme, useTranslations, View } from '../../core/dopebase';
import { Avatar } from 'react-native-paper';
import dynamicStyles from './styles';

const { width, height } = Dimensions.get('window');

const UserCampaignItem = memo(({ item, navigation }) => {
  const date = new Date();
  const createTime = new Date(item.createdTime);
  const timePassed = date - createTime;
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const avatarSize = useMemo(() => {
    return height * 0.09;
  }, []);

  // Tính toán thời gian đã trôi qua
  const timePassedInDays = Math.floor(timePassed / (1000 * 60 * 60 * 24));
  const timePassedInHours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const timePassedInMinutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));

  let timePassedText;
  if (timePassedInDays > 0) {
    timePassedText = `${timePassedInDays} ngày trước`;
  } else if (timePassedInHours > 0) {
    timePassedText = `${timePassedInHours} giờ trước`;
  } else {
    timePassedText = `${timePassedInMinutes} phút trước`;
  }

  return (
    <View style={styles.userCampaignItemContaier}>
      <View style={styles.userCampaignItemInfo}>
        <View>
          <Avatar.Text size={avatarSize} label={item.user.split(' ').at(-1)[0]} />
        </View>
        <View>
          <Text style={[styles.textL, { color: colorSet.thirText }]}>{item.user}</Text>
          <Text numberOfLines={1} style={[styles.textM, { color: colorSet.secondaryText, width: '95%' }]}>{item.userThink}</Text>
          <View style={[styles.flexRow, { justifyContent: 'flex-start', columnGap: width * 0.005 }]}>
            <ImageRN tintColor={colorSet.thirText} source={icons.pinpoint_fat} style={styles.userCampaignItemIcons} />
            <Text style={[styles.textS, { color: colorSet.secondaryText }]}>{item.locationDetails}</Text>
          </View>
        </View>
      </View>
      <View mv1 br4 style={styles.userCampaignItemImgContaier}>
        <Image source={{ uri: item.backgroundUrl }} style={styles.itemBackgroundImage}></Image>
      </View>
      <View mt3 mb5 style={styles.flexRow}>
        <View>
          <Text>{timePassedText}</Text>
        </View>
        <View style={[styles.flexRow, { columnGap: width * 0.02 }]}>
          <View style={[styles.flexRow, { columnGap: width * 0.008 }]}>
            <TouchableOpacity>
              <ImageRN
                source={icons.heart}
                style={styles.userCampaignItemIcons}
              />
            </TouchableOpacity>
            <Text>34</Text>
          </View>
          <View style={[styles.flexRow, { columnGap: width * 0.008 }]}>
            <TouchableOpacity>
              <ImageRN
                source={icons.comment}
                style={styles.userCampaignItemIcons}
              />
            </TouchableOpacity>
            <Text>12</Text>
          </View>
          <View>
            <TouchableOpacity>
              <ImageRN
                source={icons.link}
                style={styles.userCampaignItemIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
});

export default UserCampaignItem;