import React, {Component} from 'react';
import './RemixResource.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class RemixResource extends Component {

	render(){
		return (
			<div className="RemixResource">
				<Container>
					<h1 className="text-center">Edit Resource by Emma: Enter Text and Multimedia</h1>
					<InputGroup>
					  <FormControl defaultValue="Osmosis is a form of passive transport in which a solvent moves across a cell's semipermeable membrane from an area where it is in high concentration to an area where it is in low concentration." class="input-resource" as="textarea" aria-label="With textarea" rows="10"/>
					</InputGroup>

					<Button variant="primary" type="submit" className="submit-resource">
					    Submit
					</Button>
				</Container>
			</div>
		)
	}
}

export default RemixResource;