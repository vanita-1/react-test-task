import {
  GET_TREE_DATA,
  GET_TREE_DATA_ERROR,
} from '../../actions/tree';

const INITIAL_STATE = {
  treeData: []
};

export default (state = JSON.parse(JSON.stringify(INITIAL_STATE)), action) => {
  switch (action.type) {
    case GET_TREE_DATA:
      return Object.assign({}, state, {treeData: action.payload});
    case GET_TREE_DATA_ERROR:
      return Object.assign({}, state);
    default:
      return state;
  }
};


