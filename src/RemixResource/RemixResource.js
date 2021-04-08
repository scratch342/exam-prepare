//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './RemixResource.css';

//Importing certain components from Bootstrap
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Components for imported React WYSIWYG editor using editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from "../../node_modules/html-to-draftjs";

class RemixResource extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){

		//"Ref" that accesses the textarea field
		super(props);
		this.textarea = React.createRef();

		//State object
		this.state = {
			//TECHNICALLY UNPLANNED: The state of the WYSIWYG editor, initialised with the values from the original resource
			editorState: EditorState.createWithContent(ContentState.createFromBlockArray(
				convertFromHTML(JSON.stringify(this.props.entries[this.props.entryKey].resourceValues)))),
			//Raw HTML values of the input for the values of the resource
			resourceValues: '',

			//Information for the resource that will be displayed in the EntryTable
			yearLevel : '',
			subject: '',
			topic: '',
			description: ''
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

	//Updates state of WYSIWYG editor
	onEditorStateChange = (receivedEditorState) => {
		this.setState({
      		editorState: receivedEditorState
    	});
	}

	//Simply logs the value of the raw HTML to the console
	onNew = (event) => {
		console.log(event.target.value);
	}

	//Submits the new resource
	onSubmitNewResource = (e) => {

		console.log(this.textarea.current.value.length);
		e.preventDefault();

		//UNPLANNED: Make local entries array and assign the value of the textarea to a local variable
		const a = this.textarea.current.value;
		const entries = this.props.entries;


		//Check to see if fields are being left blank
		if(this.textarea.current.value.length === 8 ||  
			this.state.yearLevel == '' || 
			this.state.subject == '' ||
			this.state.topic == '' || 
			this.state.description == ''){
			alert("You left a field blank.");

		//Checking range of year level input
		}else if(this.state.yearLevel > 12 || this.state.yearLevel < 0){
			alert("Year level is out of range.")
		}

		//Making sure there aren't too many characters in the input fields
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
		}else{

		//If inputs are valid then assign value of the state variable resourceValues to temp variable storing value of textarea
		this.setState({resourceValues: a}, () => {

			//Make a POST request to the server, sending the new resource to the entries array on the server
			fetch('https://morning-thicket-00539.herokuapp.com/newEntry', {
	  			method: 'post',
	  			headers: {'Content-Type': 'application/json'},
	  			body: JSON.stringify({
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
	  			})
	  		}).then(response => response.json())
			.then(entry => {

				//If sending the entry to the server was successful, log a response to the console
			    if(entry){
			    	console.log('worked');
			    }
			})
		});
		}
        
        
	}

	render(){

		//Equivalent to: const editorState = this.state.editorState;
		const { editorState } = this.state;

		return (
			<div className="RemixResource">
				<Container>
					<h1 className="text-center">Edit Resource by {this.props.entries[this.props.entryKey].creator}: Enter Text and Multimedia</h1>
					{/*WYSIWYG editor component*/}
					<Editor
			          editorState={editorState}
			          wrapperClassName="demo-wrapper"
			          editorClassName="demo-editor"
			          editorStyle={{ border: "1px solid", paddingBottom: "10em" }}
			          onEditorStateChange={this.onEditorStateChange}

					/>

					{/*Textarea showing raw HTML*/}
					<textarea
         			 disabled
          			value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          			ref={this.textarea} name="ting"
          			onChange={this.onNew}
        			/>

        			{/*Forms for inputting information relating to the resource*/}
        			<Form.Control type="number" onChange={this.onYearLevelChange} className="resource-info" placeholder="Year Level (max 2 characters) (0-12)" />
					<Form.Control onChange={this.onSubjectChange} className="resource-info" placeholder="Subject (max 10 characters)" />
					<Form.Control onChange={this.onTopicChange} className="resource-info" placeholder="Topic (max 10 characters)" />
					<Form.Control onChange={this.onDescriptionChange} className="resource-info" placeholder="Description (max 50 characters)" />

					{/*Button for submitting everything*/}
					<Button onClick={this.onSubmitNewResource} variant="primary" type="submit" className="submit-resource">
					    Submit
					</Button>
				</Container>
			</div>
		)
	}
}

export default RemixResource;