import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    window.location.href = '/login';
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={() => {
        localStorage.removeItem('loggedInUser');
        window.location.href = '/login';
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
