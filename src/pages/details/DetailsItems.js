import React from 'react'

function DetailsItems({data}) {
  return (
    <div className="details-wrapper">
      <div className="image-content">
        <img src={data.src} alt="" />
      </div>
      <div className="details-info">
        <h4>{data.title}</h4>
        <p>{data.details}</p>
      </div>
    </div>
  )
}

export default DetailsItems;
