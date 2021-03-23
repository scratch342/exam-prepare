import React, {Component} from 'react';
import './Comments.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class Comments extends Component {

	render(){
		return (
			<div className="Comments">
				<Container>
					<h1 className="text-center">Enter and View Comments</h1>
					<InputGroup>
					  <FormControl class="input-resource" as="textarea" aria-label="With textarea" rows="3"/>
					</InputGroup>

					<Button variant="primary" type="submit" className="submit-comment">
					    Submit
					</Button>

					<ListGroup>
						<ListGroup.Item>Brian: This was a really great read!</ListGroup.Item>
						<ListGroup.Item>Holly: So helpful!</ListGroup.Item>
					</ListGroup>
				</Container>
			</div>
		)
	}
}

export default Comments;