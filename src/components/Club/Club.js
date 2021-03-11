import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import image1 from '../../Leauge Logo/image 1.png';

import './Club.css'

const Club = (props) => {
    const { strLeague, strSport, idLeague } = props.league || {};
    const faArrow = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div class="col-md-4 g-4 mb-4 mt-5">
            <div class="card h-100 shadow rounded ">
                <img src={image1} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{strLeague}</h5>
                    <p class="card-text ">Sports Type: {strSport}</p>
                </div>
                <div className="card-footer text-center">
                    <Link to={'/clubDetails/' + idLeague}>
                        <button className='btn btn-primary text-justify'>Explore <span>{'  '}</span> { faArrow}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Club;