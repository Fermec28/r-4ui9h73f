import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor (){
		super()
		this.state = {
			value: ""
		}
		this.updatetext=this.updatetext.bind(this)
	}

	updatetext(e){
		this.setState({
			value: e.target.value
		})
	}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo"  onChange= {this.updatetext} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App;
