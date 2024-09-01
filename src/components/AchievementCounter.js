import React, { useState } from 'react';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

const AchievementCounter = ({data}) => {
    const [startCount, setStartCount] = useState(false);
    const { ref } = useInView({
      triggerOnce: true,
      threshold: 0.5,
      onChange: (inView) => {
        if (inView) {
            setStartCount(true);
        }
      },
    });

  return (
    <div className='achievement' ref={ref}>
      <h4>{data.title}</h4>
      {startCount && (
        <div className="number-data">
          <i className={data.icon}></i>
          <CountUp start={0} end={data.end} duration={2.5} delay={0}/>
          <span>{data.symbol}</span>
        </div>
      )}
    </div>
  );
}

export default AchievementCounter;
