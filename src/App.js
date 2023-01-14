import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SigninFailover from './components/SigninFailover';
import SinginOTP from './components/SigninOTP';
import Register from './components/Register';
import UserVoteSelection from './components/UserVoteSelection';
import UserVoteConfirm from './components/UserVoteConfirm';
import UserVoteTurnout from './components/UserVoteTurnout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<SigninPage/>}/>
        <Route exact path='/signinFailover' element={<SigninFailover/>}/>
        <Route exact path='/signinOTP' element={<SinginOTP/>}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/userVoteSelection' element={<UserVoteSelection />}/>
        <Route exact path='/voteConfirm' element={<UserVoteConfirm />}/>
        <Route exact path='userVoteTurnout' element={<UserVoteTurnout />}/>
      </Routes>
    </Router>
  );
}

export default App;