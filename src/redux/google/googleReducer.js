import {
  SET_PASS_SEARCH,
  GOOGLE_MAP_FAILED,
  GOOGLE_MAP_SUCCESS,
  INSERT_NEW_ADDRESS,
  POINT_NEW_LOCATION,
  SAVE_AUTOCOMPLETE_RESULT,
  SET_MAP_LOCATION,
} from './googleTypes';

const initialState = {
  address: 'Kuching, Sarawak',
  pointX: '',
  pointY: '',
  googleMapLoaded: false,
  error: '',
  pastSearch: [],
  mapLocationUrl: `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=place_id:ChIJwcT1wtNJzDERK72Wi2Bzthc&zoom=18&maptype=satellite`,
};

export const googleReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_PASS_SEARCH:
      return {
        ...state,
        pastSearch: [...state.pastSearch, actions.payload],
      };
    case SET_MAP_LOCATION:
      return {
        ...state,
        mapLocationUrl: actions.payload,
      };
    case GOOGLE_MAP_SUCCESS:
      return {
        ...state,
        googleMapLoaded: true,
      };
    case GOOGLE_MAP_FAILED:
      return {
        ...state,
        googleMapLoaded: false,
        error: actions.payload,
      };
    case SAVE_AUTOCOMPLETE_RESULT:
      return {
        ...state,
        address: actions.payload,
      };
    case INSERT_NEW_ADDRESS:
      return {
        ...state,
        address: actions.payload,
      };
    case POINT_NEW_LOCATION:
      return {
        ...state,
        pointX: actions.payload,
      };
    default:
      return state;
  }
};
