import React from 'react';
import { connect } from 'react-redux';
import Actions from "actions";
import { Link } from 'react-router-dom';

import './home.css';
import TaskCard from '../../components/taskCard';
import AddButton from "../../components/button/addButton";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // showForm : false,
            title:"",
            description: "",
            dateline: "", 
            list : [],
        }
    }

    componentDidMount(){
        this.props.onGetAll();
    }
    componentDidUpdate(prevProps){
        const { getTaskData } = this.props;
        if(prevProps.getTaskData.isLoading && !getTaskData.isLoading) {
            if(getTaskData.data.status === "success") {
                this.setState({list: getTaskData.data.getAllTask})
            }
        }
    }
    
    onAddPressed(){
        const { title, description, dateline} = this.state;

        if (this.state.title === "" ){
            alert("Title is required")
        } else {
            const data = {
                title,
                description,
                dateline,
            }
            this.props.onCreate(data);
        }       
    }

    render() {
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
                    {this.state.list.map((task) => {
                        return(
                            <Link
                                key={task.id}
                                to={{
                                    pathname: `/task/${task.id}`,
                                    taskDetails: task
                                }}
                            >
                                <TaskCard 
                                title={task.task_title}
                                description={task.task_desc}
                                dateline={task.dateline}
                                status={task.status} 
                                />
                            </Link>
                        ) 
                    })}
                </div>
                <AddButton />
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    getTaskData: Actions.getTaskData(store),
})

const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    onCreate: Actions.create,
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);