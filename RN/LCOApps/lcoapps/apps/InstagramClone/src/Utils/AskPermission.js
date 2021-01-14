import { PermissionsAndroid, ToastAndroid } from 'react-native';

import Snackbar from 'react-native-snackbar';

export const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    console.log(granted);

    if (
      granted['PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE'] ===
        'denied' ||
      granted['PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE'] ===
        'denied'
    ) {
      // ToastAndroid.show(
      //   'Please provide the required permissions to proceed!',
      //   ToastAndroid.LONG,
      // );

      Snackbar.show({
        text: 'Please provide the required permissions to proceed!',
        textColor: '#FFF',
        backgroundColor: 'crimson',
      });

      requestPermission();
    }
  } catch (error) {
    console.error(error);
  }
};
