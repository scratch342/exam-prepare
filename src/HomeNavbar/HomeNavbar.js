//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './HomeNavbar.css';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomeNavbar extends Component {

	//Routing for logging out, going home, creating resources and creating quizzes
	onLogout = () => {
		this.props.onRouteChange('auth');
	}

	onHome = () => {
		this.props.onRouteChange('search');
	}

	onCreateResource = () => {
		this.props.onRouteChange('create-resource');
	}

	onCreateQuiz = () => {
		this.props.onRouteChange('create-quiz')
	}

	render(){
		return (
			<div className="HomeNavbar" >
				  <Navbar className="navbar-style"  expand="lg">
						<Nav>

						<Nav className="brand-nav">
					    	<Navbar.Brand className="brand-color">ExamPrepare</Navbar.Brand>
					   	</Nav>

							{/*Links for routing to different components*/}
						      <Nav.Link onClick={this.onLogout} >Logout</Nav.Link>
						      <Nav.Link onClick={this.onHome} >Home</Nav.Link>
						      <Nav.Link onClick={this.onCreateQuiz} >Create Quiz</Nav.Link>
						      <Nav.Link onClick={this.onCreateResource} >Create Resource</Nav.Link>
						</Nav>
						

				  </Navbar>

			</div>
		)
	}
}

export default HomeNavbar;
