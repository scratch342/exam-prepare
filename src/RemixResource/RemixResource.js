import React, {Component} from 'react';
import './RemixResource.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from "../../node_modules/html-to-draftjs";

class RemixResource extends Component {

	constructor(props){

		super(props);
		this.textarea = React.createRef();

		this.state = {
			editorState: EditorState.createWithContent(ContentState.createFromBlockArray(
				convertFromHTML(JSON.stringify(this.props.entries[this.props.entryKey].resourceValues)))),
			resourceValues: '',
			yearLevel : '',
			subject: '',
			topic: '',
			description: ''
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

	onEditorStateChange = (receivedEditorState) => {
		this.setState({
      		editorState: receivedEditorState
    	});
	}

	onNew = (event) => {
		console.log(event.target.value);
	}

	onSubmitNewResource = (e) => {
		e.preventDefault();
		const a = this.textarea.current.value;
		const entries = this.props.entries;
		this.setState({resourceValues: a}, () => {
			entries.push({
        	type: 'Resource',
        	yearLevel: this.state.yearLevel,
        	subject: this.state.subject,
        	topic: this.state.topic,
        	description: this.state.description,
        	time: 'N/A',
        	creator: this.props.user.name,
        	resourceValues: this.state.resourceValues,
        	quizQuestions: [],
        	comments: []
        	});
			this.props.onUpdateEntries(entries);
		});
        
        
	}

	render(){

		const { editorState } = this.state;

		return (
			<div className="RemixResource">
				<Container>
					<h1 className="text-center">Edit Resource by {this.props.entries[this.props.entryKey].creator}: Enter Text and Multimedia</h1>
					<Editor
			          editorState={editorState}
			          wrapperClassName="demo-wrapper"
			          editorClassName="demo-editor"
			          editorStyle={{ border: "1px solid", paddingBottom: "10em" }}
			          onEditorStateChange={this.onEditorStateChange}

					/>

					<textarea
         			 disabled
          			value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          			ref={this.textarea} name="ting"
          			onChange={this.onNew}
        			/>

        			<Form.Control onChange={this.onYearLevelChange} className="resource-info" placeholder="Year Level" />
					<Form.Control onChange={this.onSubjectChange} className="resource-info" placeholder="Subject" />
					<Form.Control onChange={this.onTopicChange} className="resource-info" placeholder="Topic" />
					<Form.Control onChange={this.onDescriptionChange} className="resource-info" placeholder="Description" />

					<Button onClick={this.onSubmitNewResource} variant="primary" type="submit" className="submit-resource">
					    Submit
					</Button>
				</Container>
			</div>
		)
	}
}

export default RemixResource;