export const Types = {
  FIND_REQUEST: 'searchList/FIND_REQUEST',
  FIND_SUCCESS: 'searchList/FIND_SUCCESS',
  FIND_FAILURE: 'searchList/FIND_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function searchList(state = INITIAL_STATE, action) {
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
  findDrinksRequest: (search) => ({
    type: Types.FIND_REQUEST,
    payload: {search},
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
