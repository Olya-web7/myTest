import React from 'react';
import './MyTable.scss';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey, orange } from '@mui/material/colors';

export default function MyTable({ data }) {

  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };


  return (
    <div className='wrapper_table'>      

      <div className='table_header'>
        <h1 className='title'>Selected Files</h1>
        <div>
          <span className='title'>Select all users</span>
          <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={handleChange1}
                      sx={{color: grey[700], '&.Mui-checked': {color: orange[800]}}}
                    />
                  }
                />
        </div>
      </div>

        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="listItem">
              <div className='table_container'>
                <div className='name_avatar'>
                  <Avatar src={item.image} className='icon'
                    sx={{ width: 30, height: 30, backgroundColor: item.color }}>{item.name[0]}</Avatar>
                  <p>{item.name}</p>
                </div>
                <div className='name_avatar'><p className={`role ${item.role}`} >{item.role}</p></div>
                <p>{item.email}</p>
              </div>
              <Checkbox sx={{color: grey[700], '&.Mui-checked': {color: orange[800]}}}
                checked={checked} onChange={handleChange1}
                />
            </li>
          ))}
        </ul>
    </div>
  )
}
