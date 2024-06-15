import React, { Component } from 'react'
import Formuserdetails from './Formuserdetails';
import Formuserpersonaldetails from './Formpersonaldetails';

export class Userform extends Component {
  state = {
    step : 1,
    firstName: '',
    lastName : '',
    email : '',
    occupation : '',
    city : '',
    bio : ''
  }
  //to got to next step
  nextStep = () => {
    const {step} = this.setState;
    this.setState({
      step : step +1
    });
  }
  //to go to previous step
  prevStep = () => {
    const {step} = this.setState;
    this.setState({
      step : step - 1
    });
  }
  //handle change
  handleChange = input => e =>{
    this.setState ({[input] : e.target.value});
  }
  
  render() {
    const {step} = this.state;
    const{firstName, lastName,email,occupation,city,bio}=this.state;
    const values = {firstName, lastName,email,occupation,city,bio}
    switch(step){
      case 1 : 
      return(
        <Formuserdetails
        nextStep = {this.state}
        handleChange = {this.handleChange}
        values = {values}
        />
      );
      case 2:
        return<h1>Form Userpersonal Details</h1>
        (
        <Formuserpersonaldetails
          nextStep = {this.state}
          prevStep = {this.state}
        handleChange = {this.handleChange}
        values = {values}
        />
        );
        case 3 :
          return <h1>Confirm</h1>;
        case 4:
          return <h1>Success</h1>;
          default:
            return null;


    }
    
  }
}

export default Userform
