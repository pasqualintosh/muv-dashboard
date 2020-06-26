import React, { Component } from "react";
import NoLoginHeader from "./../../components/NoLoginHeader/NoLoginHeader";
import { connect } from "react-redux";
import { login } from "./../../domains/user/ActionCreator";
import "./Login.css";

class Login extends Component {
  handleClick = (e) => {
    console.log(e);
    this.props.dispatch(login());
  };

  render() {
    return (
      <div className="Form">
        <NoLoginHeader></NoLoginHeader>
        <form>
          <h1>Please sign in</h1>
          <label>Email address</label>
          <input type="email" placeholder="Email address" required autoFocus />
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <div>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button type="submit" onClick={this.handleClick}>
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

// export default Login;
