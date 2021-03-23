import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './CreateQuiz.css';

class CreateQuiz extends Component {

	render(){
		return (
			<div className="CreateQuiz">
				<Container>
					<h1 className='text-center'>Create Quiz: Enter Questions and Answers</h1>
					<Card className="card">	
						<Card.Body>
								<Form>
									<Row>	
										<Col>
										  <Form.Group className="question">
										    <Form.Control placeholder="Question" />
										  </Form.Group>
										</Col>
										<Col>
										  <Form.Group className="answer">
										    <Form.Control placeholder="Answer" />
										  </Form.Group>
										</Col>
										  
									</Row>
									<Button variant="primary" className="add-question">
										Add question
									</Button>

								</Form>
						</Card.Body>

					</Card>	
						<Button variant="primary" type="submit" className="submit-quiz">
						    Submit
						</Button>
				</Container>			 
			</div>
		)
	}
}

export default CreateQuiz;