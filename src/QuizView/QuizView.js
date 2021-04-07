//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './QuizView.css';

//Importing components from bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

//Importing ReactCountdownClock component (installed using npm)
import ReactCountdownClock  from 'react-countdown-clock';


class QuizView extends Component {

	//Accessing props
	constructor(props){
		super(props);

		//References the input field
		this.input = React.createRef();

		
		var time = ''; //UNPLANNED VARIABLE: variable that is used to store the timeLimit

		//Checks to see if time limit was altered and if it was, makes it equal to the altered time
		if(this.props.alteredTime == ''){
			time = this.props.entries[this.props.entryKey].time;

		}else{
			time = this.props.alteredTime;
		}

		console.log(this.props.alteredTime);




		//The state object
		this.state = {
			//TECHNICALLY UNPLANNED: Index of quizQuestions array
			index: 0,

			//TECHNICALLY UNPLANNED: The timeLimit
			timeUsed: time,

			//TECHNICALLY UNPLANNED: Boolean checking if the quiz has been completed
			finished: false,

			//TECHNICALLY UNPLANNED: Stores the answer of the user in the input field
			answer: '',

			//Stores the number of correct and incorrect answers
			correctAnswers: 0,
			incorrectAnswers: 0,
		}
	}

	//When the answer is submitted using the submit button
	onSubmitAnswer = () => {

		//Clears the input field
		this.input.current.value = "";

		
		var currentIndex = this.state.index; //UNPLANNED VARIABLE: Assigns the value of the index to a variable

		//Checks if on last question
		if(this.state.index == (this.props.entries[this.props.entryKey].quizQuestions.length-1) && 
			this.state.finished == false){
			//Checks if answer is correct and increments correctAnswers
			if(this.state.answer == this.props.entries[this.props.entryKey].quizQuestions[currentIndex].answer){
				var currentCorrectAnswers = this.state.correctAnswers;
				currentCorrectAnswers++;
				this.setState({correctAnswers: currentCorrectAnswers});

			//Checks if answer is incorrect and increments incorrectAnswers
			}else{
				var currentIncorrectAnswers = this.state.incorrectAnswers;
				currentIncorrectAnswers++;
				this.setState({incorrectAnswers: currentIncorrectAnswers});		
			}

			//The input field is disabled when the questions are completed and user is alerted
			this.input.current.disabled = true;
			alert("Quiz Completed, your total score is displayed below");
			this.setState({finished: true});

		//Checks if there are still questions left
		}else if (this.state.index < (this.props.entries[this.props.entryKey].quizQuestions.length-1) && 
			this.state.finished == false){
			
			//Checks if answer is correct and increments correctAnswers
			if(this.state.answer == this.props.entries[this.props.entryKey].quizQuestions[currentIndex].answer){
				var currentCorrectAnswers = this.state.correctAnswers;
				currentCorrectAnswers++;
				this.setState({correctAnswers: currentCorrectAnswers});

			//Checks if answer is incorrect and increments incorrectAnswers
			}else{
				var currentIncorrectAnswers = this.state.incorrectAnswers;
				currentIncorrectAnswers++;
				this.setState({incorrectAnswers: currentIncorrectAnswers});		
			}

			//Goes to the next question
			currentIndex++;
			this.setState({index: currentIndex});
		}else if(this.state.finished == true) {

			console.log('stopped');
		}
		


	}

	//Updates the value of the state answer variable, making it equal to the input field
	onChangeAnswer = (e) => {
		this.setState({answer: e.target.value});
	}

	//Callback function for when the timer is finished

	myCallback = () => {
		//Disables the input and alerts the user
		if(this.state.finished == false){
			console.log(this.input);
			this.input.current.disabled = true;
			alert("Quiz time finished, your total score is displayed below");
		}
	}

	render(){

		return(

			<div className="QuizView">


				<Container>
					{/*The countdown clock, calls myCallback when finished*/}
					<ReactCountdownClock seconds={this.state.timeUsed*60}
                     className="clock" color="#000"
                     onComplete={this.myCallback}
                     alpha={0.9}
                     size={40}
                     />

                 	{/*Dynamic values (using state) for information concerning the quiz, including type, year level,
                 	topic, creator*/}
					<h1 className="text-center">{this.props.entries[this.props.entryKey].type}</h1>
					<h2 className="text-center">Year {this.props.entries[this.props.entryKey].yearLevel}  
					&nbsp;{this.props.entries[this.props.entryKey].subject}
					&nbsp;- {this.props.entries[this.props.entryKey].topic}</h2>
					<h3 className="text-center creator">By {this.props.entries[this.props.entryKey].creator}</h3>


					<Card className="card">	
						<Card.Body>
							<Container>
								<Form>
									{/*Dynamic values for each question, contains input for user answer*/}
									<h3 className="text-center">Q{this.state.index + 1} : {this.props.entries[this.props.entryKey].quizQuestions[this.state.index].question}</h3>
									<Form.Group className="answerInput">
									  <Form.Control ref={this.input} onChange={this.onChangeAnswer} placeholder="Answer" as="textarea" rows="4"/>
									</Form.Group>
									<Button onClick={this.onSubmitAnswer} variant="primary" className="register-button">
									  Submit
									</Button>
								</Form>

							</Container>
						</Card.Body>
					</Card>	

					{/*Dynamic values for total questions, correct answers and incorrect answers
					(updated by state)*/}
					<div className="quiz-test">
						<p>Total questions: {this.props.entries[this.props.entryKey].quizQuestions.length} </p>
						<p>Correct answers: {this.state.correctAnswers} </p>
						<p>Incorrect answers: {this.state.incorrectAnswers} </p>
					</div>
				</Container>
			</div>
		)
	}
}

export default QuizView;