import React from 'react';
import { ShotChart } from "./ShotChart";
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer("Stephen Curry").playerId
    }

    componentDidMount() {

    }

    render() {
        return (
          <div className="main">
              <ShotChart playerId={this.state.playerId}/>
          </div>
        );
    }
}