import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
// import banner from '../../photo/Banner.jpg';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 21)))
    }, [])
    const ball = <FontAwesomeIcon className="ml-1" icon={faFutbol} />;

    return (
        <div >
            <h1 className="banner bannerName"><strong>
                {ball} {ball} {ball} Soccer Leagues Explorer
                </strong></h1>
                {
                    leagues.map(league => <Card league={league}></Card>)
                }
        </div>
    );
};

export default Home;
