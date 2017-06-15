import React, { Component } from 'react';
import VerticalSlider from './slider';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      bands: ['60Hz','310Hz','1k','6k','16k'],
      modes: ['Rock','Pop','Jazz','Classical'],
      preference: '',
      initial: [50,50,50,50,50],
      Rock: [60,65,55,80,95],
      Pop: [70,50,45,70,85],
      Jazz: [40,60,35,50,75],
      Classical:[90,85,60,75,65],
      visibility: false,
    }; 
  }
  /** TO change the mode based on user preference */
  handleClick = (e) => {
    this.setState({
      preference: e.target.id
    })
  }
  selectMode = () => {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  render() {
    const { bands, modes, initial, Rock, Pop, Jazz, Classical, preference, visibility } = this.state;
    let dropDown = visibility ? 'display_block' : 'display_none';
    let bandValues = preference == 'Rock' ? Rock : preference == 'Pop' ? Pop : preference == 'Rock' ? Rock : preference == 'Jazz' ? Jazz : preference == 'Classical' ? Classical : initial;
    return (
      <div className="container">
        <div className="clearfix col-xs-8">
          <div className="range">
            <span className="font_size_1">12 db</span>
            <span className="position_relative top_45 font_size_1">0</span>
            <span className="position_relative top_85 font_size_1">-12 db</span>
          </div>
          {
            bands.map((band,index) => {
              let slideValue = bandValues[index];
              return (
                <VerticalSlider 
                  band={band}
                  key={index}
                  slideValue={slideValue}
                  preference={preference}
                />
              )
            })
          }
          <div className="modes">
            <div className="defaultButton display_inline_block" onClick={this.selectMode}>Preset
              <div className={dropDown} >
                 {
                  modes.map((mode,index) =>{
                    return (
                      <div id={mode} key={index} onClick={this.handleClick} className="button">{mode}</div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;