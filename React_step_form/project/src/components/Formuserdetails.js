import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material';
import {AppBar} from '@mui/material';
import {TextField} from '@mui/material';
import { Button } from '@mui/material';
export class Formuserdetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const{values,handleChange}= this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
            <AppBar title="Enter user details"/>
            <TextField 
            hintText = "Enter your first name"
            floatingLableText = "FirstName"
            onchange = {handleChange('firstName')}
            defaultValue={values.firstName}
            />
            
            <br/>
          
            <AppBar title="Enter user details"/>
            <TextField 
            hintText = "Enter your first name"
            floatingLableText = "LastName"
            onchange = {handleChange('lastName')}
            defaultValue={values.lastName}
            />
           
            <br/>
            
            <AppBar title="Enter user details"/>
            <TextField 
            hintText = "Enter your first name"
            floatingLableText = "Email"
            onchange = {handleChange('email')}
            defaultValue={values.email}
            />
           
            <br/>
            <Button
            label = "Continue"
            primary = {true}
            style={StyleSheet.Button}
            onClick={this.continue}
            />
            </React.Fragment> 
      </ThemeProvider>
    );
  }
}



export default Formuserdetails
