import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import { useHistory } from 'react-router-dom';

const Card = (props) => {

    const { idLeague, strLeague } = props.league;

    const [league, setLeague] = useState({});

    const history = useHistory();
    const showLeague = leagueId => {
        history.push(`league/${leagueId}`);
    }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    return (
        <div className="homeBackground">
            <div className="container">
                <div className="leagueCard">
                    <img src={league.strBadge} alt="" />
                    <br />
                    <div className="leagueName text-center">
                        <h3 >{strLeague}</h3>
                        <p>Sport type: {league.strSport}</p>

                        <button
                            className="btn btn-primary float-center explore-btn"
                            onClick={() => showLeague(idLeague)}>
                            Explore
                        <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
