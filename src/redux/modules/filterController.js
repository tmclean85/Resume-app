const FILTERED_PROJECTS = 'FILTERED_PROJECTS';

const initialState = {
  data: [],
};

export function pushLanguage(data) {
  return {
    type: FILTERED_PROJECTS,
    payload: data,
  };
}

// Reducer
export function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTERED_PROJECTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
