import React, { Component } from "react";
import axios from "axios";
class todoDelete extends Component {
  state = {
    list: [{ isComplete: 1, title: "Job X", todoTableId: 1 }],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.list.map((item) => {
          return (
            <table id="jobList" className="table table-striped table-hover">
            <thead>
              <tr>
                <th>項目名稱</th>
                <th>是否已完工</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr key={item.todoTableId}>
              <td>{item.title}</td>
              <td>
                <input
                  className="check-box"
                  disabled="disabled"
                  type="checkbox"
                  checked={item.isComplete}
                />
              </td>
            </tr>
            </table>
          );
        })}
        <div className="d-flex align-items-center">
        <div>確定刪除?</div>
        <button className="btn btn-outline-danger btn-sm m-3 p-3" onClick={this.ok}>
          是
        </button>
        <button className="btn btn-outline-primary btn-sm m-3 p-3" onClick={this.back}>
          否
        </button>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount = async () => {
    let obj = await axios(
      `http://localhost:8000/todo/item/${this.props.match.params.id}`
    );
    let newstate = { ...this.state };
    newstate.list[0] = obj.data;
    console.log(newstate);
    this.setState(newstate);
  };

  ok = async () => {
    let result = await axios.delete(`http://localhost:8000/todo/delete/${this.props.match.params.id}`);
    result.data ? document.location = "/": console.log("errr");
  };
  back = () => {
    document.location = "/";
  };
}

export default todoDelete;
