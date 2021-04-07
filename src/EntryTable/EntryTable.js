//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the associated CSS file
import './EntryTable.css';

//Importing certain components from Bootstrap
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//Importing Loader component (installed using npm)
import Loader from 'react-loader-spinner';

//Importing SearchField component (installed using npm)
import SearchField from 'react-search-field';

var loading = true; //UNPLANNED VARIABLE: checks to see if data has been loaded from the database

class EntryTable extends Component {

	//This accesses the props (values passed in by parent component)
	constructor(props){
		super(props);
	}

	//Whenever the component is loaded
	componentDidMount(){

			//Fetch entries from the server using GET request
			fetch('http://localhost:27017/getEntries', {
	  			method: 'get',
	  			headers: {'Content-Type': 'application/json'}
	  		}).then(response => response.json())
			.then(entries => {
			    if(entries){

			    	//Set loading to false so the loading component disappears
			    	loading = false;

			    	//Update the state entries array in App.js (the parent component)
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

  	//When search button is clicked on the search bar, call the function for searching for entries using the query
  	onSearchClick = (val) => {
  		this.searchEntry(val);
  	}

  	//When enter button is pressed in search field, call the function for searching for entries using the query
  	onEnter = (val) => {
  		this.searchEntry(val);
  	}

  	//Function that searches for entries, receives the value of the search query as a parameter
  	searchEntry = (val) => {
  		const entries = []; //UNPLANNED: temporary array for storing entries array
  		var valid = true; //UNPLANNED: variable that checks whether the indexes of the topic is equal to that of the search query


  		console.log("Values length" + val.length);

  		//Looping through the entire entries array
  		for(var i = 0; i < this.props.entries.length; i++){

  			//For each entry, loop through each character of the search query 
  			for(var y = 0; y < val.length; y++){

  				//At the start of each iteration, set valid to true initially
  				valid = true;

  				//Check to see if the current character of the search query is equal to that of the topic of the entry
  				if(val[y].toLowerCase() == this.props.entries[i].topic[y].toLowerCase()){
  					console.log('true');

  				//If not, make valid equal to false and break the loop
  				}else{
  					valid = false;
  					console.log("false");
  					break;
  				}


				console.log(val);
  				console.log(val[y]);

  				//If on the last iteration of this nested loop and valid is still equal to true
  				if (y == (val.length - 1) && valid == true){

  					//Push the entry to the temporary array
  					console.log(val.length - 1)
  					entries.push(this.props.entries[i]);
  					console.log(entries);
  				} 	

  				
  			}

  		//Make the state entries array equal to the temporary entries array (this updates the table dynamically)
  		this.props.onUpdateEntries(entries);
  		}
  	}




	render(){
		return (
			<div className="EntryTable">
			{/*If the data has not been loaded, show the loading component; else display the normal content (table)*/}
				{loading ? <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /> :
				<Container>
					<SearchField
					  placeholder='Search entry by topic'
					  onSearchClick={this.onSearchClick}
					  onEnter={this.onEnter}
					/>
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