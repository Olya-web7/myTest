import React from 'react';
import './Files.css';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

function Files({ data }) {
  return (
    <div className='wrapper_files'>
      <h1 className='title'>Selected Files</h1>

      <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <InsertDriveFileOutlinedIcon sx={{ color: item.color }}/>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default Files