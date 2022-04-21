import React from 'react';
import './Files.css';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Checkbox } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

function Files({ data }) {
  return (
    <div className='wrapper_files'>
      <h1 className='title'>Selected Files</h1>

      <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem_files">
              <div className='file_name'>
                <InsertDriveFileOutlinedIcon sx={{ color: item.color }} className='icon_files'/>
                <p>{item.name}</p>
              </div>
              <Checkbox sx={{color: grey[700], '&.Mui-checked': {color: orange[800]}}}/>
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default Files