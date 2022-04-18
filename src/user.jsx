import React from 'react';
import './user.css';
import { Users } from './Users';

function User() {
  return (
    <div className='wrapper'>
      <h1 className='title'>Selected Files</h1>
      <ul className="list">
        {Users.map(user => (
          <li key={user.id} className="listItem">{user.name}</li>  
        ))}
        
      </ul>      
    </div>
  )
}

export default User