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
									    <Form.Control type="email" placeholder="Email" className="emailTest" />
									  </Form.Group>

									  <Form.Group controlId="formBasicPassword" className="passwordInput">
									    <Form.Control type="password" placeholder="Password" />
									  </Form.Group>
									  <Button variant="primary" type="submit" className="login-button">
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
									    <Form.Control placeholder="Name" />
									  </Form.Group>

									  <Form.Group controlId="formBasicEmail" className="emailInput">
									    <Form.Control type="email" placeholder="Email" />
									  </Form.Group>


									  <Form.Group controlId="formBasicPassword" className="passwordInput">
									    <Form.Control type="password" placeholder="Password" />
									  </Form.Group>
									  <Button variant="primary" type="submit" className="register-button">
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