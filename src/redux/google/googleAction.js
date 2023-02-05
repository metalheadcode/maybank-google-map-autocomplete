import extractAddress from '../../utils/extractAddress';
import {
  GOOGLE_MAP_FAILED,
  GOOGLE_MAP_SUCCESS,
  INSERT_NEW_ADDRESS,
  POINT_NEW_LOCATION,
  SAVE_AUTOCOMPLETE_RESULT,
  SET_MAP_LOCATION,
  SET_PASS_SEARCH,
} from './googleTypes';

export const setNewAddress = (address) => {
  return {
    type: INSERT_NEW_ADDRESS,
    payload: address,
  };
};

export const pointNewLocation = (location) => {
  return {
    type: POINT_NEW_LOCATION,
    payload: location,
  };
};

export const saveAutocompleteResult = (addressObject) => {
  return {
    type: SAVE_AUTOCOMPLETE_RESULT,
    payload: addressObject,
  };
};

export const googleMapLoaded = () => {
  return {
    type: GOOGLE_MAP_SUCCESS,
  };
};

export const googleMapFailed = (error) => {
  return {
    type: GOOGLE_MAP_FAILED,
    payload: error,
  };
};

export const setPlaceId = (placeId) => {
  return {
    type: SET_MAP_LOCATION,
    payload: `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=place_id:${placeId}&zoom=18&maptype=satellite`,
  };
};

export const setPassSearch = (name, fulladdress, placeId) => {
  return {
    type: SET_PASS_SEARCH,
    payload: {
      name,
      fulladdress,
      placeId,
    },
  };
};

export const loadMap = () => async (dispatch) => {
  if (window.google) {
    return Promise.resolve();
  }

  const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places&v=weekly&callback=Function.prototype`;

  try {
    await new Promise((resolve) => {
      const script = document.createElement('script');
      Object.assign(script, {
        type: 'text/javascript',
        async: true,
        src,
      });
      script.addEventListener('load', () => resolve(script));
      document.head.appendChild(script);
    });

    return dispatch(googleMapLoaded());
  } catch (error) {
    return dispatch(googleMapFailed(error.message));
  }
};

export const autocompletePlaces = (address) => (dispatch) => {
  try {
    const autocomplete = new window.google.maps.places.Autocomplete(address);

    // autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener('place_changed', () => {
      const place_id = autocomplete.getPlace().place_id;
      const address = extractAddress(autocomplete.getPlace());
      const name = autocomplete.getPlace().name;
      dispatch(setPlaceId(place_id));
      dispatch(setPassSearch(name, address, place_id));
    });
  } catch (error) {
    console.log('ERROR', error.message);
    return dispatch(googleMapFailed(error.message));
  }
};
