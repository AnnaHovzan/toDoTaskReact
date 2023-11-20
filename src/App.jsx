import { useState } from 'react'
import './App.css'
import ToDoSection from './components/toDoSection'
import { ToDoWrapper } from './components/toDoWrapper';
import { ToDoForm } from './components/toDoForm';

function App() {

  return (
    <div className='App'>
      <ToDoWrapper/>
    </div>
  );
}

export default App
