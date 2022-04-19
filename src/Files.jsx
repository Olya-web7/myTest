import React from 'react';
import './Files.css';

function Files({ data }) {
  return (
    <div className='wrapper_files'>
      <h1 className='title'>Selected Files</h1>

      <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default Files