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

export const phatThaiItems = [
  {
    title: dates[0],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[1],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[2],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[3],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[4],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[5],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
  {
    title: dates[6],
    data: [
      {
        title: 'Xe hơi',
        km: 100,
      },
      {
        title: 'Xe đạp',
        km: 50,
      },
      {
        title: 'Dọn rác',
        kg: 50,
      },
      {
        title: 'Đi bộ',
        km: 50,
      },
      {
        title: 'Bữa sáng',
        kg: 1.4,
        values: {
          hoaqua: 0.2,
          spSua: 0.5,
          spThit: 0.3,
          rauCu: 0.2,
          tinhBot: 0.2,
        },
      },
    ],
  },
];

export function getMarkedDates(items) {
  return items.reduce((marked, item) => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = { marked: true };
    } else {
      marked[item.title] = { disabled: true };
    }
    return marked;
  }, {});
}
