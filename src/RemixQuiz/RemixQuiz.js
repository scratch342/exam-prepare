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

	render(){
		return (
			<div className="RemixQuiz">
				<Container>
					<h1 className='text-center'>Edit Quiz by Jake: Enter Questions and Answers</h1>
					<Card className="card">	
						<Card.Body>
								<Form>
									<Row>	
										<Col>
										  <Form.Group className="question">
										    <Form.Control defaultValue="Find the y-intercept of y = x<sup>2</sup> + 3"  />
										  </Form.Group>
										</Col>
										<Col>
										  <Form.Group className="answer">
										    <Form.Control defaultValue="3" />
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

export default RemixQuiz;