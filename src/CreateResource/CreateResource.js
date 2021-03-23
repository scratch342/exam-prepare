import React, {Component} from 'react';
import './CreateResource.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class CreateResource extends Component {

	render(){
		return (
			<div className="CreateResource">
				<Container>
					<h1 className="text-center">Create Resource: Enter Text and Multimedia</h1>
					<InputGroup>
					  <FormControl class="input-resource" as="textarea" aria-label="With textarea" rows="10"/>
					</InputGroup>

					<Button variant="primary" type="submit" className="submit-resource">
					    Submit
					</Button>
				</Container>
			</div>
		)
	}
}

export default CreateResource;