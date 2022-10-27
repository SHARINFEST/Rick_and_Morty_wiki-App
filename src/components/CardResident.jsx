import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './styles/cardResidents.css'

const CardResident = ({url}) => {

const [resident, setResident] = useState()

useEffect(() => {
  axios.get(url)
.then(res => setResident(res.data))
.catch(err => console.log(err))

  
}, [])


  return (
    <article className='card'>
        <header className='crad_header'>
            <img className='card_img' src={resident?.image} alt="" />
             <div className='card_status'>
            <div className={`card_circle-status ${resident?.status}`}></div>
            <span className='status'>{resident?.status}</span>
            </div>
        </header>
        <header>
            <section className='card_body'>
                <h3 className='card_name'>{resident?.name}</h3>
                <ul className='card_list'>
                    <li className='card_item'><span className='card_span'>Specie : </span>{resident?.species}</li>
                    <li className='card_item'><span className='card_span'>Origin : </span>{resident?.origin.name}</li>
                    <li className='card_item'><span className='card_span'>Episodies appear : </span>{resident?.episode.length}</li>
                </ul>
            </section>
        </header>
    </article>
  )
}

export default CardResident