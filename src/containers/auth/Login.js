import React, { Component } from "react";

import { connect } from "react-redux";
import Actions from "../../actions";
import "./auth.css"; 


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      // Status Box state
      showBox: false,
      statusMessage: "",
      buttonText: "",
    };
  }

  componentDidUpdate(prevProps) {
    // if prevProps of register data is different with current one, that mean reducer register is updated  
    const { getLoginData } = this.props;

    // to check whether register action is taken.
    if (prevProps.getLoginData.isLoading && !getLoginData.isLoading){
        console.log(getLoginData);
        if (getLoginData.data.status === "success") {
            //alert("success")
            this.setState({
                showBox: true, 
                statusMessage: "You're successfully registered", 
                buttonText:"Go to Login" 
            });
            this.props.history.push('/');
        } else if (getLoginData.data.error !== null) {
            // alert("failed");
            this.setState({
                showBox: true, 
                statusMessage: "Failed", 
                buttonText:"Try again" 
            });
        }
    }  
  }

  onSubmitPressed() {
    const {emailInput, passwordInput} = this.state;
    const data = {
      email: emailInput,
      password: passwordInput
    };
    this.props.onLogin(data);
  }

  render() {
    return ( 
      <div className="container">

        {
          // if true, will show box
          this.state.showBox && (
              <div className="statusBox">
                  <h1>{this.state.statusMessage}</h1>
                  <button onClick={()=>this.statusBoxPressed()}>{this.state.buttonText}</button>
              </div>
          ) 
        }
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="email"
          onChange={(email) => {
            this.setState({emailInput: email.target.value});
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={password => {
            this.setState({ passwordInput: password.target.value });
          }}
        />

        <button onClick={()=>this.onSubmitPressed()}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  getLoginData: Actions.getLoginData(store)
});
const mapDispatchToProps = {
  onLogin: Actions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
