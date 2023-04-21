import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Na from './components/Na'
import Routes from './Routes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import ChatBot from './components/ChatBot';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchAllQuestions()) //fetchAllQuestions() is a function with no parameters because it is a get request from the database
     dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
    <Router>
        <Na />
        <Routes />
        <ChatBot />
    </Router>
    </div>
  );
}

export default App;
