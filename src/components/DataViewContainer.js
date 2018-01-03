import React from 'react'
import { ShotChart } from './ShotChart';


export class DataViewContainer extends React.Component {
    render() {
        return (
            <ShotChart playerId={this.props.playerId}/>
        );
    }
}