import React, { Component } from 'react';

// Define Variables
var userName;
var errorCode;
var letterSpaceOnly = /^[a-zA-Z\s]*$/;
var inputClass = 'Form-input Form-good';
var visibleButton = 'Form-submit Submit-inactive';
var startedUp = false;

// Display function
function whatToDisplay() {

}

// Define Component
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      // Handle Form Validation
      handleChange(event) {
        this.setState({value: event.target.value});

        // Check to see that only letters and spaces are used
        if (letterSpaceOnly.test(this.state.value) == false) {
          errorCode = 'Name can only contain letters and spaces.';
          inputClass = 'Form-input Form-bad';
          visibleButton = 'Form-submit Submit-inactive';
        }
        else {
          errorCode = '';
          inputClass = 'Form-input Form-good';
          visibleButton = 'Form-submit Submit-active';
        }
      }

      // Handle Form Submission
      handleSubmit(event) {
        // Check to make sure field is filled out
        if (!this.state.value) {
          alert('Name cannot be left blank.');
          errorCode = 'Name cannot be left blank.';
          inputClass = 'Form-input Form-bad';
;        }

        // Check to see that only letters and spaces are used
        else if (letterSpaceOnly.test(this.state.value) == false) {
          alert('Name can only contain letters and spaces.');
          errorCode = 'Name can only contain letters and spaces.';
          inputClass = 'Form-input Form-bad';
        }

        else {
          userName = this.state.value;
          //alert('Welcome ' + userName);
          this.forceUpdate();
        }

        // preventDefault
        event.preventDefault();
      }

      render() {
        if (this.state.value == userName) {
          // Return Form
          return (
            <div className="Result-div">
              <h1 className="Result-heading">Thank you for joining <span>{userName}</span></h1>
            </div>
          )
        }
        else {
          // Return Greeting
          return(
            <form onSubmit={this.handleSubmit} className="Form-container">
              <h1>Hello World <span>React</span> App</h1>
              <label>
                <span className="Form-text-sub">Designed by Arjun Patel</span>
                <span className="Form-text">Please Enter Your Name To Get Started</span>
                <input type="text" className={inputClass} value={this.state.value} onChange={this.handleChange} />
                <span className="Form-error">{errorCode}</span>
              </label>
              <input className={visibleButton} type="submit" value="Let's Go" />
            </form>
          )
        }
      }
    }

 export default NameForm;
