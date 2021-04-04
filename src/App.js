//Importing the essential React libraries
import React, {Component} from 'react';

//Importing the child components
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

//Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing the Container component from bootstrap
import Container from 'react-bootstrap/Container';

//Importing the associated CSS file
import './App.css';

//This is the "master component"
//It contains all of the other components
class App extends Component {

  //This is the constructor of the component
  constructor(){
    super();

    //This "state" object is one of the unique aspects of ReactJS
    //It essentially stores a list of variables for the component
    //This component can then pass on these variables to its child components
    //This is helpful when it comes to ensuring that variables are sustained over when components change
    //This also means that these "state" variables can only be edited in the component they belong to
    //However, when the state variables change, they will also change for the child component using them
    this.state = {
      //This is like the index of which entry is currently being used (from the entries array below)
      currentEntryKey: '',

      //This stores the altered time limit for a quiz that the user may select
      alteredTime: '',

      //This entries array stores each entry as an object
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
      ],

      //This state variable is for routing; its value decides which components are displayed
      route: 'auth',

      //This stores the information for the user currently logged in as an object
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  //This function loads a new user into the state user object
  onLoadUser = (receivedUser) => {
    this.setState({user: receivedUser})
  }

  //This function changes the state currentEntryKey variable
  onEntryKeyChange = (receivedEntryKey) => {
    this.setState({currentEntryKey: receivedEntryKey});
  }

  //This function changes the state route variable, and therefore changes which components are displayed
  onRouteChange = (receivedRoute) => {
    this.setState({route: receivedRoute});
  }

  //This function updates the state entry array
  onUpdateEntries = (updatedEntries) => {
    this.setState({entries: updatedEntries});
    
  }

  //This function changes the state alteredTime variable
  onChangeAlteredTime = (newTime) => {
    this.setState({alteredTime: newTime});
  }



  render(){

    //This initalises a constant with the value of the state route variable
    //This shorthand syntax just means: const route = this.state.route
    const { route } = this.state;

    return (

      <div className="App">
        {/* When the route is "auth", it displays the Auth component and the LoginNavbar*/}
        { 
        
          route == "auth" &&
            <div>
              {/*As seen here, the Navbar is fixed to the top*/}
              <LoginNavbar fixed="top" />
              
            {/*Here is an example of passing state variables to a child component. In this case, only functions
            are being passed to the child component. 
            These will be accessed in the child component as "props".*/}
              <Auth onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange} className="Auth" />
            </div>
        }

        {/* When the route is "search", it displays the EntryTable component and the HomeNavbar*/}
        {
        
          route == "search" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <EntryTable onChangeAlteredTime={this.onChangeAlteredTime} entryKey={this.state.currentEntryKey} onEntryKeyChange={this.onEntryKeyChange} onRouteChange={this.onRouteChange} entries={this.state.entries}
            onUpdateEntries={this.onUpdateEntries} className="EntryTable" />
          </div>

        }

        {/* When the route is "quiz-view", it displays the QuizView, EntryOptions and HomeNavbar components*/}
        {
        
          route == "quiz-view" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <QuizView alteredTime={this.state.alteredTime} entries={this.state.entries} entryKey={this.state.currentEntryKey} className="QuizView" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {/*When the route is "resource-view", 
          it displays the ResourceView, EntryOptions and HomeNavbar components*/}
        {
        
          route == "resource-view" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <ResourceView entries={this.state.entries} entryKey={this.state.currentEntryKey} className="ResourceView" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {/* When the route is "create-resource", it displays the HomeNavbar and CreateResource components*/}
        {
        
          route == "create-resource" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <CreateResource entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="CreateResource" />
          </div>
        }

        {/* When the route is "create-quiz", it displays the CreateQuiz and HomeNavbar components*/}
        { 
        
          route == "create-quiz" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <CreateQuiz entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="CreateQuiz" />
          </div>
        }

        {/* When the route is "comments", it displays the Comments, EntryOptions and HomeNavbar components*/}
        { 
        
          route == "comments" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <Comments user={this.state.user} onUpdateEntries={this.onUpdateEntries} onRouteChange={this.onRouteChange} currentEntryKey={this.state.currentEntryKey} entries={this.state.entries} className="Comments" />
            <EntryOptions entryKey={this.state.currentEntryKey} entries={this.state.entries} onRouteChange={this.onRouteChange} className="EntryOptions" />
          </div>
        }

        {/* When the route is "remix-quiz", it displays the HomeNavbar and RemixQuiz components*/}
        {
        
          route == "remix-quiz" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <RemixQuiz entryKey={this.state.currentEntryKey} entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="RemixQuiz" />
          </div>
        }

        {/* When the route is "remix-resource", it displays the HomeNavbar and RemixResource components*/}
        {
        
          route == "remix-resource" &&
          <div>
            <HomeNavbar onRouteChange={this.onRouteChange} fixed="top" />
            <RemixResource entryKey={this.state.currentEntryKey} entries={this.state.entries} user={this.state.user} onUpdateEntries={this.onUpdateEntries} className="RemixResource" />
          </div>
        }
      </div>
    );
  }
  
}

export default App;
