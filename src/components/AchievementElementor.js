import React from 'react';
import AchievementCounter from './AchievementCounter';
import "./AchievementElementorStyles.css";
import { AchievementData } from '../data/AchievementData';

function AchievementElementor() {
  return (
    <div className="achievement-wrapper">
      <div className="achievement-content">
        <h1>Our Achievement</h1>
        <div className='container'>
          {AchievementData.map(item => (
            <AchievementCounter data={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementElementor;
