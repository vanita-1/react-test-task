import { combineReducers } from 'redux';
import treeReducer from "../reducers/tree";

const rootReducer = combineReducers({
  tree: treeReducer
});


export default rootReducer;
