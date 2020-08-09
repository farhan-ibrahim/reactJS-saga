import React from 'react';
import { connect } from 'react-redux';
import Actions from "actions";
import "./create.css";

class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description: "",
            dateline: "", 
            list : [],
        }
    }

    // to add new task
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
            <div className="createContainer">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    placeholder="title" 
                    id="title" 
                    onChange={title => {
                        this.setState({title:title.target.value});
                    }}
                />

                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    placeholder="description" 
                    id="description"
                    onChange={description => {
                        this.setState({description:description.target.value});
                    }}
                />

                <label htmlFor="dateline">Dateline</label>
                <input 
                    type="date" 
                    placeholder="dateline" 
                    id="dateline"
                    onChange={dateline => {
                        this.setState({dateline:dateline.target.value});
                    }}
                />

                <label htmlFor="status">status</label>
                <input 
                    type="radio" 
                    placeholder="status" 
                    id="status"
                    onChange={dateline => {
                        this.setState({dateline:dateline.target.value});
                    }}
                />
                <button onClick={()=>this.onAddPressed()}>Add New Task</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onCreate: Actions.create,
};

export default connect(null,mapDispatchToProps)(Create);