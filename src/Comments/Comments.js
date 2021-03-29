import React, {Component} from 'react';
import './Comments.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class Comments extends Component {

	constructor(props){
		super(props);

		this.state = {
			message: ''
		}
	}

	onBack = () => {
	if(this.props.entries[this.props.currentEntryKey].type == 'Resource'){
		this.props.onRouteChange('resource-view');
	}else if(this.props.entries[this.props.currentEntryKey].type == 'Quiz'){
		this.props.onRouteChange('quiz-view');
	}
		console.log(this.props.entries[0].type);
	}

	onMessageChange = (e) => {
		this.setState({message: e.target.value})
	}

	onSubmitComment = () => {

		const comment = {
			author: this.props.user.name,
			message: this.state.message
		}

		const entries = this.props.entries;
		entries[this.props.currentEntryKey].comments.push(comment) 
		console.log(entries);
		this.props.onUpdateEntries(entries);
	}

	render(){
		return (
			<div className="Comments">
				<Container>

					<Button onClick={this.onBack} >Back</Button>
					<h1 className="text-center">Enter and View Comments</h1>
					<InputGroup>
					  <FormControl onChange={this.onMessageChange} class="input-resource" as="textarea" aria-label="With textarea" rows="3"/>
					</InputGroup>

					<Button onClick={this.onSubmitComment} onvariant="primary" type="submit" className="submit-comment">
					    Submit
					</Button>

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