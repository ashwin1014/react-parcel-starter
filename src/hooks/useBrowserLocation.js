/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';

const DEFAULT_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const useBrowserLocation = (options = DEFAULT_OPTIONS) => {
  const [state, setState] = useState({
    geoLoading: true,
    latitude: null,
    longitude: null,
    formattedAddress: '',
    otherDetails: {
      pinCode: null,
      country: null,
      currState: '',
      city: ''
    }
  });

  let isMounted = true;
  let watchId;

  const location = window.navigator && window.navigator.geolocation;

  const handleLocationEvent = useCallback(
    (event) => {
      if (isMounted) {
        const { latitude } = event.coords;
        const { longitude } = event.coords;

        const geocoder = new google.maps.Geocoder();
        const latLng = new google.maps.LatLng(latitude, longitude);

        geocoder.geocode({ latLng }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            const { formatted_address } = results[0];
            //   console.log(formatted_address);
            const pinCode = results?.[0]?.address_components[results?.[0]?.address_components.length - 1]?.long_name;
            const country = results?.[0]?.address_components[results?.[0]?.address_components.length - 2]?.long_name;
            const currState = results?.[0]?.address_components[results?.[0]?.address_components.length - 3]?.long_name;
            const city = results?.[0]?.address_components[results?.[0]?.address_components.length - 4]?.long_name;
            setState({
              geoLoading: false,
              latitude,
              longitude,
              formattedAddress: formatted_address,
              otherDetails: {
                pinCode,
                country,
                currState,
                city
              }
            });
          } else {
            // eslint-disable-next-line no-console
            console.error(`Geocoding failed: ${status}`);
          }
        });
      }
    },
    [isMounted]
  );

  const handleError = (error) => {
    if (isMounted) {
      setState((prevState) => ({ ...prevState, geoLoading: false, error }));
    }
  };

  useEffect(() => {
    if (location) {
      location.getCurrentPosition(handleLocationEvent, handleError, options);
      watchId = location.watchPosition(handleLocationEvent, handleError, options);
    }
    return () => {
      isMounted = false;
      location.clearWatch(watchId);
    };
  }, [location]);

  return state;
};

export default useBrowserLocation;
