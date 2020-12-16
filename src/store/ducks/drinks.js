export const Types = {
  FIND_REQUEST: 'drinks/FIND_REQUEST',
  FIND_SUCCESS: 'drinks/FIND_SUCCESS',
  FIND_FAILURE: 'drinks/FIND_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function Drinks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FIND_REQUEST:
      return {...state, loading: true};
    case Types.FIND_SUCCESS:
      return {...state, data: action.payload.data, loading: false, error: null};
    case Types.FIND_FAILURE:
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}

export const Creators = {
  findDrinksRequest: (filterBy, value) => ({
    type: Types.FIND_REQUEST,
    payload: {filterBy, value},
  }),

  findDrinksSuccess: (data) => ({
    type: Types.FIND_SUCCESS,
    payload: {data},
  }),

  findDrinksFailure: (error) => ({
    type: Types.FIND_FAILURE,
    payload: {error},
  }),
};
