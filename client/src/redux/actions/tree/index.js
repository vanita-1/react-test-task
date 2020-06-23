export const GET_TREE_DATA_ERROR = 'GET_TREE_DATA_ERROR';
export const GET_TREE_DATA = 'GET_TREE_DATA';

export const GetTreeData = () => {
  return (dispatch) => {
    fetch('/tree')
        .then(response => {
          return response.json()
        })
        .then(data => {
              console.log("response ", data);
              dispatch({
                type: GET_TREE_DATA,
                payload: data.data
              });
              return {type: 'success', data: data.data};
            }
        )
        .catch(error => {
          dispatch({
            type: GET_TREE_DATA_ERROR
          });
          return {type: 'error', response: error};
        });
  };
};
