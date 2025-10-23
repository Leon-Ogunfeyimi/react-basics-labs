import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });
    return (
    <div className="container">
      <h1>Tasky</h1>
        {taskState.tasks.map((task) => (
          <Task 
          title={task.title}
          description={task.description} //descriptions wasn't coming up so I had to update my Task.jsx to view them
          deadline={task.deadline}
          />
          ))} 
        </div>
      );
    }

export default App;
