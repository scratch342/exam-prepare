import React, {Component} from 'react';
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
import './Auth.css';


class Auth extends Component {

	users = [
		{
			name: "Johnny",
			email: "johnny@gmail.com",
			password: "123"
		}
	]

	constructor(props){
    	super(props);

    	this.state = {
      		loginEmail: '',
      		loginPassword: '',
      		registerName: '',
      		registerEmail: '',
      		registerPassword: ''
    	}		
  	}

  	onLoginEmailChange = (event) => {
  		this.setState({loginEmail: event.target.value});
  	}

  	onLoginPasswordChange = (event) => {
  		this.setState({loginPassword: event.target.value});
  	}

  	onRegisterNameChange = (event) => {
  		this.setState({registerName: event.target.value});
  	}

  	onRegisterEmailChange = (event) => {
  		this.setState({registerEmail: event.target.value});
  	}

  	onRegisterPasswordChange = (event) => {
  		this.setState({registerPassword: event.target.value});
  	}

  	onSubmitLogin = () => {
  		
  		for(let i = 0; i < this.users.length; i++){
  			if(this.users[i].email == this.state.loginEmail && this.users[i].password == this.state.loginPassword){
  				
  				this.props.onRouteChange('search');
  			}
  			i++;
  		}
  		
  	}

  	onSubmitRegister = () => {
  		const newUser = {
  			name: this.state.registerName,
  			email: this.state.registerEmail,
  			password: this.state.registerPassword
  		}
  		
  		console.log(newUser);
  		this.props.onLoadUser(newUser);
  		this.props.onRouteChange('search');
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