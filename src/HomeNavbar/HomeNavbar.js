import React, {Component} from 'react';
import './HomeNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class HomeNavbar extends Component {

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
					<Nav className="mr-auto">
					      <Nav.Link onClick={this.onLogout} >Logout</Nav.Link>
					      <Nav.Link onClick={this.onHome} >Home</Nav.Link>
					      <Nav.Link onClick={this.onCreateQuiz} >Create Quiz</Nav.Link>
					      <Nav.Link onClick={this.onCreateResource} >Create Resource</Nav.Link>
					</Nav>
				    <Navbar.Brand className="brand-color">ExamPrepare</Navbar.Brand>

				  </Navbar>

			</div>
		)
	}
}

export default HomeNavbar;
