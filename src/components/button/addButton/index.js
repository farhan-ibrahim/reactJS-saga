import React from 'react';
import './addButton.css'
import { Link } from 'react-router-dom';

class AddButton extends React.Component{
    render() {
        return(
            <div className='btn'>
                <Link to="/create"><h1>+</h1></Link>
            </div>
        )
    }
}


export default AddButton;