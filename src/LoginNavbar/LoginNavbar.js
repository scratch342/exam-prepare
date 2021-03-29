import React, {Component} from 'react';
import './LoginNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class LoginNavbar extends Component {
	render(){
		return (
			<div className="LoginNavbar" >
			  <Navbar className="navbar-style"  expand="lg">
			    <Navbar.Brand className="brand-color2">ExamPrepare</Navbar.Brand>
			  </Navbar>
			</div>
		);
	}
}

export default LoginNavbar;