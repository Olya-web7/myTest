import React from 'react';
import './Table.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Table({ data }) {
  return (
    <div className='wrapper_table'>
      <h1 className='title'>Selected Files</h1>
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <AccountCircleIcon />
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