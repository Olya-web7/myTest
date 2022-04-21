import React from 'react';
import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';

const columns = [
  { field: 'id', headerName: '', width: 70 },
  { field: 'name', headerName: '', width: 130, renderCell: (params)=>{
    return (
      <div className="cellWithImg">
        <Avatar src={params.row.image} alt="avatar" className="cellImg" />
        <p>{params.row.name}</p>
      </div>
    )
  } },
 
];

export default function Datatable({data}) {
  
  return (
    <div className='datatable'>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        pageSize={4}
      />
    </div>
  )
}
