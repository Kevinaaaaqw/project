import React, { Component } from "react";
import axios from "axios";

class TodoCreate extends Component {
  state = {
    title: "",
    isComplete:0,
    todoTableId:1

  };
  render() {
    return (
      <div className="container" key={this.state.todoTableId}>
        <h1>待辦事項清單 - 新增</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form action="/Todo/Create" method="post">
              <div className="form-group">
                <label className="control-label" htmlFor="Name">
                  項目名稱
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="Name"
                  name="Name"
                  value={this.state.title}
                  onChange={(e) => {
                    let newstate = { ...this.state };
                    newstate.title = e.target.value;
                    this.setState(newstate);
                  }}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="IsComplete"
                    name="IsComplete"
                    value="1"
                    onChange={()=>{
                        let newstate = { ...this.state };
                        this.state.isComplete === 0 ? newstate.isComplete=1:newstate.isComplete=0;
                        this.setState(newstate)
                    }}
                  />
                  是否已完工
                </label>
              </div>
              <div className="form-group">
                <button
                  id="okButton"
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={async()=>{
                    await axios.post('http://localhost:8000/todo/create',this.state)
                    document.location.href='http://localhost:3000/'
                  }}
                >確定</button>
                |
                <a href="/" className="btn btn-outline-info" >
                  取消
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = async() =>{
    let newstate = {...this.state};
    let gettodoTableId = await axios('http://localhost:8000/todo/list');
    // console.log(gettodoTableId.data[gettodoTableId.data.length-1].todoTableId)
    newstate.todoTableId = gettodoTableId.data[gettodoTableId.data.length-1].todoTableId+1;
    this.setState(newstate)
  }
}

export default TodoCreate;
