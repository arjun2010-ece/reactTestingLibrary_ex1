import React, {useState} from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import CounterStorage from './components/CounterStorage';
import MessageComponent from './components/MessageComponent';
import Fetch from './components/Fetch';

import './App.css';

const App = () => {
  const [text, setText] = useState('Login');
  const changeLogin = () => {
    setText('Logout')
  }
  return (
    <div className='app'>
      <button onClick={() => changeLogin()}>{text}</button>
       <Hello name='Arjun' />
       <hr />
       <MessageComponent />
       <hr/>
       <Counter />
       <hr/>
       <CounterStorage />
       <hr/>
       <Fetch url='https://jsonplaceholder.typicode.com/users' />
    </div>
  )
}
export default App;