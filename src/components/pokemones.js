import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Pokemones = () => {
  const [state, setstate] = useState({
    pokemons:null
  })
  useEffect(() => {
   let isMounted = true
    if(isMounted){
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(data => {
        setstate({...state, pokemons:data.results})
      });
    }
  
    return () => {
      isMounted = true
    }
  }, [])
  
  return (
    <div className='row'>
      {state.pokemons?.map((pokemon,i)=>{
        // console.log(pokemon.url)
        return(
          <div className='col-md-4' key={i}>

            <Card name={pokemon.name} url={pokemon.url} />
          </div>
        )
      })}
    </div>
  )
}
