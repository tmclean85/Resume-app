const FILTER = 'FILTER';

const initialState = {
  value: [],
};

// Action creator
export function handleFilter(item) {
  return {
    type: FILTER,
    payload: item,
  };
}

// Reducer
export function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
