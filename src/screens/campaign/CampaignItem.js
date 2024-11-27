import React, { memo, useMemo } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Image, ImageR, Text, useTheme, useTranslations, View } from '../../core/dopebase';
import { Avatar } from 'react-native-paper';
import dynamicStyles from './styles';

export default CampaignItem = memo(({ item, navigation }) => {
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const icons = theme.icons;
  const styles = dynamicStyles(theme, appearance);
  const avatarSize = useMemo(() => {
    return height * 0.05;
  }, []);

  return (
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
          <View style={[styles.progressContainer2, { width: `${(item.slotCurrent / item.slotTotal) * 100}%` }]} />
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
    </View>);
});

const { width, height } = Dimensions.get('window');