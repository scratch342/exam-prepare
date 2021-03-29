import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EntryOptions.css';

class EntryOptions extends Component {

	constructor(props){
		super(props);
	}
	onComments = () => {
		this.props.onRouteChange('comments');
	}

	onRemix = () => {
		if(this.props.entries[this.props.entryKey].type == 'Resource'){
			this.props.onRouteChange('remix-resource');
		}else if(this.props.entries[this.props.entryKey].type == 'Quiz'){
			this.props.onRouteChange('remix-quiz');
		}
	}

	render(){
		return (
			<div className="fixed-bottom EntryOptions">
				<Container>
					<Row className="no-gutters">
						<Col>
							<Card className="options-card">
								<Card.Body>
									<Button onClick={this.onComments} variant="outline-primary" className="register-button">
								    	View/Add Comments
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="options-card">
								<Card.Body>
									<Button onClick={this.onRemix} variant="outline-primary" className="register-button">
								    	Remix this Entry
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