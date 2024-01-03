import React from 'react'
import { useState, useEffect } from 'react'
import AdoptList from './adoptionlist'


const Adopt = () => {
  const url = "https://settledrail.backendless.app/api/data/Pet"
  const [dogs, setDogs] = useState(null);

  //npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json();
    }) 
    .then(data => {
      console.log(data);
      setDogs(data)
    });
  },[]);




  return (
      <div className = "dogs">
      
          
      {dogs && <AdoptList dogs ={dogs} title="All Dog" />}
      </div>
  )
}


export default Adopt