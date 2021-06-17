import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Doctor appointment',
      day:'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2, 
      text: 'Meeting at School',
      day:'Feb 10th at 3:30pm',
      reminder: false,
    },
    {
      id: 3, 
      text: 'Drivers licence',
      day:'Feb 28th at 12:00pm',
      reminder: true,
    },
  ])
  return (
    <div className= 'container'>
      <Header />
      <Tasks tasks={tasks} /> 
    </div>
  )
}

export default App;
