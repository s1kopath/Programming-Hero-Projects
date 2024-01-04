import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



const Team = (props) => {
    const team = props.team;
    //console.log(team);
    let total = 0;
    let salary = 0;
    let wrestlerName = [];
    for (let i = 0; i < team.length; i++) {
        
        const wrestlers = team[i];
        salary = wrestlers.salary;
        let Name = <li>{' '+wrestlers.name + ' '}<FontAwesomeIcon icon={faCheck} /></li>;
        wrestlerName.push(Name);
        total = total + salary;
        
    }
   
    const headStyle = {color: 'white' , backgroundColor: 'gray', padding: '10px', borderRadius: '10px'};
    return (
        <div>
            <h2 style={headStyle}>Total Wrestler added to the team: {team.length}</h2>
            <h1>Selected Wrestlers: {wrestlerName} </h1>
            <p className="lead display-4">Total Salary: ${total}</p>

        </div>
    );
};

export default Team;