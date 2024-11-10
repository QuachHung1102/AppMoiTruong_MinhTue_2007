import updateDeviceStorage from '../../../helpers/updateDeviceStorage';
import { phatThaiItems } from '../../../../data/emissionData';

const emissionsAPI = 'https://reactnative.dev/movies.json'; // phần này sẽ được sửa khi có data

const getDiChuyenData = () => {
  const totalEmission = phatThaiItems.reduce((acc, item) => {
    item.data.forEach(subItem => {
      if (subItem.title === 'Xe hơi') {
        acc += subItem.km * 0.27 || 0;
      } else if (subItem.title === 'Xe đạp') {
        acc += subItem.km * -0.03 || 0;
      } else if (subItem.title === 'Đi bộ') {
        acc += subItem.km * -0.05 || 0;
      }
    });
    return acc;
  }, 0);
  return totalEmission;
};

const getTaiCheData = () => {
  const totalEmission = phatThaiItems.reduce((acc, item) => {
    item.data.forEach(subItem => {
      if (subItem.title === 'Dọn rác') {
        acc += subItem.kg * 1.7 || 0;
      }
    });
    return acc;
  }, 0);
  return totalEmission;
};

const getAnUongData = () => {
  const totalEmission = phatThaiItems.reduce((acc, item) => {
    item.data.forEach(subItem => {
      if (['Bữa sáng', 'Bữa trưa', 'Bữa tối'].includes(subItem.title)) {
        acc +=
          subItem.values.hoaqua * 1 +
          subItem.values.spSua * 4 +
          subItem.values.spThit * 10 +
          subItem.values.rauCu * 0.8 +
          subItem.values.tinhBot * 3 || 0;
      }
    });
    return acc;
  }, 0);
  return totalEmission;
};

const emissionsData = [
  {
    value: getDiChuyenData(),
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  { value: getAnUongData(), color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
  { value: getTaiCheData(), color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
  {
    value: 0,
    color: '#FFA5BA',
    gradientCenterColor: '#FF7F97',
  },
];

export const fetchEmissionsData = async () => {
  try {
    const storedETag = await updateDeviceStorage.getStoreData('emissionsDataETag');
    const response = await fetch(emissionsAPI, {
      headers: {
        emissionsDataETag: storedETag || '',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      const etag = new Date().toISOString().split('T')[0];
      await updateDeviceStorage.setStoreData('emissionsData', emissionsData); // phần này sẽ được sửa khi có data
      await updateDeviceStorage.setStoreData('phatThaiItems', phatThaiItems);
      await updateDeviceStorage.setStoreData('emissionsDataETag', etag);
    } else if (response.status === 304) {
      console.log('Data not modified');
    } else {
      console.error('Failed to fetch agenda items:', response.status);
    }
  } catch (error) {
    console.error('Error fetching agenda items:', error);
  }
};
