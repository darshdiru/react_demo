import React, { Component } from "react";
import Input from "../../common/MInput";
import "./SignUp.css";
import Settings from "../../utils/Settings";

const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
  passError: "",
  passwordConfirmError: "",
};

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let passError = "";
    let passwordConfirmError = "";

    if (!this.state.username) {
      usernameError = Settings.text.validate.nameError;
    }

    if (!this.state.email || !this.state.email.includes("@")) {
      emailError = Settings.text.validate.emailError;
    }

    if (!this.state.password || this.state.password.length < 8) {
      passwordError = Settings.text.validate.passError;
    }

    // if (!this.state.password.includes(passw)) {
    //   passwordError = Settings.text.validate.passError;
    // }

    if (this.state.password !== this.state.passwordConfirm) {
      passError = Settings.text.validate.confirmError;
    }

    if (
      usernameError ||
      emailError ||
      passError ||
      passwordConfirmError ||
      passwordError
    ) {
      this.setState({
        emailError,
        usernameError,
        passError,
        passwordConfirmError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    const { username, password, email, passwordConfirm } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label className="control-label" htmlFor="username">
              Username
            </label>
            <Input
              type="text"
              name="username"
              id="username"
              onChange={this.handleChange}
              value={username}
              placeholder={Settings.text.label.username}
            />
          </div>
          {this.state.usernameError ? (
            <div className="form-error">{this.state.usernameError}</div>
          ) : null}
          <div className="form-group">
            <label className="control-label" htmlFor="email">
              Email
            </label>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={email}
              placeholder={Settings.text.label.useremail}
            />
          </div>
          {this.state.emailError ? (
            <div className="form-error">{this.state.emailError}</div>
          ) : null}
          <div className="form-group">
            <label className="control-label" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          {this.state.passwordError ? (
            <div className="form-error">{this.state.passwordError}</div>
          ) : null}
          <div className="form-group">
            <label className="control-label" htmlFor="passwordConfirm">
              Confirm Password
            </label>
            <Input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={this.handleChange}
              value={passwordConfirm}
            />
          </div>
          {this.state.passError ? (
            <div className="form-error">{this.state.passError}</div>
          ) : null}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
