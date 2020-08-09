import React from 'react';
import "./auth.css"; 

// to dispatch action from VIEW
import {connect} from "react-redux";
import Actions from "../../actions";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            // Status Box state
            showBox: false,
            statusMessage: "",
            buttonText: "",
        };
    }

    //component lifecycle
    componentDidMount() {
        // call the api get all list
    }

    componentDidUpdate(prevProps) {
        // if prevProps of register data is different with current one, that mean reducer register is updated  
        const { getRegisterData } = this.props;

        // to check whether register action is taken.
        if (prevProps.getRegisterData.isLoading && !getRegisterData.isLoading){
            console.log(getRegisterData);
            if (getRegisterData.data.status === "success") {
                //alert("success")
                this.setState({
                    showBox: true, 
                    statusMessage: "You're successfully registered", 
                    buttonText:"Go to Login" 
                });
                this.props.history.push('/login');
            } else if (getRegisterData.data.error !== null) {
                // alert("failed");
                this.setState({
                    showBox: true, 
                    statusMessage: "Failed", 
                    buttonText:"Try again" 
                });

            }
        }
        
    }

    statusBoxPressed() {
        const {statusMessage} = this.state;

        if (statusMessage === "success") {
            this.props.history.push('/login');
        } else {
            this.props.history.push('/register');
            this.setState({showPop: false, email: "", password: ""});
        }
    }
    onSubmitPressed() {
        // assign this.state into key
        const {name, email, password, password_confirmation} = this.state;

        // assign all key to data
        const data = {
            name,
            email,
            password,
            password_confirmation,
        };

        this.props.onRegister(data);
    }

    render() {
        return (
            <div className="container">
                {
                    // status box
                    this.state.showBox && (
                        <div className="statusBox">
                            <h1>{this.state.statusMessage}</h1>
                            <button onClick={()=>this.statusBoxPressed()}>{this.state.buttonText}</button>
                        </div>
                    ) 
                }
                
                <h1>Sign Up</h1>
                <label>Name</label>
                <input 
                    type="text"  
                    placeholder="name" 
                    value={this.state.name}
                    onChange={name => {
                        this.setState({name:name.target.value})
                    }}
                /><br/>
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="email" 
                    value={this.state.email}
                    onChange={email => {
                        this.setState({email:email.target.value});
                    }}
                /><br/>
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="password" 
                    min="6" 
                    value={this.state.password}
                    onChange={password => {
                        this.setState({password:password.target.value});
                    }}
                /><br/>
                <label>Password Confirmation</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="confirm password" 
                    min="6" 
                    onChange={password_confirmation => {
                        this.setState({password_confirmation:password_confirmation.target.value});
                    }}
                /><br/><br/>
                <button onClick={()=>this.onSubmitPressed()}>Sign Up</button>
            </div>
        )
    }
}

// get the data from API
const mapStateToProp = (store) => ({
    getRegisterData: Actions.getRegisterData(store),
});

// dispatch the action as props
const mapDispatchToProps = {
    onRegister: Actions.register,
} 

export default connect(mapStateToProp, mapDispatchToProps)(Register);