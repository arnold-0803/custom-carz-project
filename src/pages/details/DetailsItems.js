import React from 'react'

function DetailsItems({data}) {
  return (
    <div className="details-wrapper">
      <h1>More About this Gallery</h1>
      <div className="container">
        <div className="image-content">
          <img src={data.src} alt="" />
        </div>
        <div className="details-info">
          <h4>{data.title}</h4>
          <p>{data.details}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsItems;
