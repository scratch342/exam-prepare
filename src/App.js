import React, {Component} from 'react';
import Auth from './Auth/Auth';
import LoginNavbar from './LoginNavbar/LoginNavbar';
import HomeNavbar from './HomeNavbar/HomeNavbar';
import EntryTable from './EntryTable/EntryTable';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import CreateResource from './CreateResource/CreateResource';
import QuizView from './QuizView/QuizView';
import ResourceView from './ResourceView/ResourceView';
import EntryOptions from './EntryOptions/EntryOptions';
import RemixQuiz from './RemixQuiz/RemixQuiz';
import RemixResource from './RemixResource/RemixResource';
import Comments from './Comments/Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends Component {


  render(){
    return (
      <div className="App">
        <HomeNavbar fixed="top" />
        {/*<EntryTable className="EntryTable" />*/}
        {/*<Auth className="Auth" />*/}
        {/*<CreateQuiz className="CreateQuiz" />*/}
        {/*<CreateResource className="CreateResource" />*/}
        {/*<QuizView className="QuizView" />*/}
        {/*<ResourceView className="ResourceView" />*/}
        {/*<EntryOptions className="EntryOptions" />*/}
        {/*<RemixQuiz className="RemixQuiz" />*/}
        {/*<RemixResource className="RemixResource" />*/}
        <Comments className="Comments" />
      </div>
    );
  }
  
}

export default App;
