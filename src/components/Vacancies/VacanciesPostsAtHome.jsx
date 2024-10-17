import React from 'react';
import { Link } from 'react-router-dom';


import './VacanciesPostsAtHome.css';

const VacanciesPostsAtHome = () => {
  return (
    <div className="sliding-text-container">
      <h2>Featured Job Openings</h2>
      <p className="p__opensans sliding-text"></p>
      <li className='vacancies-btn_mobile bounce-top'><Link to='/vacancies' style={{color: '#EC5800'}}>See Posts</Link></li>
    </div>
  )
}

export default VacanciesPostsAtHome;
