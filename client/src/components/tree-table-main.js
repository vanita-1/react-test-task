import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetTreeData} from '../redux/actions';
import {Table} from 'reactstrap';
import TableCell from './table-cell-component';

class TreeTableMain extends Component {
  componentDidMount() {
    const {GetTreeData} = this.props;
    GetTreeData();
    let i, j;
    let k = 65;
    let num = 1;
    if (document.getElementById("pattern")) {
      for (i = 65; i <= 69; i += 1) {
        for (j = 69; j >= 65; j--) {
          if (j > i)
            document.getElementById("pattern").innerHTML += "&nbsp;";
          else {
            document.getElementById("pattern").innerHTML += String.fromCharCode(k++) + num + "&nbsp;&nbsp;&nbsp;&nbsp;";
            num++;
          }
        }
        document.getElementById("pattern").innerHTML += "<br>";
      }
    }
  }

  render() {
    const {treeData} = this.props;
    const keys = Object.keys(treeData);
    const rows = [];
    keys.forEach((item, i) => {
     rows.push(<tr key={i}>
       {treeData[item].map((column, index) => {
         return <TableCell key={index} data={column} />
       })}
     </tr>)
    });

    return (
        <div>
          <h2>Pattern</h2>
          <div id="pattern">
          </div>
          <br/>
          <h2>Tree view</h2>
          <Table bordered>
            <tbody>
            {rows}
            </tbody>
          </Table>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {treeData} = state.tree;
  return {
    treeData
  };
};

export default connect(mapStateToProps, {
  GetTreeData
})(TreeTableMain);
