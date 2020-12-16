export const Types = {
  FIND_REQUEST: 'filter/FIND_REQUEST',
  FIND_SUCCESS: 'filter/FIND_SUCCESS',
  FIND_FAILURE: 'filter/FIND_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function Filter(state = INITIAL_STATE, action) {
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
  findFiltersRequest: (filters, filterBy) => ({
    type: Types.FIND_REQUEST,
    payload: {filters, filterBy},
  }),

  findFiltersSuccess: (data) => ({
    type: Types.FIND_SUCCESS,
    payload: {data},
  }),

  findFilterFailure: (error) => ({
    type: Types.FIND_FAILURE,
    payload: {error},
  }),
};
