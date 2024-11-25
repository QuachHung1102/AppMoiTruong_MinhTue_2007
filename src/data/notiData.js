import isEmpty from 'lodash/isEmpty';
import { getWeekDates } from '../core/helpers/getWeekDates';

const today = new Date().toISOString().split('T')[0];
const pastDate = getPastDate(7);
const futureDates = getFutureDates(8);
// Lấy chuỗi ngày tuyến tính
const dates = [...pastDate, today, ...futureDates];
// const dates = [today, ...futureDates];

// Lấy chuỗi ngày tuần
const weekDates = getWeekDates();

function getFutureDates(numberOfDays) {
  return Array.from({ length: numberOfDays }, (_, index) => {
    const date = new Date(Date.now() + 864e5 * (index + 1)); // 864e5 == 86400000 == 24*60*60*1000
    return date.toISOString().split('T')[0];
  });
}

function getPastDate(numberOfDays) {
  return Array.from({ length: numberOfDays }, (_, index) => {
    const date = new Date(Date.now() - 864e5 * (numberOfDays - 1 - index)); // 864e5 == 86400000 == 24*60*60*1000
    return date.toISOString().split('T')[0];
  });
}

export const notiDatas = [
  {
    date: dates[0],
    title: 'Lượng khí thải CO2 trong ngày',
    text1: '212.4kg CO2',
    text2: 'Hệ thống',
    image: require('../assets/images/moiTruong/noInternet.png'),
  },
  {
    date: dates[0],
    title: 'Dọn rác biển Sầm Sơn',
    text1: 'Còn 2 ngày',
    text2: 'Thông báo chiến dịch',
    image: require('../assets/images/moiTruong/beach1.png'),
  },
  {
    date: dates[1],
    title: 'Lượng khí thải CO2 trong ngày',
    text1: '212.4kg CO2',
    text2: 'Hệ thống',
    image: require('../assets/images/moiTruong/noInternet.png'),
  },
  {
    date: dates[1],
    title: 'Trồng cây tại công viên Hòa Bình',
    text1: 'Còn 2 ngày',
    text2: 'Hệ thống',
    image: require('../assets/images/moiTruong/trongCay.png'),
  },
  {
    date: dates[1],
    title: 'Đăng ký thành công',
    text1: 'Dọn rác biển Hạ Long',
    text2: 'Thông báo chiến dịch',
    image: require('../assets/images/moiTruong/beach1.png'),
  },
  {
    date: dates[2],
    title: 'Lượng khí thải CO2 trong ngày',
    text1: '188.2 kg CO2',
    text2: 'Hệ thống',
    image: require('../assets/images/moiTruong/noInternet.png'),
  },
];
