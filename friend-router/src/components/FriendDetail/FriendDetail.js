import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendid} = useParams();
    const [friend, setFriend] = useState({}); 
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <p>This is friend details: component no {friendid} </p>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;