import React, { Component } from "react";
import NoLoginHeader from "./../../components/NoLoginHeader/NoLoginHeader";
import { connect } from "react-redux";
import { login } from "./../../domains/user/ActionCreator";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = (e) => {
    let { email, password } = this.state;
    this.props.dispatch(login({ email, password }));
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1>Please sign in</h1>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            onChange={this.handleEmailChange}
            required
            autoFocus
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            required
          />
          <div>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button type="button" onClick={this.handleClick}>
            Sign in
          </button>
          <p>&copy; 2020</p>
        </form>
      </div>
    );
  }
}

const withData = connect((state) => {
  return {
    userState: state.user,
  };
});

export default withData(Login);
