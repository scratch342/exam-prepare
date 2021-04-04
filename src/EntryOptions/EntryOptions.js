//Importing the essential React libraries
import React, {Component} from 'react';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Importing the associated CSS file
import './EntryOptions.css';

class EntryOptions extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);
	}

	//When button to go to comments is pressed, change the route to "comments"
	onComments = () => {
		this.props.onRouteChange('comments');
	}

	//When button to remix entry is pressed
	onRemix = () => {

		//Check if entry is a resource and change the route to "remix-resource"
		if(this.props.entries[this.props.entryKey].type == 'Resource'){
			this.props.onRouteChange('remix-resource');

		//Check if entry is a quiz and change the route to "remix-quiz"
		}else if(this.props.entries[this.props.entryKey].type == 'Quiz'){
			this.props.onRouteChange('remix-quiz');
		}
	}

	render(){
		return (
			
			<div className="fixed-bottom EntryOptions">
				<Container>
					{/*"no-gutters" class makes sure there is no spacing between cards*/}
					<Row className="no-gutters">
						<Col>
							<Card className="options-card">
								<Card.Body>
									{/*Button for viewing comments*/}
									<Button onClick={this.onComments} variant="outline-primary" className="register-button">
								    	View/Add Comments
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="options-card">
								<Card.Body>
									{/*Button for remixing entry*/}
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