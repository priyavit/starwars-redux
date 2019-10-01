import React,{Component} from 'react';
import './starwar.scss';
import DisplayPlanets from './displayPlanets';
import {getPlanetDetails} from './redux/planetaction';
import { connect } from 'react-redux';
import Textbox from './Textbox';

class  Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            planetDetails : '',
            filteredArray : [],
            isSearchInitiated: false
    };
        
    }

    componentDidMount(){
        this.props.getPlanetDetails();
    }

    planetList = (event) =>{
        this.setState({ isSearchInitiated: true });
        const planets = this.props.planetDetails;
        const {value} = event.target;
        let tempArr = [];
        planets.forEach((planet) => {
            if(value !== ''){
                if(planet.name.includes(`${value}`)){
                    tempArr.push(planet)
                 }
            }else{
                tempArr = [];
                this.setState({ isSearchInitiated: false });
            }
            return tempArr;
        });
        this.setState({filteredArray: tempArr});
    }

    render(){
        return(
            <>
            <form>
                <p className='search-header'>Enter the planet to be Searched</p>
                <Textbox className='search-text' type='textbox' placeholder='Planet' 
                changeHandler={this.planetList}></Textbox>
                <DisplayPlanets planet={this.state.filteredArray} isSearchInitiated={this.state.isSearchInitiated}></DisplayPlanets>
            </form>
            
            </>
        );
    }
}

function mapStateToProps(state){
    return{
        planetDetails : state.planet.planetDetails
    };
}

function mapDispatchToProps(dispatch){
    return{
        getPlanetDetails : () => dispatch(getPlanetDetails())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);