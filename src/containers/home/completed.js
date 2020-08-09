import React from 'react';
import { connect } from 'react-redux';
import Actions from "actions";
import { Link } from 'react-router-dom';

import './home.css';

class Completed extends React.Component{
    componentDidMount(){
        this.props.onGetCompleted();
    }
    componentDidUpdate(prevProps){
        const { getCompletedTaskData } = this.props;
        if (prevProps.getCompletedTaskData.isLoading && !getCompletedTaskData.isLoading){
            console.log(getCompletedTaskData.data);
            console.log(this.props)
        }
    }

    render() {
        const { getCompletedTaskData } = this.props;
        console.log(getCompletedTaskData);
        return (
            <div className="container">
                <nav>
                    <ul className="navBar">
                        <li>
                            <Link to="/ongoing">On Going</Link>
                        </li>
                        <li>
                            <Link to="/archived">Completed</Link>
                        </li>
                        <li>
                            <Link to="/">All</Link>
                        </li>
                    </ul>
                </nav>
                <div className="taskHolder">
                    {getCompletedTaskData.data.map((item) => {
                        return(
                            <div 
                                key={item.id} 
                                className="taskCard">
                                <p><b>{item.task_title}</b></p>
                                <p>{item.dateline}</p>
                            </div>
                        )        
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    getCompletedTaskData: Actions.getCompletedTaskData(store),
})

const mapDispatchToProps = {
    onGetCompleted: Actions.getCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps) (Completed);