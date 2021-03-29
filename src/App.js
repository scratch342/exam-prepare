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

  constructor(){
    super();

    this.state = {
      currentEntryKey: '',
      alteredTime: '',
      entries: [
        { 
          type: 'Quiz',
          yearLevel: '9',
          subject: 'Maths',
          topic: 'Quadratics',
          description: 'A quiz on finding the intercepts of quadratic equations.',
          time: '1',
          creator: 'Jake',
          resourceValues: '',
          quizQuestions: [
            {
              question: 'Find the y-intercept of y = x^2 + 3',
              answer: '3'
            },
            {
              question: 'Find the y-intercept of y = x^2 + 6',
              answer: '6'
            },
            {
              question: 'Find the y-intercept of y = x^2 + 9',
              answer: '9'
            }
          ],
          comments: [
            {
              author: 'Megan',
              message: 'Thank you so much!'
            }
          ]
        },
        { 
          type: 'Resource',
          yearLevel: '11',
          subject: 'Biology',
          topic: 'Cellular Transport',
          description: 'An explanation of the process of osmosis.',
          time: 'N/A',
          creator: 'Emma',
          resourceValues: <h3>Osmosis is a form of passive transport in which a solvent moves across a cells 
              semipermeable membrane from an area where it is in high concentration to an area where 
              it is in low concentration. </h3>,
          quizQuestions: [],
          comments: [
            {
              author: 'Brian',
              message: 'That was so helpful'
            }
          ]
        }
      ],
      route: 'auth',
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  onLoadUser = (receivedUser) => {
    this.setState({user: receivedUser})
  }

  onEntryKeyChange = (receivedEntryKey) => {
    this.setState({currentEntryKey: receivedEntryKey});
  }

  onRouteChange = (receivedRoute) => {
    this.setState({route: receivedRoute});
  }

  onUpdateEntries = (updatedEntries) => {
    this.setState({entries: updatedEntries});
    console.log(this.state.entries);
  }

  onChangeAlteredTime = (newTime) => {
    this.setState({alteredTime: newTime});
  }



  render(){

    const { route } = this.state;

    return (
      <div className="App">
        { 

          route == "auth" &&
            <div>
              <LoginNavbar fixed="top" />
              <Auth onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange} className="Auth" />
            </div>
        }

        {

          route == "search" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <EntryTable onChangeAlteredTime={this.onChangeAlteredTime} entryKey={this.state.currentEntryKey} onEntryKeyChange={this.onEntryKeyChange} onRouteChange={this.onRouteChange} entries={this.state.entries} className="EntryTable" />
          </div>

        }

        {
          route == "quiz-view" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <QuizView alteredTime={this.state.alteredTime} entries={this.state.entries} entryKey={this.state.currentEntryKey} className="QuizView" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {
          route == "resource-view" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <ResourceView entries={this.state.entries} entryKey={this.state.currentEntryKey} className="ResourceView" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {
          route == "create-resource" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <CreateResource entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="CreateResource" />
          </div>
        }

        { 
          route == "create-quiz" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <CreateQuiz entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="CreateQuiz" />
          </div>
        }

        { 
          route == "comments" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <Comments user={this.state.user} onUpdateEntries={this.onUpdateEntries} onRouteChange={this.onRouteChange} currentEntryKey={this.state.currentEntryKey} entries={this.state.entries} className="Comments" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {
          route == "remix-quiz" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <RemixQuiz entryKey={this.state.currentEntryKey} entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="RemixQuiz" />
          </div>
        }

        {
          route == "remix-resource" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <RemixResource entryKey={this.state.currentEntryKey} entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="RemixResource" />
          </div>
        }


        
        
        {/*<CreateQuiz className="CreateQuiz" />*/}
        {/*<CreateResource className="CreateResource" />*/}
        
        {/*<ResourceView className="ResourceView" />*/}
        
        {/*<RemixQuiz className="RemixQuiz" />*/}
        {/*<RemixResource className="RemixResource" />*/}
        {/*<Comments className="Comments" />*/}
      </div>
    );
  }
  
}

export default App;
