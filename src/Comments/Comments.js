//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS fil
import './Comments.css';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class Comments extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);

		//State object
		this.state = {
			//Stores the message of the user from the input field
			message: ''
		}
	}

	//When the back button is clicked
	onBack = () => {
	//If the entry is a resource, go back to "resource-view"
	if(this.props.entries[this.props.currentEntryKey].type == 'Resource'){
		this.props.onRouteChange('resource-view');

	//If the entry is a quiz, go back to "quiz-view"
	}else if(this.props.entries[this.props.currentEntryKey].type == 'Quiz'){
		this.props.onRouteChange('quiz-view');
	}
		
	}

	//Updates the state message variable with the value of the input field
	onMessageChange = (e) => {
		this.setState({message: e.target.value})
	}

	//When a new comment is submitted using the submit button
	onSubmitComment = () => {

		//Create a new comment object that contains the name of the author and the message
		const comment = {
			author: this.props.user.name,
			message: this.state.message
		}

		const entries = this.props.entries;
		entries[this.props.currentEntryKey].comments.push(comment) 

		//Check to see if empty
		if(this.state.message == ''){
			alert("Message is empty.");
		}else{
	 		fetch('http://localhost:27017/newComment', {
	  			method: 'put',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
	  				_id: this.props.entries[this.props.currentEntryKey]._id,
	  				comments: entries[this.props.currentEntryKey].comments
	  			})
	  		}).then(response => response.json())
			.then(entry => {
				entries[this.props.currentEntryKey] = entry; 
				
			})			
		}



		//Update the entries array from props with the new comment
		this.props.onUpdateEntries(entries);



	}

	render(){
		return (
			<div className="Comments">
				<Container>

					{/*Button for going back, calls function when clicked*/}
					<Button onClick={this.onBack} >Back</Button>
					<h1 className="text-center">Enter and View Comments</h1>

					{/*Input field for message*/}
					<InputGroup>
					  <FormControl onChange={this.onMessageChange} class="input-resource" as="textarea" aria-label="With textarea" rows="3"/>
					</InputGroup>

					{/*Button for submitting message*/}
					<Button onClick={this.onSubmitComment} onvariant="primary" type="submit" className="submit-comment">
					    Submit
					</Button>

					{/*Loops through comments array and dynamically displays messages along with 
					name of author*/}
					{this.props.entries[this.props.currentEntryKey].comments.map((comment, index) => {
						return (
							<ListGroup key={index} >
								<ListGroup.Item>{comment.author}: {comment.message}</ListGroup.Item>
							</ListGroup>
						)
					})

					}
				</Container>
			</div>
		)
	}
}

export default Comments;