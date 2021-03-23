import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import './ResourceView.css';
import Card from 'react-bootstrap/Card';

class ResourceView extends Component {

	render(){
		return (
			<div className="ResourceView">
				<Container>
					<h1 className="text-center">Resource</h1>
					<h2 className="text-center">Year 11 Biology - Osmosis</h2>
					<h3 className="text-center creator">By Emma</h3>

					<Card>
					  <Card.Body>
					  	<h3>Osmosis is a form of passive transport in which a solvent moves across a cell's 
					  	semipermeable membrane from an area where it is in high concentration to an area where 
					  	it is in low concentration. </h3>
					  </Card.Body>
					</Card>

				</Container>
			</div>
		)
	}
}

export default ResourceView;