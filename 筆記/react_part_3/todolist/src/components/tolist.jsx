import React, { Component } from "react";
import axios from "axios";

class Tolist extends Component {
  state = {
    list: [
      { todoTableId: 1, title: "asasasX", isComplete: 1 },
      { todoTableId: 2, title: "Jassaab Y", isComplete: 0 },
      { todoTableId: 3, title: "Josaasasasdfb Z", isComplete: 1 },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1>
          待辦事項清單
          <a
            href="http://localhost:3000/tolist/todoCreate"
            className="btn btn-outline-success btn-md float-right"
          >
            新增
          </a>
        </h1>

        <table id="jobList" className="table table-striped table-hover">
          <thead>
            <tr>
              <th>項目名稱</th>
              <th>是否已完工</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item) => {
              return (
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
                  <td>
                    <span className="float-right">
                      <a
                        href={"/tolist/Edit/"+item.todoTableId}
                        className="btn btn-outline-primary btn-sm"
                        >
                        編輯
                      </a>{" "}
                      |
                      <a
                        href={`/tolist/todoDelete/${item.todoTableId}`}
                        className="btn btn-outline-danger btn-sm"

                      >
                        刪除
                      </a>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount =  () => {
    this.getinfo()
};

getinfo = async() =>{
      //抓取後端資料
      let obj = await axios("http://localhost:8000/todo/list");
      //複製原本的資料
      let newstate = { ...this.state };
      //更新部分資料
      newstate.list = obj.data;
      //重新覆蓋資料
      this.setState(newstate);
  }
}

export default Tolist;
