import React from 'react'
import { ShotChart } from './ShotChart';
import { CountSlider } from "./CountSlider"
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: Number(count) || 2 });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart minCount={this.state.minCount} playerId={this.props.playerId}/>
                <div className="filters">
                    <CountSlider
                        minCount={this.state.minCount}
                        onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
                </div>
            </div>
        );
    }
}