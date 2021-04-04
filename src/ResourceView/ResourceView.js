//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './ResourceView.css';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class ResourceView extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="ResourceView">
				{/*Dynamically display values for resource*/}
				<Container>
					<h1 className="text-center">{this.props.entries[this.props.entryKey].type}</h1>
					<h2 className="text-center">Year {this.props.entries[this.props.entryKey].yearLevel}  
					&nbsp;{this.props.entries[this.props.entryKey].subject}
					&nbsp;- {this.props.entries[this.props.entryKey].topic}</h2>
					<h3 className="text-center creator">By {this.props.entries[this.props.entryKey].creator}</h3>

					<Card>
					  <Card.Body className="resource-card" dangerouslySetInnerHTML={{ __html: this.props.entries[this.props.entryKey].resourceValues}} >
					  	
					  </Card.Body>
					</Card>

				</Container>
			</div>
		)
	}
}

export default ResourceView;