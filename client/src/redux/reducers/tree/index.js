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
      let data = action.payload.data;
      let changedData = {};
      changedData = updateArray(data, changedData);
      return Object.assign({}, state, {treeData: changedData});
    case GET_TREE_DATA_ERROR:
      return Object.assign({}, state);
    default:
      return state;
  }
};

function updateArray(data, arrObj) {
  data.forEach(item => {
    if (item.data) {
      if (arrObj[item.level]) {
        arrObj[item.level].push({data: item.data, level: item.level});
      } else {
        arrObj[item.level] = [{data: item.data, level: item.level}];
      }
    }
    if (item.children && item.children.length) {
      updateArray(item.children, arrObj)
    }
  });
  return arrObj;
}


