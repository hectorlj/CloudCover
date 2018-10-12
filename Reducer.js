import { combineReducers } from 'redux';

const INITIAL_STATE = {
  filters: {'plex' : true, 'hulu' : true, 'netflix' : true, 'amazon' : true},
  continueWatching : ["Avengers: Infinity War", "The Incredibles"],
  yourList: ["Cars", "Jurassic World", "Coco", "The Hunger Games", "Aladdin", "Batman Begins"],
};

const stateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      const {filters, continueWatching, yourList,} = state;

      filters[action.payload] = !filters[action.payload];
      const newState = {filters, continueWatching, yourList};
      return newState
    default:
      return state
  }
};

export default combineReducers({
  content: stateReducer,
});