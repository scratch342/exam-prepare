//Importing the essential React libraries
import React, {Component} from 'react';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//Importing the associated CSS file
import './CreateQuiz.css';

class CreateQuiz extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);

		//State object
		this.state = {
			//Array for number of HTML inputs when adding questions to quiz
			htmlInputs: [],

			//Array storing objects of question and answer
			quizQuestions: [],

			//Information for the quiz that will be displayed in the EntryTable
			yearLevel : '',
			subject: '',
			topic: '',
			description: '',
			time: ''
		}
	}

	//Updates the values of the information that will be displayed in the EntryTable using appropriate inputs
	onYearLevelChange = (e) => {
		this.setState({yearLevel: e.target.value})
	}

	onSubjectChange = (e) => {
		this.setState({subject: e.target.value})
	}

	onTopicChange = (e) => {
		this.setState({topic: e.target.value})
	}

	onDescriptionChange = (e) => {
		this.setState({description: e.target.value})
	}

	onTimeChange = (e) => {
		this.setState({time: e.target.value})
	}

	//When a button is pressed to create new input fields
	createInput() {
		//Effectively creates a new HTML input
		const inputs = this.state.htmlInputs;
		const questions = this.state.quizQuestions;
		const empty = '';
		const quizQuestion = {
			question: '',
			answer: ''
		}

		//Push to state arrays
		inputs.push( {empty} );
		questions.push( {quizQuestion} )
		this.setState({htmlInputs: inputs});	
		this.setState({quizQuestions: questions});
	}

	//When question input field changes
	onQuestionChange = (e) => {
		const i = e.target.getAttribute('data-key');
		console.log(e.target.getAttribute('data-key'));

		//Update appropriate object in array and push to state array
		const questions = this.state.quizQuestions;
		questions[i].question = e.target.value;
		this.setState({quizQuestions : questions})
	}

	//When answer input field changes
	onAnswerChange = (e) => {
		const i = e.target.getAttribute('data-key');
		console.log(e.target.getAttribute('data-key'));

		//Update appropriate object in array and push to state array
		const questions = this.state.quizQuestions;
		questions[i].answer = e.target.value;
		this.setState({quizQuestions : questions})
	}

	//When the quizQuestions are all submitted using the submit button
	submitQuestions = () => {
		

		//Create a new entries object
		const entries = this.props.entries;
		var blank = false;

		//Must loop through quizQuestions array to check if any inputs have been left blank
		for(var i = 0; i < this.state.quizQuestions.length; ++i){
			if(this.state.quizQuestions[i].question == '' || this.state.quizQuestions[i].answer == ''
				|| (typeof this.state.quizQuestions[i].question === 'undefined') ||
				(typeof this.state.quizQuestions[i].answer === 'undefined')){
				blank = true;
				break;
			}else{
				blank = false;
			}
		}

		//Check to see if fields are being left blank
		if(this.state.time == '' || 
			this.state.yearLevel == '' || 
			this.state.subject == '' ||
			this.state.topic == '' || 
			this.state.description == ''){
			alert("You left a field blank.");
		}

		//Check to see if user added any questions
		else if(this.state.quizQuestions.length == 0){
			alert("You have not added any questions.")
		}


		//Making sure there aren't too many characters in the input fields
		else if(this.state.time.length > 3){
			alert("Only a maximum of 3 characters are allowed for time limit.");
		}

		else if(this.state.yearLevel.length > 2){
			alert("Only a maximum of 2 characters are allowed for year level.");
		}

		else if(this.state.description.length > 50){
			alert("Only a maximum of 50 characters are allowed for description.")
		}

		else if(this.state.topic.length > 10){
			alert("Only a maximum of 10 characters are allowed for topic.");
		}

		else if(this.state.subject.length > 10){
			alert("Only a maximum of 10 characters are allowed for subject.");
		}else if(blank == true){
			alert("You left a field blank");
		}else{
			fetch('http://localhost:27017/newEntry', {
	  			method: 'post',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
	  				type: 'Quiz',	
		        	yearLevel: this.state.yearLevel,
		        	subject: this.state.subject,
		        	topic: this.state.topic,
		        	description: this.state.description,
		        	time: this.state.time,
		        	creator: this.props.user.name,
		        	resourceValues: '',
		        	quizQuestions: this.state.quizQuestions,
		        	comments: []
	  			})
	  		}).then(response => response.json())
			.then(entry => {
			    if(entry){
			    	console.log('nice');
			    }
			})

		}


	}

	render(){
		return (
			<div className="CreateQuiz">
				<Container>
					<h1 className='text-center'>Create Quiz: Enter Questions and Answers</h1>
					<Card className="card">	
						<Card.Body>
								<Form>
									{/*Loop through htmlInputs array in state and create inputs*/}
									{this.state.htmlInputs.map((inputs, index) => {

										return(
										<Row key={index}>	
											<Col>
											  <Form.Group className="question">
											    <Form.Control data-key={index} onChange={this.onQuestionChange} placeholder="Question" />
											  </Form.Group>
											</Col>
											<Col>
											  <Form.Group className="answer">
											    <Form.Control data-key={index} onChange={this.onAnswerChange} placeholder="Answer" />
											  </Form.Group>
											</Col>
											  
										</Row>
										)
									})}

									{/*Button to add a question*/}
									<Button onClick={this.createInput.bind(this)} variant="primary" className="add-question">
										Add question
									</Button>

								</Form>
						</Card.Body>

					</Card>	

						{/*Forms for information relating to the entry*/}
						<Form.Control type="number" onChange={this.onYearLevelChange} className="quiz-info" placeholder="Year Level (max 2 characters) (0-12)" />
						<Form.Control onChange={this.onSubjectChange} className="quiz-info" placeholder="Subject (max 10 characters)" />
						<Form.Control onChange={this.onTopicChange} className="quiz-info" placeholder="Topic (max 10 characters)" />
						<Form.Control onChange={this.onDescriptionChange} className="quiz-info" placeholder="Description (max 50 characters)" />
						<Form.Control type="number" onChange={this.onTimeChange} className="quiz-info" placeholder="Time (minutes) (max 3 characters) (0-180)" />

						{/*Button for submitting everything*/}
						<Button onClick={this.submitQuestions} variant="primary" type="submit" className="submit-quiz">
						    Submit
						</Button>



				</Container>			 
			</div>
		)
	}
}

export default CreateQuiz;