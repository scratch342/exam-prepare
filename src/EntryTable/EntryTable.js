//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './EntryTable.css';

//Importing certain components from Bootstrap
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//Importing SearchField component (installed using npm)
import Loader from 'react-loader-spinner';

var loading = true;

class EntryTable extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);
	}

	componentDidMount(){
			fetch('http://localhost:27017/getEntries', {
	  			method: 'get',
	  			headers: {'Content-Type': 'application/json'}
	  		}).then(response => response.json())
			.then(entries => {
			    if(entries){
			    	loading = false;
			    	this.props.onUpdateEntries(entries);
			    }
			})
	}

	//This function is called when an entry is opened
	onEnterEntry = (e) => {
		console.log(e.target.getAttribute('data-key'));

		//Calls a function through props that assigns the index of the entry to the index of the HTML table item
		this.props.onEntryKeyChange(e.target.getAttribute('data-key'))

		//Checks to see whether entry is a quiz or a resource
		if(this.props.entries[e.target.getAttribute('data-key')].type == 'Quiz'){
			const newTime = prompt('What would you like to alter the time limit to? (Leave blank if you would like to leave it unchanged)');
			//Gives user opportunity to alter the time limit for quizzes
			if(newTime == '' || newTime == (typeof newTime == "undefined") || newTime == null){
				this.props.onChangeAlteredTime('');
			}else{
				this.props.onChangeAlteredTime(newTime);
			}

			//Calls function through props to change route to "quiz-view"
			this.props.onRouteChange('quiz-view');
		}else{

			//Calls function through props to change route to "resource-view"
			this.props.onRouteChange('resource-view');
		}
  		
  	}



	render(){
		return (
			<div className="EntryTable">
				{loading ? <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /> :
				<Container>
					<Table className="text-center" striped bordered responsive>
					  <thead>
					    <tr>
					      <th>Type</th>
					      <th>Year Level</th>
					      <th>Subject</th>
					      <th>Topic</th>
					      <th>Description</th>
					      <th>Time (minutes)</th>
					      <th>Creator</th>
					      <th>Access</th>
					    </tr>
					  </thead>

					{/*Dynamically assigns values to table data using map function to loop through
					entries array from props*/}
					  <tbody>
					  	{this.props.entries.map((entry, index) => {
					  		return (
					  			<tr key={index}>
					  				<td >{entry.type}</td>
					  				<td>{entry.yearLevel}</td>
					  				<td>{entry.subject}</td>
					  				<td className="search-query">{entry.topic}</td>
					  				<td>{entry.description}</td>
					  				<td>{entry.time}</td>
					  				<td>{entry.creator}</td>
					  				<td><Button data-key={index} onClick={this.onEnterEntry}>Open</Button></td>
					  			</tr>
					  		)
					  	})}
					  </tbody>
					</Table>
				</Container>
				}

			</div>
		)
	}
}

export default EntryTable;