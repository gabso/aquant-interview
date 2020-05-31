import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import SubmitCoordinates from './SubmitCoordinates';
import './App.css';

export default class Map extends Component {

    constructor(props) {
		super(props);

		this.state = {
            coordinates:[],
            polyline:[],
        }

    }
    

    addCoordinates = (xcoordinate,ycoordinate) => {
        this.setState(prevState => ({
            coordinates: [...prevState.coordinates, [xcoordinate, ycoordinate]]
          }))
    }
    render(){

        return (
            <div  className = "map">
            <SubmitCoordinates addCoordiantes={this.addCoordinates} className = "coordinates"/>
            <ReactBingmaps className = "customClass"
            polyline = {{
                "location": this.state.coordinates,
                "option": { strokeColor: 'red', strokeThickness: 10}
              }}
            bingmapKey = "AnY5JNV0MIOwSA3XSoZqk7KtpM8CEbC9f_v_4rnYDXlS2Wt0Y7_tB73rbvknjmnB" 
            center = {[13.0827, 80.2707]}
          />
          </div>
          );
 
    }

}