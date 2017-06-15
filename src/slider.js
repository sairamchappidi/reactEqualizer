import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';

class VerticalSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      customValue: ''
    }
  }
/* For resetting the custom value when ever the preference is changed */  
componentWillReceiveProps(nextprops) {
  if(this.props.preference != nextprops.preference){
    this.setState({
      customValue:''
    })
  }
}
/* For setting up user customized slider value  */
 handleChangeHorizontal = (value) => {
     this.setState({
        customValue: value
     })
 }

  render () {
    const { band, slideValue } = this.props;
    const { customValue } = this.state;
    const horizontalLabels = {
      0: 'Low',
      50: 'Medium',
      100: 'High'
    }
    let sliderValue = customValue ?  customValue : slideValue;
    let sliderColor = sliderValue > 75 ? 'red' : sliderValue > 50 ? 'yellow' : 'green';
    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={100}
          value={sliderValue}
          labels={horizontalLabels}
          orientation="vertical"
          onChange={this.handleChangeHorizontal}
        />
        <div className='text_align_center font_size_1'>{band}</div>
      </div>
    )
  }
}

VerticalSlider.propTypes = {
  band: PropTypes.string,
  slideValue: PropTypes.number,
  preference: PropTypes.string,
}

export default VerticalSlider;
