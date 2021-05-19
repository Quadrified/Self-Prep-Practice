import { useEffect, useState } from 'react';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: null,
});

export default useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState({});

  const getGeoLocation = async () => {
    try {
      let permission = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse', // or 'fine'
        },
      });

      if (!permission) {
        permission = await RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
        console.log(permission);
        const location = await RNLocation.getLatestLocation({
          timeout: 100,
        });
        const { latitude, longitude } = location;
        setGeoLocation({
          latitude,
          longitude,
        });
        // console.log(geoLocation);
      } else {
        const location = await RNLocation.getLatestLocation({
          timeout: 100,
        });
        const { latitude, longitude } = location;
        setGeoLocation({
          latitude,
          longitude,
        });
        // console.log(geoLocation);
      }
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    getGeoLocation();
  }, []);

  return geoLocation;
};
