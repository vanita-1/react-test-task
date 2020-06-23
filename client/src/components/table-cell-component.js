import React from 'react';

const TableCell = (props) => {
  const {data, colspan} = props;
  return <td colSpan={colspan} key={data.level + data.data}>{"Level: " + data.level + ":Data: " + data.data}</td>
};

export default TableCell;
