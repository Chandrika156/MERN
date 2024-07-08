import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import TaskManager from './components/TaskManager';

const App = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setTasks(currentUser.tasks || []);
    }
  }, [currentUser]);

  const handleRegister = (userDetails) => {
    setUsers([...users, { ...userDetails, tasks: [] }]);
    localStorage.setItem('users', JSON.stringify([...users, { ...userDetails, tasks: [] }]));
  };

  const handleLogin = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleUpdatePassword = (newPassword) => {
    const updatedUser = { ...currentUser, password: newPassword };
    const updatedUsers = users.map(user => user.email === currentUser.email ? updatedUser : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setCurrentUser(updatedUser);
  };

  const handleAddTask = (task) => {
    const updatedUser = { ...currentUser, tasks: [...currentUser.tasks, task] };
    const updatedUsers = users.map(user => user.email === currentUser.email ? updatedUser : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setTasks(updatedUser.tasks);
  };

  return (
    <div>
      {!currentUser ? (
        <>
          <Register onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <Profile user={currentUser} onUpdatePassword={handleUpdatePassword} />
          <TaskManager tasks={tasks} onAddTask={handleAddTask} />
        </>
      )}
    </div>
  );
};

export default App;
