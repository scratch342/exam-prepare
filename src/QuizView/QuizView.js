import React, {Component} from 'react';
import './QuizView.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class QuizView extends Component {

	render(){
		return(
			<div className="QuizView">
				<Container>
					<h1 className="text-center">Quiz</h1>
					<h2 className="text-center">Year 9 Maths - Quadratics</h2>
					<h3 className="text-center creator">By Jake</h3>

					<Card className="card">	
						<Card.Body>
							<Container>
								<Form>
									<h3 className="text-center">Q1: Find the y-intercept of y = x<sup>2</sup> + 3</h3>
									<Form.Group className="answerInput">
									  <Form.Control placeholder="Answer" as="textarea" rows="4"/>
									</Form.Group>
									<Button variant="primary" type="submit" className="register-button">
									  Submit
									</Button>
								</Form>
							</Container>
						</Card.Body>
					</Card>	
				</Container>
			</div>
		)
	}
}

export default QuizView;