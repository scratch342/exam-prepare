//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './LoginNavbar.css';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class LoginNavbar extends Component {
	render(){
		return (
			<div className="LoginNavbar" >
			{/*Simple Navbar using Bootstrap, no data manipulation/logic*/}
			  <Navbar className="navbar-style"  expand="lg">
			    <Navbar.Brand className="brand-color2">ExamPrepare</Navbar.Brand>
			  </Navbar>
			</div>
		);
	}
}

export default LoginNavbar;