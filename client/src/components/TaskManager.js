import React, { useState } from 'react';

const TaskManager = ({ tasks, onAddTask }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleAddTask = () => {
    const newTask = { time, date, note };
    onAddTask(newTask);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{`${task.date} ${task.time} - ${task.note}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
