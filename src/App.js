import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import StartingPage from './components/StartingPage';
import ChattingPage from './components/ChattingPage';
import Socket from './components/Socket';
const io = socketIOClient("https://group-chatting-api.herokuapp.com/");
function App ()

{
  const [ data, setData ] = useState( [] );
  console.log( data );
  return (
    <div className="App">
      <Router>
        <Socket data={data} setData={setData} socket={io}/>
        <Routes>
          <Route path='/' element={ <StartingPage socket={io}/> } />
          <Route path='/chat/:room_name/:userName' element={<ChattingPage data={data} setData={setData} socket={io}/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
