import React,{useState,useEffect} from 'react';
import './details.styles.css';

const Details = ({name}) => {
  const [data, setData] = useState([]);


  useEffect(() => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then (data => setData(data));
  }, []);
    
 
  return ( <div className="detailed-content">
<span>Height  {data.height} </span>
<span>Weight  {data.weight} </span>
<span>Experience  {data.base_experience} </span>
  </div> );
}
 
export default Details;