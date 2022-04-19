import React from 'react';
import './Table.css';
import { Avatar } from '@mui/material';

function Table({ data }) {
  return (
    <div className='wrapper_table'>
      <h1 className='title'>Selected Files</h1>
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <Avatar className='icon' src='./assets/3.svg' />
              <p>{item.name}</p>
              <p>{item.role}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Table