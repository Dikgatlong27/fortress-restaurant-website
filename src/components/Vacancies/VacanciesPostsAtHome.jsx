import React from 'react';
import { Link } from 'react-router-dom';


import './VacanciesPostsAtHome.css';

const VacanciesPostsAtHome = () => {
  return (
    <div className="sliding-text-container">
      <h2 className='sliding-text'>Featured Job Openings</h2>
      <p className='vacancies-btn_mobile bounce-top'><Link to='/vacancies' style={{color: '#EC5800'}}>See Posts</Link></p>
    </div>
  )
}

export default VacanciesPostsAtHome;
