import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EntryOptions.css';

class EntryOptions extends Component {

	render(){
		return (
			<div className="fixed-bottom EntryOptions">
				<Container>
					<Row className="no-gutters">
						<Col>
							<Card className="options-card">
								<Card.Body>
									<Button variant="outline-primary" className="register-button">
								    	View/Add Comments
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="options-card">
								<Card.Body>
									<Button variant="outline-primary" className="register-button">
								    	Remix this Resource
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default EntryOptions;