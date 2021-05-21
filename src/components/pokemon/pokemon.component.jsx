import React,{useState} from 'react';
import Details from '../Details/details.component';

import './pokemon.styles.css';

const Pokemon = ({pokemon}) =>{ 
  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails(!details);
  };
  return(
    <div className='card-container'  data-testid="Pokemon">
    {details ? <>
    <span> {pokemon.name} </span>
    <img
      alt='pokemon'
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.url.slice(34,pokemon.url.lastIndexOf('/'))}.png?set=set2&size=180x180`}
      onClick={()=>toggleDetails()}
      data-testid="lessData"
    />
    <Details name={pokemon.name}/>
    
    <button onClick={()=>toggleDetails()}>[x] Back</button>
    </>
    
    
    : <>
      <img
      alt='pokemon'
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,pokemon.url.lastIndexOf('/'))}.png?set=set2&size=180x180`}
      onClick={()=>toggleDetails() } data-testid="moreData"
    />
    <h2 onClick={()=>toggleDetails()} data-testid="moreData2"> {pokemon.name} </h2>
    <button onClick={()=>toggleDetails()} data-testid="moreData3"> [+] More Infos</button> </>
    }
  </div>
)};

export default Pokemon;
