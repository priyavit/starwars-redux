import React, { Component } from 'react';
import './starwar.scss';
import history from './history';
import { connect } from 'react-redux';
import { loginUserDetails } from './redux/loginaction';
import Textbox from './Textbox';
import ErrorHandler from './ErrorHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameErr : '',
      passwordErr : '',
      credentialsErr : ''
    };

  }

  componentDidMount() {
    this.props.getUserDetails();
  }

  saveUsername = (event) => {
    this.setState({ username: event.target.value })
    this.setState({usernameErr:''});
    this.setState({credentialsErr:''});
  }

  savePassword = (event) => {
    this.setState({passwordErr:''});
    this.setState({credentialsErr:''});
    this.setState({ password: event.target.value })
  }

  validateUserLogin = () => {
          const userNames = this.props.userDetails;
          for(var i=0;i<userNames.length;i++){
            if(this.state.username === '' && this.state.password === ''){
              this.setState({credentialsErr:'Please enter valid Username/Password'});
              break;
            }else if(userNames[i].name !== this.state.username){
                this.setState({usernameErr:'Please enter valid Username'});
                break;
            }else if(userNames[i].birth_year !== this.state.password){
              this.setState({passwordErr:'Please enter correct Password'});
              break;
            }else if(userNames[i].name === this.state.username && userNames[i].birth_year === this.state.password){
              this.setState({passwordErr:''});
              this.setState({usernameErr:''});
              this.setState({credentialsErr:''});
              localStorage.setItem('user' , this.state.username);
              localStorage.setItem('password' , this.state.password);
              history.push('/details');
              break;
            }
          }
  }

  render() {
    return(
      <>
      <div>
          <header className='star-war-header'>
            Welcome to Star Wars !!!!
          </header>
      </div>
      <div className='login-credentials'>
        <div>
          <span>
            Login: <Textbox type='text' className='username' placeholder='Enter your Username'
             onChange={this.saveUsername}></Textbox>
          </span>
          <ErrorHandler className='error-style' message={this.state.usernameErr}></ErrorHandler>
        </div>
        <div>
          <span>
          Password: <Textbox type="password" className='font-size-25' placeholder='Enter your Password' name="password" onChange={this.savePassword}></Textbox>
          </span>
          <ErrorHandler className='error-style' message={this.state.passwordErr}></ErrorHandler>
        </div>
      </div>
      <div className='login-button'>
        <button type='submit' onClick={this.validateUserLogin}>Login</button>
      </div>
      <ErrorHandler className='login-error' message={this.state.credentialsErr}></ErrorHandler>
    </>
    ); 
  }
}
const mapStateToProps = (state) => ({
    userDetails: state.login.userDetails
})

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: () => dispatch(loginUserDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
