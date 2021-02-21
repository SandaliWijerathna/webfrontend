import React, { Component } from "react";
import "./admin.css";


class Admin extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };
  

   login = event => {
  //  console.log(this.state.fields);
   fetch('http://192.168.8.147:8000/customer/',{
       method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.fields)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.customerCustomerReg(data.token);
      }
    )
    .catch( error => console.error(error))
 }
     
  
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["email"] = "";
        fields["mobile"] = "";
        fields["password"] = "";
        fields["address"] ="";
        fields["account"] ="";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

   
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

  
    this.setState({
      errors: errors
    });
    return formIsValid;


  }


 
  render() {
    

    return (
      <div className="wrap6">
        <div className="form-wrap6">
          
          <h1 className="oni">Admin</h1>
          
          <form  method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}className="LoginForm">
        
          <label>Name:</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} className="xcs6"/>
        <div className="errorMsg">{this.state.errors.username}</div>
        
        <div><br></br>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  className="xcs6"/>
        <div className="errorMsg">{this.state.errors.email}</div>
        </div>
        
        <div><br></br>
        <label>Password:</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}className="xcs6" />
        <div className="errorMsg">{this.state.errors.password}</div>
        </div>
      
      <div><br></br>
        <input type="submit" onClick={this.login}  className="but6"  value="Register"/></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;