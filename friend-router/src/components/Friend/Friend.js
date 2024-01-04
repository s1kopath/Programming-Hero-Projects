import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendid) => {
        const url = `/friend/${friendid}`;
        history.push(url)
    }
    const friendsStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendsStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <p>Show Detail of {id}</p>
            </Link>
            <button onClick={() => handleClick(id)}>Click Here</button>
        </div>
    );
};

export default Friend;