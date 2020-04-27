import React, { Component } from "react";
import Input from "../../common/MInput";

const defaultState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultState,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!this.state.email) {
      emailError = "email cannot be empty";
      if (!this.state.password) {
        passwordError = "password cannot be empty";
      }
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log("Submitting");
      console.log(this.state);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label">Email</label>
            <Input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={email}
              placeholder="enter your email id"
            />
          </div>
          {this.state.emailError ? <div>{this.state.emailError}</div> : null}
          <div className="form-group">
            <label className="control-label">Password</label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          {this.state.passwordError ? (
            <div>{this.state.passwordError}</div>
          ) : null}
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
