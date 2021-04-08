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
			
			message: '' //TECHNICALLY UNPLANNED: Stores the message of the user from the input field
		}
	}

	//When the back button is clicked
	onBack = () => {

	console.log(this.props.currentEntryKey);	
	console.log(this.props.entries);	
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

		//UNPLANNED: Create a new comment object that contains the name of the author and the message
		const comment = {
			author: this.props.user.name,
			message: this.state.message
		}

		//UNPLANNED: temporary variable storing the contents of the entries array received from props
		const entries = this.props.entries;

		//Pushing the comment object to the comments array in the appropriate entry
		entries[this.props.currentEntryKey].comments.push(comment) 


		//Check to see if message is empty, and alerting user if so
		if(this.state.message == ''){
			alert("Message is empty.");

		//Sends a PUT command to the server
		}else{
	 		fetch('https://morning-thicket-00539.herokuapp.com/newComment', {
	  			method: 'put',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
	  				_id: this.props.entries[this.props.currentEntryKey]._id,
	  				comments: entries[this.props.currentEntryKey].comments
	  			})
	  		}).then(response => response.json())
			.then(entry => {

				//Updates the entry that had a comment added to it with the updated entry from the server
				
				this.props.onUpdateEntries(entries);
				
			})			
		}


		console.log(this.props.entries[this.props.currentEntryKey].comments);



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