import React from 'react';
import { Link} from 'react-router-dom';
import ErrorHandler from './ErrorHandler';

const DisplayPlanets = (props) => {
  const planets = props.planet.map((planet) =>
        <Link to={{
          pathname: "/planet/"+planet.name,
            state: { selectedPlanet: planet }
          }}><ul className='planet-list'>{planet.name}</ul></Link>
        );
        if(props.planet.length === 0 && props.isSearchInitiated){
          return(
            <ErrorHandler className='error-msg' message='Oops!! No planets found'></ErrorHandler>
        );
        }else{
          return(
            <ul>{planets}</ul>
        );
        }   
}

export default DisplayPlanets;