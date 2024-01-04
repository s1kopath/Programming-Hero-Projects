import React from 'react';
import './Wrestler.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Wrestler = (props) => {
    //console.log(props.name);
    const { name, gender, salary, img } = props.wrestlers;
    //const imgStyle = { height: '200px' };
    //const cardStyle = { border: '2px solid gray', margin: '10px', borderRadius: '3px', padding: '10px' };

    return (

        <div className="PlayerContainer">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="display-4">{name}</h4>
                <p><small>Gender: {gender}</small></p>
                <h5>Salary: ${salary}</h5>
                <button className="btn btn-primary" onClick={() => props.handleAddWrestler(props.wrestlers)}><FontAwesomeIcon icon={faUserPlus} />Add To Team</button>
            </div>
        </div>

    );
};

export default Wrestler;