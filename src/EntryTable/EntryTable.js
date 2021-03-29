import React, {Component} from 'react';
import './EntryTable.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SearchField from "react-search-field";



class EntryTable extends Component {

	constructor(props){
		super(props);


	}
	onEnterEntry = (e) => {
		console.log(e.target.getAttribute('data-key'));

		this.props.onEntryKeyChange(e.target.getAttribute('data-key'))

		if(this.props.entries[e.target.getAttribute('data-key')].type == 'Quiz'){
			const newTime = prompt('What would you like to alter the time limit to? (Leave blank if you would like to leave it unchanged)')
			if(newTime == ''){
				this.props.onChangeAlteredTime('');
			}else{
				this.props.onChangeAlteredTime(newTime);
			}
			this.props.onRouteChange('quiz-view');
		}else{
			this.props.onRouteChange('resource-view');
		}
  		
  	}



	render(){
		return (
			<div className="EntryTable">
				<Container>
					<SearchField
					  placeholder="Search..."
					  className="search-query"
					/>
					<Table className="text-center" striped bordered size="sm">
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
			</div>
		)
	}
}

export default EntryTable;