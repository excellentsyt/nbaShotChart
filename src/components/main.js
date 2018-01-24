import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import {DataViewContainer} from "./DataViewContainer"
import { SearchBar } from "./SearchBar"

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: 203552,
        },
    }

    componentDidMount() {
        this.loadPlayerInfo("Stephen Curry")
    }

    handleSelectPlayer = (name) => {
        this.loadPlayerInfo(name);
    }

    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({
                playerInfo: playerInfo,
            });
        });
    }

    render() {
        return (
            <div className="main">
                <SearchBar className="search" handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}
