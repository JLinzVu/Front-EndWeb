import React from "react";
import { ReactComponent as Logo } from "../../assets/instagram.svg";
import "./login.css";
import { connect } from "react-redux";
import { login } from "../../redux/action/login.action";
class Login extends React.Component {
  state = {
    email: "",
    pwd: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(true);
    this.setState({ email: "", pwd: "" });
  };
  render() {
    const { email, pwd } = this.state;
    return (
          <div className="parent clearfix">
            <div className="bg-illustration">
              <img src="https://www.allfreefonts.co/wp-content/uploads/2020/07/scarletty-4.jpg" alt="logo" />
              <div className="burger-btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        
          <div className="login">
            <div className="container">
              <h1>Login to access to <i> Scarletty </i></h1>
              <img src="https://www.seekpng.com/png/detail/156-1562101_elysian-watercolor-texture-free-flower.png"/>
        
              <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="email"
                    placeholder="email..."
                    name="email"
                    required
                    onChange={this.handleChange}
                    value={email}
                  />
                  <input
                    type="password"
                    placeholder="password..."
                    name="pwd"
                    required
                    onChange={this.handleChange}
                    value={pwd}
                  />
                <div className="remember-form">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className="forget-pass">
                  <a href="#">Forgot Password ?</a>
                </div>
                <button type="submit" onSubmit={this.handleSubmit}>LOG-IN</button>
              </form>
            </div>
        
          </div>
          </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: isLogin => dispatch(login(isLogin))
});
export default connect(
  null,
  mapDispatchToProps
)(Login);
