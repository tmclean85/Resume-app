const FILTER = 'FILTER';
const FILTERED_PROJECTS = 'FILTERED_PROJECTS';

const initialState = {
  value: [],
  data: [],
};

// Action creator
export function handleFilter(item) {
  return {
    type: FILTER,
    payload: item,
  };
}

export function pushProjects(lang) {
  return {
    type: FILTERED_PROJECTS,
    payload: lang,
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
    case FILTERED_PROJECTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
