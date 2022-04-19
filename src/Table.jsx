import React, { useEffect, useState } from 'react';
import './Table.css';
import { Avatar } from '@mui/material';

function Table({ data }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  return (
    <div className='wrapper_table'>
      <h1 className='title'>Selected Files</h1>
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <Avatar className='icon' src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
              <p>{item.name}</p>
              <p className='role' >{item.role}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Table