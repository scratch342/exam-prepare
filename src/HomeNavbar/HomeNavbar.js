import React, {Component} from 'react';
import './HomeNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class HomeNavbar extends Component {
	render(){
		return (
			<div className="HomeNavbar" >
				  <Navbar className="navbar-style"  expand="lg">
				    <Navbar.Brand className="brand-color">ExamPrepare</Navbar.Brand>

				    <Nav className="ml-auto">
					    <Form inline>
					      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
					      <Button variant="outline-primary">Search</Button>
					    </Form>
					</Nav>
				  </Navbar>

			</div>
		)
	}
}

export default HomeNavbar;
