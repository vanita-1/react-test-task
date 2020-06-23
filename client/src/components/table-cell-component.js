import React from 'react';

const TableCell = (props) => {
  const {data} = props;
  return <td key={data.level + data.data}>{"Level: " + data.level + ":Data: " + data.data}</td>
};

export default TableCell;
