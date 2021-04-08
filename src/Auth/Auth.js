//Importing the essential React libraries

import React, {Component} from 'react';

//Importing certain components from Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//Importing the associated CSS file
import './Auth.css';


class Auth extends Component {


	//This accesses the props (values passed in by parent component)
	constructor(props){
    	super(props);

    	//The state object
    	this.state = {
    		//TECHNICALLY UNPLANNED: Stores the values of the inputs for email and password when logging in
      		loginEmail: '',
      		loginPassword: '',

      		//TECHNICALLY UNPLANNED: Stores the values of the inputs for name, email and password when logging in
      		registerName: '',
      		registerEmail: '',
      		registerPassword: ''
    	}		
  	}


  	//Updates the value of the state loginEmail variable using appropriate input
  	onLoginEmailChange = (event) => {
  		this.setState({loginEmail: event.target.value});
  	}

  	//Updates the value of the state loginPassword variable using appropriate input
  	onLoginPasswordChange = (event) => {
  		this.setState({loginPassword: event.target.value});
  	}

  	//Updates the value of the state registerName variable using appropriate input
  	onRegisterNameChange = (event) => {
  		this.setState({registerName: event.target.value});
  	}

  	//Updates the value of the state registerEmail variable using appropriate input
  	onRegisterEmailChange = (event) => {
  		this.setState({registerEmail: event.target.value});
  	}

  	//Updates the value of the state registerPassword variable using appropriate input
  	onRegisterPasswordChange = (event) => {
  		this.setState({registerPassword: event.target.value});
  	}

  	//When submit button for login is clicked
  	onSubmitLogin = () => {
  		
  		//Make a post request to the server using the user's inputted details
 		fetch('https://morning-thicket-00539.herokuapp.com/signin', {
  			method: 'post',
  			headers: {'Content-Type': 'application/json'},
  			body: JSON.stringify({
  				email: this.state.loginEmail,
  				password: this.state.loginPassword
  			})
  		}).then(response => response.json())
		.then(user => {
			
			//If the user was found and there was no error...
		    if(user != "Unable to sign in; wrong credentials"){
		    	console.log(user._id);

		    	//Load the user into the state user object in App.js (the parent component)
		      	this.props.onLoadUser(user);

		      	//Move to the home page
				this.props.onRouteChange('search');

			//If the user was not found then alert the user instead
		    }else{
		    	alert('Not found');
		    }
		})
  		
  	}

  	//When the submit button for register is clicked
  	onSubmitRegister = () => {
  		//Create a new user object with the values from the input fields

  		//String used for testing whether the email field is valid
  		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  		//If the email is valid...
  		if(re.test(this.state.registerEmail)){
  			//Make a post request to the server using the user's inputted values
	  		fetch('https://morning-thicket-00539.herokuapp.com/register', {
	  			method: 'post',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
	  				name: this.state.registerName,
	  				email: this.state.registerEmail,
	  				password: this.state.registerPassword
	  			})
	  		}).then(response => response.json())
			.then(user => {

				//If the email does not already exist...
			    if(user != "Unable to sign in; existing user"){
			    		//Load the user into the state user object in App.js (the parent component)
					  this.props.onLoadUser(user[0]);

					  //Move to the home page
					  this.props.onRouteChange('search');

				//If the email already exists, alert the user instead
			    }else{
			    	alert("Unable to sign in: existing email");
			    }
			})
		//If any fields are left blank, then alert the user
  		}else if(this.state.registerName == '' || this.state.registerPassword == '' || this.state.registerName == ''){
  			alert("You have left a field blank.");

  		//If the email inputted is invalid, then alert the user
  		}else{
  			alert("Invalid email address");
  		}
  	}

	render(){
		return (
			<div className="Auth">
			<Row>
					<Col></Col>
					<Col xs={9} lg={5}>
						<Tabs id="uncontrolled-tab-example">
						  <Tab eventKey="Login" title="Login" className="login-tab">
							<Card className="card">	
								<Card.Body>
									<Container>
										{/*Forms for logging in*/}
										<Form> 
										  <Form.Group controlId="formBasicEmail" className="emailInput">
										    <Form.Control type="email" placeholder="Email" className="emailTest" onChange={this.onLoginEmailChange} />
										  </Form.Group>

										  <Form.Group controlId="formBasicPassword" className="passwordInput">
										    <Form.Control type="password" placeholder="Password" onChange={this.onLoginPasswordChange} />
										  </Form.Group>
										  <Button onClick={this.onSubmitLogin} variant="primary" className="login-button">
										    Login
										  </Button>
										</Form>
									</Container>
								</Card.Body>
							</Card>				    
						  </Tab>
						  <Tab eventKey="Register" title="Register" className="register-tab">
							<Card className="card">	
								<Card.Body>
									<Container>
										{/*Forms for registering*/}
										<Form>

										  <Form.Group className="nameInput">
										    <Form.Control placeholder="Name" onChange={this.onRegisterNameChange} />
										  </Form.Group>

										  <Form.Group controlId="formBasicEmail" className="emailInput">
										    <Form.Control type="email" placeholder="Email" onChange={this.onRegisterEmailChange} />
										  </Form.Group>


										  <Form.Group controlId="formBasicPassword" className="passwordInput">
										    <Form.Control type="password" placeholder="Password" onChange={this.onRegisterPasswordChange} />
										  </Form.Group>
										  <Button onClick={this.onSubmitRegister} variant="primary" className="register-button">
										    Register
										  </Button>
										</Form>
									</Container>
								</Card.Body>
							</Card>	
						  </Tab>
						</Tabs>

					</Col>
					<Col></Col>
				</Row>




			</div>
		)
	}
}

export default Auth;