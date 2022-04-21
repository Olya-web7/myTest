import React from 'react';
import './Btn.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Btn() {
  return (
    <div className='wrapper_button'>
      <button className='btn_send'>
        <EmailOutlinedIcon className='icon_btn' />
        Send
      </button>
    </div>
  )
}

export default Btn;