import React from 'react'

const FilterList = ({suggedList, setSearchInput}) => {

    const handleClick = id => setSearchInput(id)

  return (
    <article className='list_sugg'>
    <ul >
  {
    suggedList?.map(location =>(
     <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ) )
  }
    </ul>
    </article>
  )
}

export default FilterList