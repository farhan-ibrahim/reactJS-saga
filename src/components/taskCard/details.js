import React from 'react';
import "./detail.css";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Actions from 'actions';
// import { Button } from "reactstrap";


class Details extends React.Component{
    constructor (props){
        super(props);
        let location = this.props.location;
        console.log(location);
        this.state = {
            task:location.taskDetails,
            showUpdateForm: false,

            title: location.taskDetails.task_title,
            description: "",
            dateline: "",
            status: "",
            // Status Box state
            showBox: false,
            statusMessage: "",
            buttonText: "",
        }
    }

    componentDidMount(){
        const { getUserData} = this.props;
        let userID = getUserData.data.user.id;
        console.log("current user ID: ", userID);
    }

    componentDidUpdate(prevProps){
        const { getDeleteTaskData} = this.props;
        if (prevProps.getDeleteTaskData.isLoading && !getDeleteTaskData.isLoading){
            console.log("did update", getDeleteTaskData);

            // To check if not login
            if (getDeleteTaskData.error && getDeleteTaskData.error.statusText === "Unauthorized"){
                // alert("Login first to delete task");
                this.setState({
                    showBox:true,
                    statusMessage:"Login first to delete task",
                    buttonText:"Go to Login",
                })
            } 
            
            // To check if successful
            if (getDeleteTaskData.data.status === "Success"){
                console.log("delete success", getDeleteTaskData);
                alert("Task is successfully deleted");
                this.props.history.push('/');
                // this.setState({
                //     showBox:true,
                //     statusMessage:"Delete successful",
                //     buttonText:"Go to Dashboard",
                // })
            }
        }

        //Update response
        const { getUpdateData} = this.props;
        if (prevProps.getUpdateData.isLoading && !getUpdateData.isLoading){
            console.log("did update", getUpdateData);
            // To check if not login
            if (getUpdateData.error && getUpdateData.error.statusText === "Unauthorized"){
                // alert("Login first to delete task");
                this.setState({
                    showBox:true,
                    statusMessage:"Login first to delete task",
                    buttonText:"Go to Login",
                })
            } 
            
            // To check if successful
            if (getUpdateData.data.status === "Success"){
                console.log("delete success", getUpdateData);
                alert("Task is successfully deleted");
                this.props.history.push('/');
                // this.setState({
                //     showBox:true,
                //     statusMessage:"Delete successful",
                //     buttonText:"Go to Dashboard",
                // })
            }
        }
    }

    // to delete
    onDeletePressed(id){
        this.props.onDeleteTask(id);
    }

    // redirect to login if not login
    statusBoxPressed() {
        this.props.history.push('/login');
    }

    // to show form 
    onShowUpdatePressed(){
        this.setState({showUpdateForm:!this.state.showUpdateForm})
    }

    // to update form
    onUpdatePressed(id) {
        // assign this.state into key
        const {title, description, dateline, status} = this.state;

        // assign all key to data
        const data = {
            id,
            title,
            description,
            dateline,
            status,
        };

        this.props.onUpdate( data);
    }

    render () {
        return (
            <div className="deleteContainer">
                <div className="breadCrumb">
                    <ul>
                        <li><Link to="/">Home </Link></li>
                        <li>Details </li>
                    </ul>
                </div>
                {(this.state.task !== undefined && this.state.showUpdateForm === false) && (
                    <div className="detailContainer">
                    <div className="textHolder">
                        <div className="detailHeader">
                            <h1>{this.state.task.task_title}</h1>
                            <p>{this.state.task.status}</p>
                        </div>
                        <div className="descHolder">
                            <p>{this.state.task.task_desc}</p>
                        </div>
                        <p>{this.state.task.dateline}</p>
                    </div>
                    <div className="btnHolder">
                        <button onClick={() => this.onShowUpdatePressed()}>UPDATE</button>
                        <button onClick={() => this.onDeletePressed(this.state.task.id)}>DELETE</button>
                    </div>
                </div>
                )} 
                {this.state.showUpdateForm === true && (
                    <div className="updateContainer">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            placeholder="title" 
                            id="title"
                            value={this.state.title}
                            onChange={title => {
                                this.setState({title:title.target.value});
                            }}
                        />

                        <label htmlFor="description">Description</label>
                        <textarea 
                            type="text" 
                            placeholder="description" 
                            id="description"
                            value={this.state.description}
                            onChange={description => {
                                this.setState({description:description.target.value});
                            }}
                        ></textarea>
                        

                        <label htmlFor="dateline">Dateline</label>
                        <input 
                            type="date" 
                            placeholder="dateline" 
                            id="dateline"
                            value={this.state.dateline}
                            onChange={dateline => {
                                this.setState({dateline:dateline.target.value});
                            }}
                        />

                        <label htmlFor="status">Status</label>
                        <select 
                            id="status"
                            value={this.state.status}
                            onChange={status => {
                                this.setState({status:status.target.options[status.target.selectedIndex].text})
                            }}
                        >
                            <option value="on going">on going</option>
                            <option value="completed">completed</option>
                        </select>
                        <br />
                        <div className="btnHolder">
                            <button onClick={()=>this.onShowUpdateForm()}>Cancel</button>
                            <button onClick={()=>this.onUpdatePressed(this.state.task.id)}>Update</button>
                        </div>
                </div>
                )}
                {
                    // if true, will show box
                    this.state.showBox && (
                        <div className="statusBox">
                            <p>{this.state.statusMessage}</p>
                            <br />
                            <button onClick={()=>this.statusBoxPressed()}>{this.state.buttonText}</button>
                        </div>
                    ) 
                    //using Modal Reactstrap 
                        //<Modal isOpen={this.state.showBox}>
                            //<ModalHeader></ModalHeader>
                            //<ModalBody></ModalBody>
                            //<ModalFooter>
                                //<Button onClick={()=>this.statusBoxPressed()}></Button>
                            //</ModalFooter>
                        //</Modal> 
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => ({
    getUserData:Actions.getUserSession(store),
    getDeleteTaskData: Actions.getDeleteTaskData(store),
    getUpdateData: Actions.getUpdateData(store)
})

const mapDispatchToProps = {
    onDeleteTask:Actions.deleteTask,
    onUpdate:Actions.update,
}
export default connect(mapStateToProps, mapDispatchToProps) (Details);