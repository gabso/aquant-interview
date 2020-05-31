import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

export default class SubmitCoordinates extends Component {

    constructor(props) {
		super(props);

		this.state = {
            xcoordinate: '',
            ycoordinate: '',

    }
}

handleXChange = (event) => {

    this.setState({xcoordinate: event.target.value});
  }

  handleYChange = (event) => {
    this.setState({ycoordinate: event.target.value});
  }

    render(){

        return (
            <div>
            <label>
            Ycoordinate:
            <input type="text" value={this.state.xcoordinate} onChange={this.handleXChange} />
          </label>
          <label>
          Xcoordinate:
          <input type="text" value={this.state.ycoordinate} onChange={this.handleYChange} />
        </label>
        <button className="square" onClick={() =>{this.props.addCoordiantes(this.state.xcoordinate,this.state.ycoordinate)}}> Add</button>
        </div>                
        );
 
    }

}