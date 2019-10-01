import React from 'react';
import { Link} from 'react-router-dom';

const DisplayPlanets = (props) => {
  const planets = props.planet.map((planet) =>
        <Link to={{
          pathname: "/planet/"+planet.name,
            state: { selectedPlanet: planet }
          }}><ul className='planet-list'>{planet.name}</ul></Link>
        );
        if(props.planet.length === 0 && props.isSearchInitiated){
          return(
            <p className='error-msg'>Oops!! No planets found</p>
        );
        }else{
          return(
            <ul>{planets}</ul>        
        );
        }   
}

export default DisplayPlanets;