import React,{Component} from 'react';
import './starwar.scss';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import history from './history';
import PropTypes from 'prop-types';


class PlanetDetails extends Component{
    constructor(props){
        super(props);
        this.goBackToSearchPage = this.goBackToSearchPage.bind(this);
    }

    goBackToSearchPage(){
        history.push('/details');
    }
    
    render(){
        return(
            <>
            <div className='planet-name'>
                {this.props.history.location.state.selectedPlanet.name} Information
            </div>
            <div>&nbsp;</div>
            <hr></hr>
           <Table className='table-font'>
                <Tbody>
                    <Tr>
                    <Td>Climate</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.climate}</Td>
                    </Tr>
                    <Tr>
                    <Td>Created</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.created}</Td>
                    </Tr>
                    <Tr>
                    <Td>Diameter</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.diameter}</Td>
                    </Tr>
                    <Tr>
                    <Td>Edited</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.edited}</Td>
                    </Tr>
                    <Tr>
                    <Td>Gravity</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.gravity}</Td>
                    </Tr>
                    <Tr>
                    <Td>Population</Td>
                    <Td> {this.props.history.location.state.selectedPlanet.population}</Td>
                    </Tr>
                    <Tr>
                    <Td>Rotation Period</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.rotation_period}</Td>
                    </Tr>
                    <Tr>
                    <Td>Terrain</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.terrain}</Td>
                    </Tr>
                    <Tr>
                    <Td>url</Td>
                    <Td>{this.props.history.location.state.selectedPlanet.url}></Td>
                    </Tr>
                </Tbody>
            </Table>
            <div>&nbsp;</div>
            <hr></hr>
            <div>
            <button type = 'button' className='back-button' onClick={this.goBackToSearchPage}>Back</button>
            </div>
            </>
        );
    }

}

PlanetDetails.propTypes = {
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.number.isRequired,
    edited: PropTypes.string.isRequired,
    gravity: PropTypes.number.isRequired,
    population: PropTypes.number.isRequired,
    rotation_period: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
};

PlanetDetails.defaultProps = {
    climate: '',
    created: '',
    diameter: '',
    edited: '',
    gravity: '',
    population: '',
    rotation_period: '',
    terrain: '',
};

export default PlanetDetails;