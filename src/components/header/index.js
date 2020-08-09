import React from 'react';
import "./header.css";
import {Link, withRouter} from 'react-router-dom';
import Actions from "actions";
import { connect } from 'react-redux';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin : false,
        }
    }

    componentDidMount () {
        const { getUserData } = this.props
        console.log(getUserData);

        // // check if user is login
        // if (getUserData !== undefined){
        //     this.setState({isLogin:true})
        // }
    }

    componentDidUpdate(prevProps) {
        const { getUserData } = this.props
        
        if (Object.keys(prevProps.getUserData.data).length !== Object.keys(getUserData.data).length) {
            this.setState({isLogin:!this.state.isLogin})
        }

    }

    render() {
        return (
            <div className="headerContainer">
                <div className="logoHolder">
                    <h1 className="logo">
                        <Link to="/"><span>T</span>askr</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        {this.state.isLogin && (
                            <button>Logout</button>
                        )}
                        
                    </ul>
                </nav>
            </div>
        )
    }
} 

const mapStateToProps = (store) => ({
    getUserData: Actions.getUserSession(store),
})

const mapDispatchToProps = {
    resetUserSession: Actions.resetUserSession
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Header));