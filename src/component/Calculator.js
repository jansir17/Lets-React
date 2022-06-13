import React from 'react';
import TemperatureInput from './TemperatureInput';
import { Convert, toCelsius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c'
  }
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    })
  }
  render() {
    const { temperature, scale } = this.state;
    const celsius = (scale === 'f' ? Convert(temperature, toCelsius) : temperature);
    const fahrenheit = (scale === 'c' ? Convert(temperature, toFahrenheit) : temperature);
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    )
  }
}
