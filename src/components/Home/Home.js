import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Header from '../Header/Header';



const Home = () => {
    const [Leagues, setClubs] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setClubs(data.leagues.slice(0,15)))
        // setClubs(data)
    },[])
    return (
        <div>
            <Header/>
           <div className="container">
               <div className="row">
                   {Leagues.map(league => <Club  league = {league}></Club>)}
                   
               </div>
           </div>
        </div>
    );
};

export default Home;