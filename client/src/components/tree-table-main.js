import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetTreeData} from '../redux/actions';
import {Table} from 'reactstrap';

class TreeTableMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
        viewRows: [],
       viewColumns: [],
    }
  }
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

  createColumn = (column, i) => {
    this.setState({
      viewColumns: column.children,
    });
    return <td key={i}>{"Level: " + column.level + ": Data: " + column.data}</td>
  }

  createRow = (rowData, index) => {
    const {viewRows} = this.state;
    if (rowData && rowData.length) {
      viewRows.push(
          <tr key={index}>
            {rowData.map((item, i) => {
                return this.createColumn(item, i);
              })
            }
          </tr>
      );
      this.setState({viewRows})
    }
  };

  componentDidUpdate(preProps) {
    if (preProps.treeData !== this.props.treeData && this.props.treeData.data) {
      this.createRow(this.props.treeData.data, 0);
    }
  }

  render() {
    const {viewRows} = this.state;
    return (
        <div>
          <h2>Pattern</h2>
          <div id="pattern">
          </div>
          <br/>
          <h2>Tree view</h2>
          <Table bordered>
            <tbody>
              {viewRows}
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
