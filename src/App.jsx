import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorDisplay from './components/ErrorDisplay'
import FilterList from './components/FilterList'
import Location from './components/Location'
import randomNumber from './utils/randomNumber'
import  rick from './assets/rick.png'

function App() {
//para guardar sugerencias de la app
const [suggedList, setSuggedList] = useState()
 // el search lo vamos a usar en el input
  const [searchInput, setSearchInput] = useState()
  // primer llamado de la api y guardar la locacion
  const [locations, setLocations] = useState()

  // para el error del catch
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    
     let  random = randomNumber() 
     if(searchInput){
      random = searchInput
     }
     const URL = `https://rickandmortyapi.com/api/location/${random}`
    axios.get(URL)
    .then(res => {setHasError(false)
      setLocations (res.data) }
    )
    .catch(err => setHasError(true))
    
  }, [searchInput])
  
//para que el input funcione

const  submit = evento => {
  evento.preventDefault()
  setSearchInput(evento.target.idLocation.value)
  
}

const changes = event => {
if(event.target.value === ''){
  return setSuggedList()
}

  const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
 axios.get(URL)
 .then(res => setSuggedList (res.data.results))
 .catch(err => console.log(err))

}

  return (
    <div className="App">
      <div>
      <img className='img_rick' src={rick} alt="" />
      </div>
      <div className='letters'>
      <h1 className='title'>Rick and morty</h1>
      
      <form onSubmit={submit}>
      <div className='input'> <input  id='idLocation' placeholder='Enter numbers for search' type="text" onChange={changes}/>
         <button>Search</button>
         </div>
         
        <FilterList 
        suggedList={suggedList}
        setSearchInput={setSearchInput}/>
        
      </form>
      
      {
        
        hasError ? 
        <ErrorDisplay /> :
        <div className='list_sugg'>
      <Location locations={locations} />
      <div className='card_cont'>
       {
        locations?.residents.map(urls => (
          <CardResident 
         key={urls} url ={urls} />
        ))
      }
      
       </div> 
       </div>  
}</div>  
    </div>
    
  )
}

export default App
