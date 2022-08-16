import React from 'react'

const LocationInfo = ({location}) => {

    // console.log(location)

  return (
    <article className='location'>
        <h2 className='location-name'>{location?.name}</h2>
        <div className='location-info'>
            <span>Type: {location?.type}</span>
            <span>Dimension: {location?.dimension}</span>
            <span>Population: {location?.residents.length}</span>
        </div>
    </article>
  )
}

export default LocationInfo