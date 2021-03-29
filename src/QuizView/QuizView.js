import React, {Component} from 'react';
import './QuizView.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ReactCountdownClock  from 'react-countdown-clock';


class QuizView extends Component {

	constructor(props){
		super(props);

		var time = '';
		if(this.props.alteredTime == ''){
			time = this.props.entries[this.props.entryKey].time;
		}else{
			time = this.props.alteredTime;
		}

		console.log(time);

		this.state = {
			index: 0,
			timeUsed: time,
			finished: false,
			answer: '',
			correctAnswers: 0,
			incorrectAnswers: 0,
		}
	}

	onSubmitAnswer = () => {
		var currentIndex = this.state.index;

		if(this.state.index == (this.props.entries[this.props.entryKey].quizQuestions.length-1) && 
			this.state.finished == false){
			console.log(this.state.index);
			if(this.state.answer == this.props.entries[this.props.entryKey].quizQuestions[currentIndex].answer){
				var currentCorrectAnswers = this.state.correctAnswers;
				currentCorrectAnswers++;
				this.setState({correctAnswers: currentCorrectAnswers});
			}else{
				var currentIncorrectAnswers = this.state.incorrectAnswers;
				currentIncorrectAnswers++;
				this.setState({incorrectAnswers: currentIncorrectAnswers});		
			}
			this.setState({finished: true});
		}else if (this.state.index < (this.props.entries[this.props.entryKey].quizQuestions.length-1) && 
			this.state.finished == false){
			console.log(this.state.index)
			if(this.state.answer == this.props.entries[this.props.entryKey].quizQuestions[currentIndex].answer){
				var currentCorrectAnswers = this.state.correctAnswers;
				currentCorrectAnswers++;
				this.setState({correctAnswers: currentCorrectAnswers});
			}else{
				var currentIncorrectAnswers = this.state.incorrectAnswers;
				currentIncorrectAnswers++;
				this.setState({incorrectAnswers: currentIncorrectAnswers});		
			}
			currentIndex++;
			this.setState({index: currentIndex});
		}else if(this.state.finished == true) {
			console.log('stopped');
		}
		


	}

	onChangeAnswer = (e) => {
		this.setState({answer: e.target.value});
	}

	myCallback = () => {
		alert("Quiz time finished");
	}

	render(){

		return(

			<div className="QuizView">

				<Container>
					<ReactCountdownClock seconds={this.state.timeUsed*60}
                     className="clock" color="#000"
                     onComplete={this.myCallback}
                     alpha={0.9}
                     size={60}
                     />
					<h1 className="text-center">{this.props.entries[this.props.entryKey].type}</h1>
					<h2 className="text-center">Year {this.props.entries[this.props.entryKey].yearLevel}  
					&nbsp;{this.props.entries[this.props.entryKey].subject}
					&nbsp;- {this.props.entries[this.props.entryKey].topic}</h2>
					<h3 className="text-center creator">By {this.props.entries[this.props.entryKey].creator}</h3>

					<Card className="card">	
						<Card.Body>
							<Container>
								<Form>
									<h3 className="text-center">Q{this.state.index + 1} : {this.props.entries[this.props.entryKey].quizQuestions[this.state.index].question}</h3>
									<Form.Group className="answerInput">
									  <Form.Control onChange={this.onChangeAnswer} placeholder="Answer" as="textarea" rows="4"/>
									</Form.Group>
									<Button onClick={this.onSubmitAnswer} variant="primary" className="register-button">
									  Submit
									</Button>
								</Form>

							</Container>
						</Card.Body>
					</Card>	
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