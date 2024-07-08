import React, { useState } from 'react';

const Profile = ({ user, onUpdatePassword }) => {
  const [password, setPassword] = useState('');

  const handleChangePassword = () => {
    onUpdatePassword(password);
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default Profile;
