import updateDeviceStorage from '../../../helpers/updateDeviceStorage';

const emissionsAPI = 'https://reactnative.dev/movies.json'; //phần này sẽ được sửa khi có data
const emissionsData = [
  {
    value: 47,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
  {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
  {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
];

export const fetchEmissionsData = async () => {
  try {
    const storedETag = await updateDeviceStorage.getStoreData(
      'emissionsDataETag',
    );
    const response = await fetch(emissionsAPI, {
      headers: {
        emissionsDataETag: storedETag || '',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      // const etag = response.headers.get('ETag');
      const etag = new Date().toISOString().split('T')[0];
      await updateDeviceStorage.setStoreData('emissionsData', emissionsData); //phần này sẽ được sửa khi có data
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
