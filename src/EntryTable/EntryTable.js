import React, {Component} from 'react';
import './EntryTable.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class EntryTable extends Component {
	render(){
		return (
			<div className="EntryTable">
				<Container>
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
					    <tr>
					      <td>Quiz</td>
					      <td>9</td>
					      <td>Maths</td>
					      <td>Quadratics</td>
					      <td>A quiz on finding the intercepts of quadratic equations.</td>
					      <td>20</td>
					      <td>Jake</td>
					      <td><Button>Open</Button></td>
					    </tr>
					    <tr>
					      <td>Resource</td>
					      <td>11</td>
					      <td>Biology</td>
					      <td>Cellular Transport</td>
					      <td>An explanation of the process of osmosis.</td>
					      <td>N/A</td>
					      <td>Emma</td>
					      <td><Button>Open</Button></td>
					    </tr>
					  </tbody>
					</Table>
				</Container>
			</div>
		)
	}
}

export default EntryTable;