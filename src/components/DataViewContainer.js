import React from 'react'
import { ShotChart } from './ShotChart';
import { CountSlider } from "./CountSlider"
import _ from 'lodash';
import { Radio, Row, Col } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        charType: "hexbin",
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: Number(count) || 2 });
    }

    onCharTypeChange = (e) => {
        this.setState({
            charType: e.target.value,
        });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart minCount={this.state.minCount}
                           playerId={this.props.playerId}
                           charType={this.state.charType}/>
                <div className="filters">
                    {this.state.charType === 'hexbin' ? (<CountSlider
                        minCount={this.state.minCount}
                        onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>) : null}
                    <Row className="chart-type-radio">
                        <Col span={12} offset={3}>
                            <RadioGroup onChange={this.onCharTypeChange} value={this.state.charType}>
                                <Radio value={"hexbin"}>Hexbin</Radio>
                                <Radio value={"scatter"}>Scatter</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}