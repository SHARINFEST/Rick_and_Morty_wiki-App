import React from 'react'

const Location = ({locations}) => {

console.log(locations)

  return (
    <article>
        <h2>{locations?.name}</h2>
        <ul>
            <li><span>Type : {locations?.type} </span></li>
            <li><span>Dimension : {locations?.dimension}</span></li>
            <li><span>Population : {locations?.residents.length }</span></li>
        </ul>
    </article>
  )
}

export default Location