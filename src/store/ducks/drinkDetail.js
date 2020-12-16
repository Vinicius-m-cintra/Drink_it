export const Types = {
  FIND_REQUEST: 'drinkDetail/FIND_REQUEST',
  FIND_SUCCESS: 'drinkDetail/FIND_SUCCESS',
  FIND_FAILURE: 'drinkDetail/FIND_FAILURE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default function DrinkDetail(state = INITIAL_STATE, action) {
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
  findDrinkDetailRequest: (idDrink) => ({
    type: Types.FIND_REQUEST,
    payload: {idDrink},
  }),

  findDrinkDetailSuccess: (data) => ({
    type: Types.FIND_SUCCESS,
    payload: {data},
  }),

  findDrinkDetailFailure: (error) => ({
    type: Types.FIND_FAILURE,
    payload: {error},
  }),
};
