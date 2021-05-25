import { PermissionsAndroid, ToastAndroid } from 'react-native';

export const requestPermissions = async () => {
  try {
    let READ_PERM = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      WRITE_PERM = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const granted = await PermissionsAndroid.requestMultiple([
      READ_PERM,
      WRITE_PERM,
    ]);
    console.log(granted);

    if (granted[READ_PERM] === 'denied' || granted[WRITE_PERM] == 'denied') {
      ToastAndroid.show('Please provide the permissions', ToastAndroid.LONG);
      requestPermissions();
    }
  } catch (error) {
    console.error(error);
  }
};
