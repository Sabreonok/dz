import React from "react";
import Item from "./Components/Item";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      status: '',
    }
  }


  changeName = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.age = event.target.value;
    this.setState(copyState);
  };

  changeAge = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.age = event.target.value;
    this.setState(copyState);
  };

  changeStatus = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.status = event.target.value;
    this.setState(copyState);
  };




  deleteAll = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.status = "";
    copyState.age = "";
    copyState.age = "";
    this.setState(copyState);

  }







  render() {
    return (
      <>
        <input type="text" placeholder="name" value={this.state.name} onChange={this.changeName} />
        <input type="number" placeholder="age" value={this.state.age} onChange={this.changeAge} />
        <select name="status" value={this.state.status} onChange={this.changeStatus}>
          <option value="value1">200</option>
          <option value="value2" selected>404</option>
          <option value="value3">600</option>
        </select>

        <button>Send</button>

        <Item content={this.state} />

        <button onClick={this.deleteAll}>X</button>
      </>
    );
  };
};
