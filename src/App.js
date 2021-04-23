import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router';
import Friends from './Components/Friends/Friends';
import News from './Components/News/News';
import Dialog from './Components/Messages/Dialog/Dialog';

const App = (props) => {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <div className='Content'>
          <Route path='/message' render={() => <Messages state={props.state}/>} />
          <Route path='/Profile' render={() => <Profile state={props.state} newPost={props.newPost} />} />
          <Route path='/friend' render={() => <Friends state={props.state}/>} />
          <Route path='/dialog' render={() => <Dialog state={props.state} newMessage={props.newMessage}/>}/>
          <Route path='/news' render={() => <News state={props.state} Title={props.Title} />} />
          
        </div>
    </div>
  );
}

export default App;
