const REPO_DATA = 'REPO_DATA';

const initialState = {
  data: [],
  loading: true,
};

//Action creator
export function loadRepos(repos) {
  return {
    type: REPO_DATA,
    payload: repos,
  };
}

//Thunk
export function getRepoData() {
  return function (dispatch) {
    fetch('https://api.github.com/users/tmclean85/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02')
      .then(response => response.json())
      .then(data => {
        dispatch(loadRepos(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

//Reducer
export function RepoReducer(state = initialState, action) {
  switch(action.type) {
    case REPO_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
      default:
        return state;
  }
}
