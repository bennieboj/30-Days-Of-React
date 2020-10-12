import React from 'react'
import Button from '../shared/Button'
import {countriesData} from '../../data/countries.js'

const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }

export class CountrySelector extends React.Component {
    state = {
      selectedCountry: {},
      countriesData: countriesData
    }
    constructor(props) {
      super(props)  
    }
    render() {
      const {
          countriesData
      } = this.state
      let xx = () => {
        this.setState({ selectedCountry: countriesData[Math.floor(Math.random() * countriesData.length)] })
      }
      return (
        <div>
          <Button
              text='Change Country'
              onClick={xx}
              style={buttonStyles}
            /><br/>
            {this.state.selectedCountry.name}<br/>
            <img width="150px" src={this.state.selectedCountry.flag}/>
        </div>
      )
    }
  }