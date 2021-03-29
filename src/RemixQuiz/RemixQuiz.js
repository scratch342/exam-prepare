import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './RemixQuiz.css';



class RemixQuiz extends Component {

	constructor(props){
		super(props);

		const receivedQuestions = this.props.entries[this.props.entryKey].quizQuestions;

		this.state = {
			quizQuestions: receivedQuestions,
			yearLevel : '',
			subject: '',
			topic: '',
			description: '',
			time: ''
		}
	}

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

	createInput() {
		const questions = this.state.quizQuestions;
		const quizQuestion = {
			question: '',
			answer: ''
		}
		questions.push( {quizQuestion} )
		this.setState({quizQuestions: questions});
		console.log(this.state.quizQuestions);
		console.log(this.props.entries[this.props.entryKey].quizQuestions);
	}

	onQuestionChange = (e) => {
		const i = e.target.getAttribute('data-key');
		console.log(e.target.getAttribute('data-key'));

		const questions = this.state.quizQuestions;
		questions[i].question = e.target.value;
		this.setState({quizQuestions : questions})
	}

	onAnswerChange = (e) => {
		const i = e.target.getAttribute('data-key');
		console.log(e.target.getAttribute('data-key'));

		const questions = this.state.quizQuestions;
		questions[i].answer = e.target.value;
		this.setState({quizQuestions : questions})
	}

	submitQuestions = () => {
		console.log(this.state.quizQuestions);
		const entries = this.props.entries;
		
		

		entries.push({
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
        });
		this.props.onUpdateEntries(entries);
	
	}

	render(){
		return (
			<div className="CreateQuiz">
				<Container>
					<h1 className='text-center'>Create Quiz: Enter Questions and Answers</h1>
					<Card className="card">	
						<Card.Body>
								<Form>
									{this.state.quizQuestions.map((pair, index) => {

										return(
										<Row key={index}>	
											<Col>
												
											  <Form.Group className="question">
											    <Form.Control value={pair.question} data-key={index} onChange={this.onQuestionChange} placeholder="Question" />
											  </Form.Group>
											</Col>
											<Col>
											  <Form.Group className="answer">
											    <Form.Control value={pair.answer} data-key={index} onChange={this.onAnswerChange} placeholder="Answer" />
											  </Form.Group>
											</Col>
											  
										</Row>
										)
									})}
									<Button onClick={this.createInput.bind(this)} variant="primary" className="add-question">
										Add question
									</Button>

								</Form>
						</Card.Body>

					</Card>	

						<Form.Control onChange={this.onYearLevelChange} className="quiz-info" placeholder="Year Level" />
						<Form.Control onChange={this.onSubjectChange} className="quiz-info" placeholder="Subject" />
						<Form.Control onChange={this.onTopicChange} className="quiz-info" placeholder="Topic" />
						<Form.Control onChange={this.onDescriptionChange} className="quiz-info" placeholder="Description" />
						<Form.Control onChange={this.onTimeChange} className="quiz-info" placeholder="Time (minutes)" />

						<Button onClick={this.submitQuestions} variant="primary" type="submit" className="submit-quiz">
						    Submit
						</Button>



				</Container>			 
			</div>
		)
	}
}

export default RemixQuiz;