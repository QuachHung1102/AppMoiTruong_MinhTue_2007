import React, { useMemo, useEffect } from 'react';
import { Pressable } from 'react-native';
import Icon from '../../assets/images/svg/Svg';
import { Text, View, useTheme, useTranslations } from '../../core/dopebase';
import dynamicStyles from './styles';

const ListItem = ({ item }) => {
  const { localized } = useTranslations();
  const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance];
  const styles = dynamicStyles(theme, appearance);

  return (
    <View mh5 mb5 pb2 style={[styles.flexRow, styles.listItem]}>
      <View style={styles.flexRow}>
        {item.title === 'Xe hơi' && (
          <View
            br5
            style={[styles.iconContainer, { backgroundColor: '#40ABF6' }]}>
            <Icon.IconCar width={60} height={25} />
          </View>
        )}
        {item.title === 'Xe đạp' && (
          <View
            br5
            style={[styles.iconContainer, { backgroundColor: '#40ABF6' }]}>
            <Icon.IconBike width={60} height={30} />
          </View>
        )}
        {item.title === 'Dọn rác' && (
          <View
            br5
            style={[styles.iconContainer, { backgroundColor: '#4FC98F' }]}>
            <Icon.TraskIcon width={40} height={50} />
          </View>
        )}
        {item.title === 'Đi bộ' && (
          <View
            br5
            style={[styles.iconContainer, { backgroundColor: '#40ABF6' }]}>
            <Icon.WalkIcon width={40} height={50} />
          </View>
        )}
        {item.title === 'Bữa sáng' && (
          <View
            br5
            style={[styles.iconContainer, { backgroundColor: '#615ECF' }]}>
            <Icon.BreackfastIcon width={40} height={50} />
          </View>
        )}
        <View ml2>
          <Text h3 style={styles.textItemTitle}>
            {localized(item.title)}
          </Text>
          <Text style={styles.textItemParagraph}>Từ 16h20’ trong 25’</Text>
          <Text style={styles.textItemParagraph}>Tự động theo dõi</Text>
        </View>
      </View>
      <View style={styles.listItemRight}>
        <View style={styles.flexRow}>
          <Text mr1>{item.km || item.kg}kg</Text>
          <Text>CO₂</Text>
        </View>
        <View>
          <Pressable>
            {({ pressed }) => {
              return (
                <Text
                  style={
                    pressed
                      ? [styles.textItemParagraph, { color: colorSet.red }]
                      : styles.textItemParagraph
                  }>
                  Chỉnh sửa
                </Text>
              );
            }}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
