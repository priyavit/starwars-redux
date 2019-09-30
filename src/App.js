import React, { Component } from 'react';
import './starwar.scss';
import history from './history';
import { connect } from 'react-redux';
import { loginUserDetails } from './redux/loginaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.validateUserLogin = this.validateUserLogin.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails();
  }

  saveUsername(event) {
    this.setState({ username: event.target.value })
  }

  savePassword(event) {
    this.setState({ password: event.target.value })
  }

  validateUserLogin(){
          const userNames = this.props.userDetails;
          for(var i=0;i<userNames.length;i++){
            if(userNames[i].name === this.state.username && userNames[i].birth_year === this.state.password){
                localStorage.setItem('user' , this.state.username);
                localStorage.setItem('password' , this.state.password);
                history.push('/details');
                break;
            }else if(userNames[i].name !== this.state.username){
                alert('Please enter valid Username');
                break;
            }else if(userNames[i].birth_year !== this.state.password){
              alert('Please enter correct Password');
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
            Login: <input type='text' className='username' placeholder='Enter your Username' onChange={this.saveUsername}></input>
          </span>
          <span className='error-style'>
            {this.state.usernameErr}
          </span>
        </div>
        <div>
          <span>
          Password: <input type="password" className='font-size-25' name="password" onChange={this.savePassword}></input>
          </span>
          <span className='error-style'>
            {this.state.passwordErr}
          </span>
        </div>
      </div>
      <div className='login-button'>
        <button type='submit' onClick={this.validateUserLogin}>Login</button>
      </div>
      <div className='login-error'>
        {this.state.credentialsErr}
      </div>
    </>
    ); 
  }
}

function mapStateToProps(state) {
  console.log('State:', state);
  return {
    userDetails: state.login.userDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserDetails: () => dispatch(loginUserDetails())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
