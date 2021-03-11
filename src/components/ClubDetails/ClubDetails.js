import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import detailMalePhoto from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ClubDetails.css';
import { Link } from 'react-router-dom';
import icon1 from '../../Icon/found 1.png'
import icon2 from '../../Icon/flag (1) 1.png'
import icon3 from '../../Icon/football (1) 1.png'
import icon4 from '../../Icon/male-gender-sign 1.png'
import male from '../../Photo/female.png';
import female from '../../Photo/male.png';


const ClubDetails = () => {    
    const { clubKey } = useParams() || {};
    const [clubDetail, setClubdetail] = useState([]) || [];
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${clubKey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClubdetail(data.leagues[0]))
    }, [])
    console.log(clubDetail);
    const { strGender, strLeagueAlternate, strTwitter, strYoutube, strFacebook, strCountry, strDescriptionEN, strDescriptionES, strLeague, intFormedYear, strBanner, strBadge } = clubDetail;
    
    let checkGender = '';
    if(strGender === 'Male'){
        checkGender = female;
    }
    else{
        checkGender = male;
    }
    return (

        <div className="container">
            <div className="row">
                <div className="details-banner">
                    <img src={strBanner} alt=""></img>
                    <div className="logo">
                        <img src={strBadge} alt="" />
                    </div>
                </div>
            </div>
            <div className="row  container-div">
                <div className="col-md-6">
                    <div className="blue-div">
                        <h2>{strLeague}</h2>
                        <p><span><img src={icon1} alt=""/></span> Founded: {intFormedYear}</p>
                        <p><span><img src={icon2} alt=""/></span> Country: {strCountry}</p>
                        <p><span><img src={icon3} alt=""/></span> Sports Type: {strLeagueAlternate}</p>
                        <p><span><img src={icon4} alt=""/></span> Gender: {strGender}</p>
                        {/* <img src={checkGender} alt="" /> */}
                    </div>
                </div>
                <div className="col-md-6 image-div">
                    {strGender && <img src={checkGender} alt="" />}
                </div>
            </div>
            <div className="row">
                <div className="text">
                    <p><small>{strDescriptionES}</small></p>
                    <p><small>{strDescriptionEN}</small></p>
                </div>
            </div>
            <div className="row">
                <div className="social-icon">
                <a className='facebook' target="_blank" href={`https://${strFacebook}`}><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                <a className='youtube' target="_blank" href={`https://${strYoutube}`}><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
                <a className='twitter' target="_blank" href={`https://${strTwitter}`}><FontAwesomeIcon icon={["fab", "twitter-square"]} /></a>
                
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;