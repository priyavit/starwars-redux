import React,{Component} from 'react';
import App from '../App';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Details from '../details';
import history from '../history';
import PlanetDetails from '../planetDetails';

class Routing extends Component{
        render(){
            return(
                <Router history={history}>
                        <Route exact path='/'  component={App}/>
                        <Route path='/details' component={Details}/>
                        <Route path="/planet/:pathParam?" component={PlanetDetails} />
                   
                </Router>
            );
        }
}

export default Routing;