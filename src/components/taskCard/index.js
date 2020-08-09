import React from 'react';
import "./taskCard.css"

class TaskCard extends  React.Component{
    render() {
        return (
            <div className="taskCard" key={this.props.id}>
                <input type="radio" id="status"/>
                <div className="taskCardInfoHolder">
                    <p><b>{this.props.title}</b></p>
                    <p>{this.props.dateline}</p>
                </div>
            </div>
        )
    }
}

export default TaskCard;