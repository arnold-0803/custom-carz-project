import React from 'react'

function AboutCard({data}) {
  return (
    <div className="about-card">
      <h3>{data.heading}</h3>
      <p>{data.details}</p>
    </div>
  )
}

export default AboutCard;
